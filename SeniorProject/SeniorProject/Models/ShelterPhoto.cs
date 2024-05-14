using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeniorProject.Models;

public class ShelterPhoto
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid ShelterPhotoId { get; set; }

    
    public string PhotoUrl { get; set; } // URL of the photo

    [Required]
    public Guid ShelterId { get; set; }

  
    [ForeignKey("ShelterId")]
    public virtual Shelter Shelter { get; set; }
}