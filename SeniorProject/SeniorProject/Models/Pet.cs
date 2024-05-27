using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using SeniorProject.Data.Enum;

namespace SeniorProject.Models;

public class Pet
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid PetId { get; set; }

    [Required]
    [MaxLength(256)]
    public string Name { get; set; }

    [Required]
    public string Type { get; set; } // Örneğin köpek, kedi vs.

    public int Age { get; set; }

    // Yeni eklenen özellikler
    public string Breed { get; set; } // Cins
    public string Sex { get; set; } // Cinsiyet

    public string HealthInfo { get; set; }
    public double? Distance { get; set; } // Mesafe (kullanıcının konumuna olan uzaklık)
    public string Size { get; set; } // Boyut (X Small, Small, Medium, Large, X Large)
    public string Shedding { get; set; } // Tüy Dökme (Low, Medium, High)
    public string Personality { get; set; } // Kişilik (Energetic, Calm, Aggressive, Affectionate, Shy, Curious)

    public string Bio { get; set; }
    
    public AdvertType AdvertType { get; set; }
    public DateTime? Start { get; set; }

    public DateTime? End { get; set; }
    // Foreign Key
    public Guid UserId { get; set; }

    // Navigation property - Bir pet'in sahibi olur
    [ForeignKey("UserId")]
    public virtual User Owner { get; set; }
    
    
    public virtual ICollection<PetPhoto> Photos { get; set; }
}