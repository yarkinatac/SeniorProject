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
    public string Name { get; set; }
    
    [Required]
    public string Address { get; set; }

    public string City { get; set; }

    public string State { get; set; }

    public string ZipCode { get; set; }

    [Required]
    [MaxLength(15)]
    public string PhoneNumber { get; set; }

    [Required]
    public string Email { get; set; }

    public string WebsiteUrl { get; set; }

    public string AdditionalInformation { get; set; }
    
    public virtual ICollection<ShelterPhoto> Photos { get; set; }


    // You can add more properties as needed for your application
}