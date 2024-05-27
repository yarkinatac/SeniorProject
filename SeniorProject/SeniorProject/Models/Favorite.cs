using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeniorProject.Models;

public class Favorite
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid FavoriteId { get; set; }

    [Required] public Guid UserId { get; set; }

    [Required] public Guid PetId { get; set; }

    [ForeignKey("UserId")] public virtual User User { get; set; }

    [ForeignKey("PetId")] public virtual Pet Pet { get; set; }
}