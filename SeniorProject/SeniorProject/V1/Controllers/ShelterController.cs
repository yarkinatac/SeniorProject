using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SeniorProject.Models;
using SeniorProject.Models.Dto;
using SeniorProject.Services.Blob;

namespace SeniorProject.V1.Controllers
{
    [Route("api/v1/[controller]")]
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
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable>> GetShelters()
        {
            if (_context.Shelters == null)
            {
                return NotFound();
            }
            return await _context.Shelters.ToListAsync();
        }

        [HttpPost("AddShelter")]
        public async Task<IActionResult> AddShelter([FromForm] AddingShelterDto addingShelter)
        {
            
            // Fotoğrafı Azure Blob Storage'a yükle
            // var photoUrl = await _blobService.UploadShelterPhotoAsync(addingShelter.ShelterPhoto, addingShelter.ShelterName);

            var shelter = new Shelter
            {
                ShelterName = addingShelter.ShelterName,
                Address = addingShelter.Address,
                City = addingShelter.City,
                State = addingShelter.State,
                PermitNumber = addingShelter.PermitNumber,
                RepPhone = addingShelter.RepPhone,
                RepEmail = addingShelter.RepEmail,
                WebsiteUrl = addingShelter.WebsiteUrl,
                
                // Photos = new List<ShelterPhoto>
                // {
                //     new ShelterPhoto { PhotoUrl = photoUrl } 
                // }
            };
            _context.Shelters.Add(shelter);
            await _context.SaveChangesAsync();
            var data = _context.Shelters
                // .Include(s => s.Photos) // Include photos of the shelter
                .FirstOrDefault(s => s.ShelterId == shelter.ShelterId);
            return Ok(data);
        }
        
        [HttpPatch("UpdateShelter")]
        public async Task<IActionResult> UpdateShelter([FromForm] UpdateShelterDto shelter)
        {
            if (shelter == null)
                return BadRequest();
            

            var updatedShelter = await _context.Shelters.FirstOrDefaultAsync(s => s.ShelterId == shelter.ShelterId);
            
            if (updatedShelter == null)
                return NotFound();

            updatedShelter.Address = string.IsNullOrEmpty(shelter.Address) ? updatedShelter.Address : shelter.Address;
            updatedShelter.ShelterName = string.IsNullOrEmpty(shelter.ShelterName) ? updatedShelter.ShelterName : shelter.ShelterName;
            updatedShelter.City = string.IsNullOrEmpty(shelter.City) ? updatedShelter.City : shelter.City;
            updatedShelter.State = string.IsNullOrEmpty(shelter.State) ? updatedShelter.State : shelter.State;
            updatedShelter.WebsiteUrl = string.IsNullOrEmpty(shelter.WebsiteUrl) ? updatedShelter.WebsiteUrl : shelter.WebsiteUrl;
            updatedShelter.RepEmail = string.IsNullOrEmpty(shelter.Email) ? updatedShelter.RepEmail : shelter.Email;
            updatedShelter.RepPhone = string.IsNullOrEmpty(shelter.PhoneNumber) ? updatedShelter.RepPhone : shelter.PhoneNumber;
            // if (shelter.ShelterPhoto != null)
            // {
            //     var photoUrl = await _blobService.UploadShelterPhotoAsync(shelter.ShelterPhoto, shelter.ShelterName);
            //
            // }
            
            await _context.SaveChangesAsync();

            return Ok(shelter);
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShelter(Guid id)
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

            _context.Shelters.Remove(shelter);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ShelterExist(Guid id)
        {
            return (_context.Shelters?.Any(e => e.ShelterId == id)).GetValueOrDefault();
        }

    }
}