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
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable>> GetShelters()
        {
            if (_context.Shelters == null)
            {
                return NotFound();
            }
            return await _context.Shelters.Include(s => s.Photos).ToListAsync();
        }

        [HttpPost]
        public async Task<IActionResult> AddShelter([FromForm] AddingShelterDto addingShelter)
        {
            
            // Fotoğrafı Azure Blob Storage'a yükle
            var photoUrl = await _blobService.UploadShelterPhotoAsync(addingShelter.ShelterPhoto, addingShelter.Name);

            var shelter = new Shelter
            {
                Name = addingShelter.Name,
                Address = addingShelter.Address,
                City = addingShelter.City,
                State = addingShelter.State,
                ZipCode = addingShelter.ZipCode,
                PhoneNumber = addingShelter.PhoneNumber,
                Email = addingShelter.Email,
                WebsiteUrl = addingShelter.WebsiteUrl,
                AdditionalInformation = addingShelter.AdditionalInformation,
                Photos = new List<ShelterPhoto>
                {
                    new ShelterPhoto { PhotoUrl = photoUrl } 
                }
            };
            _context.Shelters.Add(shelter);
            await _context.SaveChangesAsync();
            var data = _context.Shelters
                .Include(s => s.Photos) // Include photos of the shelter
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
            updatedShelter.Name = string.IsNullOrEmpty(shelter.Name) ? updatedShelter.Name : shelter.Name;
            updatedShelter.City = string.IsNullOrEmpty(shelter.City) ? updatedShelter.City : shelter.City;
            updatedShelter.State = string.IsNullOrEmpty(shelter.State) ? updatedShelter.State : shelter.State;
            updatedShelter.ZipCode = string.IsNullOrEmpty(shelter.ZipCode) ? updatedShelter.ZipCode : shelter.ZipCode;
            updatedShelter.WebsiteUrl = string.IsNullOrEmpty(shelter.WebsiteUrl) ? updatedShelter.WebsiteUrl : shelter.WebsiteUrl;
            updatedShelter.AdditionalInformation = string.IsNullOrEmpty(shelter.AdditionalInformation) ? updatedShelter.AdditionalInformation : shelter.AdditionalInformation;
            updatedShelter.Email = string.IsNullOrEmpty(shelter.Email) ? updatedShelter.Email : shelter.Email;
            updatedShelter.PhoneNumber = string.IsNullOrEmpty(shelter.PhoneNumber) ? updatedShelter.PhoneNumber : shelter.PhoneNumber;
            
            if (shelter.ShelterPhoto != null)
            {
                var photoUrl = await _blobService.UploadShelterPhotoAsync(shelter.ShelterPhoto, shelter.Name);

            }
            
            await _context.SaveChangesAsync();

            return Ok(shelter);
        }

    }
}