using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

namespace SeniorProject.Services.Blob
{
    public class BlobService
    {
        private readonly BlobContainerClient _containerClient;

        public BlobService()
        {
            var blobServiceClient = new BlobServiceClient("DefaultEndpointsProtocol=https;AccountName=petsconnected;AccountKey=wKXfutveRXwcefpVrqMDJPr/GeGMEZe8ooRzhOWndTV22Grz9VsmZ1e3nI9h/qE68xEMBQvhPK0Q+AStkM3BPw==;EndpointSuffix=core.windows.net");
            _containerClient = blobServiceClient.GetBlobContainerClient("petsconnected");
        }

        public async Task<string> UploadPhotoAsync(IFormFile photo)
        {
            // Benzersiz bir dosya adı oluştur BlogStorage İmage kısmında gözükmesi için
            var guid = Guid.NewGuid();
            var fileName = $"{guid + Path.GetExtension(photo.FileName)}";
            var blobClient = _containerClient.GetBlobClient(fileName);

            var options = new BlobUploadOptions
            {
                HttpHeaders = new BlobHttpHeaders
                {
                    ContentType = "image/jpeg" // Gerçek dosya türünü kullan
                }
            };

            // Dosyayı yükle
            using (var stream = photo.OpenReadStream())
            {
                await blobClient.UploadAsync(stream, httpHeaders: new BlobHttpHeaders { ContentType = "image/jpeg" });
            }

            return blobClient.Uri.ToString();
            
        }

    }
}