using System.ComponentModel.DataAnnotations;

namespace SeniorProject.Models;

public class Login
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [StringLength(100, MinimumLength = 5)]
    public string Password { get; set; }
}