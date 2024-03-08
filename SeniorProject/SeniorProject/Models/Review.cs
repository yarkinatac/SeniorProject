using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeniorProject.Models;

public class Review
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid ReviewId { get; set; }

    [Required]
    [Range(1, 5)]
    public int Rating { get; set; }

    [MaxLength(1000)]
    public string Comment { get; set; }

    // Kullanıcıya ait yorumlar için
    [Required]
    public Guid UserId { get; set; }
    [ForeignKey("UserId")]
    public virtual User User { get; set; }

    // Veterinere ait yorumlar için
    [Required]
    public Guid VeterinarianId { get; set; }
    [ForeignKey("VeterinarianId")]
    public virtual Veterinarian Veterinarian { get; set; }
}