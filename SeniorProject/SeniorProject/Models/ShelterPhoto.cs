using System.ComponentModel.DataAnnotations;

namespace SeniorProject.Models;

public class ShelterPhoto
{
    [Key]
    public Guid PhotoId { get; set; } // Benzersiz fotoğraf kimliği

    public Guid ShelterId { get; set; } // İlişkili barınak kimliği

    [Required]
    public string PhotoUrl { get; set; } // Fotoğrafın URL'si

    // İsteğe bağlı olarak fotoğrafın açıklaması
    public string Description { get; set; }

    // Barınağa geri referans
    public virtual Shelter Shelter { get; set; }
}