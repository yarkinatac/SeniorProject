using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeniorProject.Models;

public class MatchRequest
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid MatchRequestId { get; set; }

    [Required]
    public Guid SenderPetId { get; set; }
    
    [Required]
    public Guid ReceiverPetId { get; set; }

    [Required]
    public DateTime RequestDate { get; set; }

    public DateTime? ResponseDate { get; set; }

    public MatchRequestStatus Status { get; set; }

    [ForeignKey("SenderPetId")]
    public virtual Pet SenderPet { get; set; }

    [ForeignKey("ReceiverPetId")]
    public virtual Pet ReceiverPet { get; set; }
}

public enum MatchRequestStatus
{
    Pending,
    Accepted,
    Rejected,
    Cancelled
}