using System.ComponentModel.DataAnnotations;

namespace SeniorProject.Models;

public class Register
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [StringLength(100, MinimumLength = 5)]
    public string Password { get; set; }

    [Required]
    public string Fullname { get; set; }
    
    [Required]
    [Phone]
    public string PhoneNumber { get; set; }


    
}