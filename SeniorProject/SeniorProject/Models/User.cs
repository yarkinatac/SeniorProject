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
    public string FirstName { get; set; }

    [Required]
    [MaxLength(256)]
    public string LastName { get; set; }

    [Required]
    [EmailAddress]
    [MaxLength(256)]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }

    public bool isClicked { get; set; }
    
    
    public int NumberofSittings { get; set; }
    
    public int PetsCount { get; set; }
    
    // Navigation property - Bir kullanıcının birden fazla pet'i olabilir
    public virtual ICollection<Pet> Pets { get; set; }
}