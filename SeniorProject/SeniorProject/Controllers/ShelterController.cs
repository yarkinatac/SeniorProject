using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SeniorProject.Models;
using SeniorProject.Models.Dto;
using SeniorProject.Services.Blob;

namespace SeniorProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShelterController : ControllerBase
    {
        private readonly PetsConnectedDbContext _context;
        private readonly BlobService _blobService;

        public ShelterController(PetsConnectedDbContext context, BlobService blobService)
        {
            _context = context;
            _blobService = blobService;
        }

        // GET: api/Shelter
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shelter>>> GetShelters()
        {
            if (_context.Shelters == null)
            {
                return NotFound();
            }

            return await _context.Shelters.ToListAsync();
        }

        // GET: api/Shelter/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Shelter>> GetShelter(Guid id)
        {
            if (_context.Shelters == null)
            {
                return NotFound();
            }

            var shelter = await _context.Shelters.FindAsync(id);

            if (shelter == null)
            {
                return NotFound();
            }

            return shelter;
        }

        // PUT: api/Shelter/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShelter(Guid id, Shelter shelter)
        {
            if (id != shelter.ShelterId)
            {
                return BadRequest();
            }


            _context.Entry(shelter).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShelterExists(id))
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

        [HttpPost("AddShelter")]

        public async Task<ActionResult> AddShelter([FromForm] ShelterDto shelterDto)
        {
            

            // Fotoğrafı Azure Blob Storage'a yükle
            var photoUrl = await _blobService.UploadPhotoAsync(shelterDto.ShelterPhoto);

            var shelter = new Shelter
            {
                Name = shelterDto.Name,
                Location = shelterDto.Location,
                Phone = shelterDto.Phone,
                WebsiteUrl = shelterDto.WebsiteUrl,
                Photos = new List<ShelterPhoto>
                {
                    new ShelterPhoto { PhotoUrl = photoUrl } 
                },
                // Diğer gerekli alanlar
            };
            _context.Shelters.Add(shelter);
            await _context.SaveChangesAsync();
            var data = _context.Shelters.Include(x => x.ShelterId).FirstOrDefault(x => x.ShelterId == shelter.ShelterId);
            return Ok(data);
        }

        // DELETE: api/Shelter/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShelter(Guid id)
        {
            var shelter = await _context.Shelters.FindAsync(id);
            if (shelter == null)
            {
                return NotFound();
            }

            _context.Shelters.Remove(shelter);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ShelterExists(Guid id)
        {
            return _context.Shelters.Any(e => e.ShelterId == id);
        }
    }
}