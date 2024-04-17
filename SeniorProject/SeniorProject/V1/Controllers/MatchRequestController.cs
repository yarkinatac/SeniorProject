using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using SeniorProject.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SeniorProject.Models.Dto;

[Route("api/[controller]")]
[ApiController]
public class MatchRequestController : ControllerBase
{
    private readonly PetsConnectedDbContext _context;

    public MatchRequestController(PetsConnectedDbContext context)
    {
        _context = context;
    }

    // Eşleşme isteği göndermek için endpoint
    [HttpPost("send")]
    public async Task<IActionResult> SendMatchRequest([FromBody] MatchRequestDto matchRequestDto)
    {
        var matchRequest = new MatchRequest
        {
            SenderPetId = matchRequestDto.SenderPetId,
            ReceiverPetId = matchRequestDto.ReceiverPetId,
            RequestDate = DateTime.UtcNow,
            Status = MatchRequestStatus.Pending
        };

        _context.MatchRequests.Add(matchRequest);
        await _context.SaveChangesAsync();

        return Ok(new { Message = "Match request sent successfully." });
    }

    // Eşleşme isteğine yanıt vermek için endpoint
    [HttpPost("respond/{matchRequestId}")]
    public async Task<IActionResult> RespondToMatchRequest(Guid matchRequestId, [FromBody] MatchResponseDto responseDto)
    {
        var userIdString = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        

       
        var matchRequest = await _context.MatchRequests.FirstOrDefaultAsync(mr => mr.MatchRequestId == matchRequestId);
        if (matchRequest == null)
        {
            return NotFound(new { Message = "Match request not found." });
        }

        var pet = await _context.Pets
            .AsNoTracking()
            .FirstOrDefaultAsync(p => (p.PetId == matchRequest.ReceiverPetId || p.PetId == matchRequest.SenderPetId) );
        if (pet == null)
        {
            return BadRequest(new { Message = "You do not have permission to respond to this match request." });
        }

        var status = Enum.Parse<MatchRequestStatus>(responseDto.Status, true);
        matchRequest.Status = status;
        matchRequest.ResponseDate = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return Ok(new { Message = $"Match request has been {status}." });
    }

    
    [HttpGet]
    public async Task<IActionResult> GetAllMatchRequests()
    {
        var matchRequests = await _context.MatchRequests
            .Include(mr => mr.SenderPet)
            .Include(mr => mr.ReceiverPet)
            .ToListAsync();

        return Ok(matchRequests);
    }

// Bir eşleşme isteğinin detaylarını getirmek için endpoint
    [HttpGet("{matchRequestId}")]
    public async Task<IActionResult> GetMatchRequest(Guid matchRequestId)
    {
        var matchRequest = await _context.MatchRequests
            .Include(mr => mr.SenderPet)
            .Include(mr => mr.ReceiverPet)
            .FirstOrDefaultAsync(mr => mr.MatchRequestId == matchRequestId);

        if (matchRequest == null)
        {
            return NotFound(new { Message = "Match request not found." });
        }

        return Ok(matchRequest);
    }
    
    
    
    

}