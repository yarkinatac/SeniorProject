using System.ComponentModel.DataAnnotations;

namespace SeniorProject.Models;

public class AddShelter
{
    [Required]
    [MaxLength(256)]
    public
        string Name { get; set; } // Barınağın ismi

    [Required]
    public string Location { get; set; } // Barınağın konumu (örneğin, şehir, semt)

    [Required]
    [Phone]
    public string Phone { get; set; } // Barınağın iletişim numarası
    [Required]
    public string WebsiteUrl { get; set; } // Barınağın web sitesi (isteğe bağlı)

    // Ek bilgiler veya özel talepler için bir alan olabilir
    public string AdditionalInformation { get; set; }
}