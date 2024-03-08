using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeniorProject.Models;

public class Veterinarian
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid VeterinarianId { get; set; }

    [Required]
    [MaxLength(256)]
    public string Name { get; set; }

    [Required]
    [MaxLength(500)]
    public string Location { get; set; }

    [Required]
    public virtual ICollection<Service> ServicesOffered { get; set; }
}

public class Service
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid ServiceId { get; set; }

    [Required]
    [MaxLength(256)]
    public string ServiceName { get; set; }

    // Diğer gerekli özellikler

    // Hizmetin sunulduğu veterineri belirten navigasyon özelliği
    public Guid VeterinarianId { get; set; }
    public virtual Veterinarian Veterinarian { get; set; }
}