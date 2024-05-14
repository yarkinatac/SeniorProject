using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeniorProject.Models;

public class Shelter
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid ShelterId { get; set; }

    [Required]
    [MaxLength(256)]
    public string ShelterName { get; set; }
    
    [Required]
    public string Address { get; set; }

    public string? City { get; set; }

    public string? State { get; set; }
    
    public string PermitNumber { get; set; }

    public string RepName { get; set; }

    [Required]
    [MaxLength(15)]
    public string RepPhone { get; set; }

    [Required]
    public string RepEmail { get; set; }

    public string? WebsiteUrl { get; set; }
    
    // public virtual ICollection<ShelterPhoto>? Photos { get; set; }


    // You can add more properties as needed for your application
}