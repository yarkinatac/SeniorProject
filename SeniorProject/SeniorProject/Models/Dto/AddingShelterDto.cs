namespace SeniorProject.Models.Dto;

public class AddingShelterDto
{
    public string ShelterName { get; set; }
    public string Address { get; set; }

    public string? City { get; set; }

    public string? State { get; set; }
    
    public string PermitNumber { get; set; }

    public string RepName { get; set; }

    
    public string RepPhone { get; set; }

  
    public string RepEmail { get; set; }

    public string? WebsiteUrl { get; set; }
    // public IFormFile? ShelterPhoto { get; set; } = null!;

}