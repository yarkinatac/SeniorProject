using System.Collections;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;


using SeniorProject.Models;
using System.IdentityModel.Tokens.Jwt;
using Google.Apis.Auth;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace SeniorProject.V2.Controllers
{


    [Route("api/v2/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly PetsConnectedDbContext _context;
        private readonly IConfiguration _configuration; // JWT için gereklidir.

        public AccountController(PetsConnectedDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetUser(Guid id)
        {
            var user = await _context.Users
                .Where(u => u.UserId == id)
                .Select(u => new
                {
                    u.PhoneNumber,
                    u.UserId,
                    u.Fullname,
                    u.Email,
                    Pets = u.Pets.Select(p => new
                    {
                        p.PetId,
                        p.Name,
                        p.Type,
                        p.Age,
                        p.Breed,
                        p.Sex,
                        p.Distance,
                        p.Size,
                        p.Shedding,
                        p.Personality,
                        Photos = p.Photos.Select(photo => new
                        {
                            photo.PhotoUrl
                            // Diğer fotoğraf bilgileri burada döndürülebilir.
                        }).ToList()
                    }).ToList()
                })
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return NotFound(new { message = "User not found." });
            }

            return Ok(user);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable>> GetUsers()
        {
            if (_context.Users == null)
            {
                return NotFound();
            }

            // Kullanıcı listesi döndürülürken, her bir kullanıcı için pet bilgileri de dahil edilir
            var users = await _context.Users.Include(x => x.Pets).Select(user => new
            {
                user.PhoneNumber,
                user.UserId,
                user.Email,
                user.Fullname,
                Pets = user.Pets.Select(pet => new 
                {
                    pet.PetId,
                    pet.Name,
                    pet.Type,
                    pet.Breed,
                    pet.Photos,
                    pet.Age,
                    pet.Distance,
                    pet.Personality,
                    pet.Sex
                }).ToList()
            }).ToListAsync();

            return Ok(users);
        }


        // POST: api/Account/Register
        [HttpPost("Register")]
        public IActionResult Register([FromBody] Register model)
        {
            if (ModelState.IsValid)
            {
                var user = new User
                {
                    Email = model.Email,
                    Password = model.Password,
                    Fullname = model.Fullname,
                    PhoneNumber = model.PhoneNumber
                };

                _context.Users.Add(user);
                _context.SaveChanges();
                return Ok(new { message = "Registration successful", userId = user.UserId });
            }

            return BadRequest(ModelState);
        }

        [HttpPost("Login")]
        public IActionResult Login(Login model)
        {
            if (ModelState.IsValid)
            {
                var user = _context.Users.FirstOrDefault(u => u.Email == model.Email);
                if (user != null)
                {
                    var password = model.Password;
                    if (password == user.Password)
                    {
                        var token = GenerateJwtToken(user);

                        // Token'i kullanıcıya dön
                        return Ok(new { message = "Login successful", token });
                    }
                }

                // Kullanıcı bulunamadı veya şifre uyuşmadıysa
                return Unauthorized(new { message = "Email or password is incorrect." });
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("DeleteUser/{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Users.Include(u => u.Pets).FirstOrDefaultAsync(u => u.UserId == id);
            if (user == null)
            {
                return NotFound(new { message = "User not found." });
            }

            // Kullanıcıya ait evcil hayvanları sil
            if (user.Pets.Any())
            {
                _context.Pets.RemoveRange(user.Pets);
            }

            // Sonra kullanıcıyı sil
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User and their pets deleted successfully." });
        }




        // [Route("api/[controller]")]
        // [ApiController]
        // public class AuthenticationController : ControllerBase
        // {
        //     [HttpPost("google")]
        //     public async Task<IActionResult> Google([FromBody] GoogleTokenRequest request)
        //     {
        //         try
        //         {
        //             var settings = new GoogleJsonWebSignature.ValidationSettings
        //             {
        //                 // Burada, token'ın hangi Google API projesi tarafından verildiğini belirten Audience (aud) parametresini doğrulayabilirsiniz.
        //                 // Bu genellikle, Google Cloud Console'da oluşturduğunuz Client ID'dir.
        //                 Audience = new[] { "YOUR_CLIENT_ID.apps.googleusercontent.com" }
        //             };
        //
        //             var payload = await GoogleJsonWebSignature.ValidateAsync(request.Token, settings);
        //             // Token başarılı bir şekilde doğrulanırsa, kullanıcı bilgileri payload içinde yer alır.
        //             // Burada kullanıcıyı sisteminize kaydedebilir veya bir JWT token oluşturup geri döndürebilirsiniz.
        //
        //             return Ok(new { UserId = payload.Subject, Email = payload.Email, Name = payload.Name });
        //         }
        //         catch (InvalidJwtException)
        //         {
        //             // Token geçersizse, bir hata mesajı döndür
        //             return Unauthorized("Invalid Google token.");
        //         }
        //     }
        //
        //     public class GoogleTokenRequest
        //     {
        //         public string Token { get; set; }
        //     }
        // }


        // Create JWT Token.
        private string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["JwtConfig:Secret"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("id", user.UserId.ToString()),
                    new Claim(ClaimTypes.Email, user.Email)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        // Google kimlik doğrulama işlemleri için Web API'de farklı bir yaklaşım gereklidir.
        // Bu, genellikle frontend tarafında yapılır ve backend sadece token doğrulaması yapar.

        [HttpPost("Logout")]
        public IActionResult Logout()
        {
            // Web API'de oturum sonlandırmak genellikle gerekli değildir çünkü oturum durumu yoktur.
            // Kullanıcı cihazında token'ı silerse bu yeterlidir.
            return Ok(new { message = "Logged out successfully" });
        }


    }
}
