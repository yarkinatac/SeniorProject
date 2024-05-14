using SeniorProject.Data.Enum;

namespace SeniorProject.Models.Dto;

public class UpdatePetDto
{
    public Guid? PetId { get; set; }
    public string? Name { get; set; }
    public string? Type { get; set; }
    public int? Age { get; set; }
    public string? Breed { get; set; }
    public string? Sex { get; set; }
    public int? Distance { get; set; }
    public string? Size { get; set; }
    public string? Shedding { get; set; }
    public string? Personality { get; set; }
    public IFormFile? PetPhoto { get; set; }
    public string Bio { get; set; }
    
    public AdvertType AdvertType { get; set; }
}