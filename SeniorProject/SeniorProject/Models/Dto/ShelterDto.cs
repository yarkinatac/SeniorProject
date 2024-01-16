public class ShelterDto
{

    public string Name { get; set; }


    public string Location { get; set; }


    public string Phone { get; set; }

    public string WebsiteUrl { get; set; }

    public string AdditionalInformation { get; set; }

    public IFormFile ShelterPhoto { get; set; } = null!;


}