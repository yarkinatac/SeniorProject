using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

using SeniorProject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.IdentityModel.Tokens.Jwt;
using Google.Apis.Auth;
using Microsoft.IdentityModel.Tokens;

[Route("api/[controller]")]
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
                FirstName = model.FirstName,
                LastName = model.LastName,
            };

            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok(new { message = "Registration successful" , userId = user.UserId});
        }
        return BadRequest(ModelState);
    }
    
    [HttpPost("Login")]
    public IActionResult Login(Login model)
    {
        if (ModelState.IsValid)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == model.Email);
            if (user != null && model.Password == user.Password)
            {
                var token = GenerateJwtToken(user);

                // Token'i kullanıcıya dön
                return Ok(new { message = "Login successful", token });
            }
            else
            {
                return Unauthorized(new { message = "Email or password is incorrect." });
            }
        }

        return BadRequest(ModelState);
    }
    
    

    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        [HttpPost("google")]
        public async Task<IActionResult> Google([FromBody] GoogleTokenRequest request)
        {
            try
            {
                var settings = new GoogleJsonWebSignature.ValidationSettings
                {
                    // Burada, token'ın hangi Google API projesi tarafından verildiğini belirten Audience (aud) parametresini doğrulayabilirsiniz.
                    // Bu genellikle, Google Cloud Console'da oluşturduğunuz Client ID'dir.
                    Audience = new[] { "YOUR_CLIENT_ID.apps.googleusercontent.com" }
                };

                var payload = await GoogleJsonWebSignature.ValidateAsync(request.Token, settings);
                // Token başarılı bir şekilde doğrulanırsa, kullanıcı bilgileri payload içinde yer alır.
                // Burada kullanıcıyı sisteminize kaydedebilir veya bir JWT token oluşturup geri döndürebilirsiniz.

                return Ok(new { UserId = payload.Subject, Email = payload.Email, Name = payload.Name });
            }
            catch (InvalidJwtException)
            {
                // Token geçersizse, bir hata mesajı döndür
                return Unauthorized("Invalid Google token.");
            }
        }

        public class GoogleTokenRequest
        {
            public string Token { get; set; }
        }
    }

    
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
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
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
