namespace SeniorProject.Models.Dto;

public class UpdateShelterDto
{
    public Guid? ShelterId { get; set; }
    public string? ShelterName { get; set; }
    
    public string? Address { get; set; }

    public string? City { get; set; }

    public string? State { get; set; }

    public string? ZipCode { get; set; }
    
    public string? PhoneNumber { get; set; }

    public string? Email { get; set; }

    public string? WebsiteUrl { get; set; }

    public string? AdditionalInformation { get; set; }
    
    // public IFormFile? ShelterPhoto { get; set; } 
}