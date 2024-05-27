using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace SeniorProject.Models;

public class User
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid UserId { get; set; }

    [Required]
    [MaxLength(256)]
    public string Fullname { get; set; }
   
    [Required]
    [Phone]
    public string PhoneNumber { get; set; }
    
    [Required]
    [EmailAddress]
    [MaxLength(256)]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }
    
    public int NumberofSittings { get; set; }
    
    public int PetsCount { get; set; }

    public double? Longitude { get; set; }

    public double? Latitude { get; set; }
    
    // Navigation property - Bir kullanıcının birden fazla pet'i olabilir
    public virtual ICollection<Pet> Pets { get; set; }

    // Navigation property - Bir kullanıcının birden fazla favorisi olabilir
    public virtual ICollection<Favorite> Favorites { get; set; }
}

