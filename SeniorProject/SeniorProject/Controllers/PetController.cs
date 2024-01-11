using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SeniorProject.Models;
using SeniorProject.Models.Dto;
using SeniorProject.Services.Blob;

namespace SeniorProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetController : ControllerBase
    {
        private readonly PetsConnectedDbContext _context;
        private readonly BlobService _blobService;

        public PetController(PetsConnectedDbContext context)
        {
            _context = context;
        }

        // GET: api/Pet
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pet>>> GetPets()
        {
          if (_context.Pets == null)
          {
              return NotFound();
          }
            return await _context.Pets.ToListAsync();
        }

        // GET: api/Pet/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pet>> GetPet(Guid id)
        {
          if (_context.Pets == null)
          {
              return NotFound();
          }
            var pet = await _context.Pets.FindAsync(id);

            if (pet == null)
            {
                return NotFound();
            }

            return pet;
        }

        // PUT: api/Pet/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPet(Guid id, Pet pet)
        {
            if (id != pet.PetId)
            {
                return BadRequest();
            }

            _context.Entry(pet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        
        
        [HttpPost("AddPet")]
        [Authorize] // Giriş yapmış kullanıcıları kabul et
        public async Task<ActionResult<Pet>> AddPet([FromForm] CombinedDto combinedDto)
        {
            var userId = GetUserIdFromToken(); // Token'dan UserId elde et

            if (userId == Guid.Empty)
            {
                return NotFound(new { message = "User not found." });
            }

            // Fotoğrafı Azure Blob Storage'a yükle
            var photoUrl = await _blobService.UploadPhotoAsync(combinedDto.PetPhoto);

            var pet = new Pet
            {
                Name = combinedDto.Name,
                Type = combinedDto.Type,
                Age = combinedDto.Age,
                Breed = combinedDto.Breed,
                Sex = combinedDto.Sex,
                Distance = combinedDto.Distance,
                Size = combinedDto.Size,
                Shedding = combinedDto.Shedding,
                Personality = combinedDto.Personality,
                UserId = userId,
                Photos = new List<PetPhoto>
                {
                    new PetPhoto { PhotoUrl = photoUrl } // Yeni PetPhoto nesnesini oluştur ve URL'yi ekle
                }
            };

            _context.Pets.Add(pet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPet", new { id = pet.PetId }, pet);
        }



        private Guid GetUserIdFromToken()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var userClaim = identity.FindFirst("id");
                if (userClaim != null)
                {
                    return Guid.Parse(userClaim.Value);
                }
            }
            return Guid.Empty;
        }





        // DELETE: api/Pet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePet(Guid id)
        {
            if (_context.Pets == null)
            {
                return NotFound();
            }
            var pet = await _context.Pets.FindAsync(id);
            if (pet == null)
            {
                return NotFound();
            }

            _context.Pets.Remove(pet);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PetExists(Guid id)
        {
            return (_context.Pets?.Any(e => e.PetId == id)).GetValueOrDefault();
        }
    }
}
