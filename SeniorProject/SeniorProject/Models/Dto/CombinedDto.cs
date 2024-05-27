using SeniorProject.Data.Enum;

namespace SeniorProject.Models.Dto;

public class CombinedDto
{
    public string Name { get; set; }
    public string Type { get; set; }
    public int Age { get; set; }
    public string Breed { get; set; }
    public string Sex { get; set; }
    public int Distance { get; set; }
    public string Size { get; set; }
    public string Shedding { get; set; }
    public string Personality { get; set; }
    public string  Bio { get; set; }

    public string HealthInfo { get; set; }
    public DateTime? Start { get; set; }

    public DateTime? End { get; set; }
    public AdvertType AdvertType { get; set; }
    public IFormFile PetPhoto { get; set; } = null!;
}