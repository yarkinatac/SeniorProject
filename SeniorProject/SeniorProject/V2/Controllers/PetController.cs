using System;
using System.Collections;
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

namespace SeniorProject.V2.Controllers
{
    [Route("api/v2/[controller]")]
    [ApiController]
    public class PetController : ControllerBase
    {
        private readonly PetsConnectedDbContext _context;
        private readonly BlobService _blobService;

        public PetController(PetsConnectedDbContext context, BlobService blobService)
        {
            _context = context;
            _blobService = blobService;
        }
        
        // GET: api/Pet
        [HttpGet]
        public async Task<ActionResult<IEnumerable>> GetPets()
        {
          if (_context.Pets == null)    
          {
              return NotFound();
          }
          return await _context.Pets.Include(x => x.Owner).Include(x => x.Photos).ToListAsync();
        }

        // GET: api/Pet/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetPet(Guid id)
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

            return Ok(pet);
        }

        [HttpPatch("UpdatePet")]
        public async Task<IActionResult> UpdatePet([FromForm] UpdatePetDto pet)
        {
            if (pet == null)
                return BadRequest();
            
            var updatedPet = await _context.Pets.FirstOrDefaultAsync(p => p.PetId == pet.PetId);
            
            if (updatedPet == null)
                return NotFound();

            updatedPet.Type = string.IsNullOrEmpty(pet.Type) ? updatedPet.Type : pet.Type;
            updatedPet.Name = string.IsNullOrEmpty(pet.Name) ? updatedPet.Name : pet.Name;
            updatedPet.Size = string.IsNullOrEmpty(pet.Size) ? updatedPet.Size : pet.Size;
            updatedPet.Age = pet.Age.HasValue ? pet.Age.Value : updatedPet.Age;
            updatedPet.Breed = string.IsNullOrEmpty(pet.Breed) ? updatedPet.Breed : pet.Breed;
            updatedPet.Sex = string.IsNullOrEmpty(pet.Sex) ? updatedPet.Sex : pet.Sex;
            updatedPet.Shedding = string.IsNullOrEmpty(pet.Shedding) ? updatedPet.Shedding : pet.Shedding;
            updatedPet.Personality = string.IsNullOrEmpty(pet.Personality) ? updatedPet.Personality : pet.Personality;
            updatedPet.Distance = pet.Distance.HasValue ? pet.Distance.Value : updatedPet.Distance;
            
            if (pet.PetPhoto != null)
            {
                var photoUrl = await _blobService.UploadPhotoAsync(pet.PetPhoto);

            }
            
            await _context.SaveChangesAsync();

            return Ok(pet);
        }

        
        [HttpPost("AddPet")]
        [Authorize] // Giriş yapmış kullanıcıları kabul et
        public async Task<ActionResult> AddPet([FromForm] CombinedDto combinedDto)
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
                    new PetPhoto { PhotoUrl = photoUrl } 
                }
            };
            _context.Pets.Add(pet);
            await _context.SaveChangesAsync();
            var data = _context.Pets.Include(x => x.Owner).FirstOrDefault(x => x.PetId == pet.PetId);
            return Ok(data);
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
