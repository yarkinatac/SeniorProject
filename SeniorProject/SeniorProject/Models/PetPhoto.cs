using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeniorProject.Models;

public class PetPhoto
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid PetPhotoId { get; set; }

    public string PhotoUrl { get; set; }

    // Foreign Key
    public Guid PetId { get; set; }

    // Navigation property
    [ForeignKey("PetId")]
    public virtual Pet Pet { get; set; }
}
