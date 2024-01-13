using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

namespace SeniorProject.Services.Blob
{
    public class BlobService
    {
        private readonly BlobContainerClient _containerClient;

        public BlobService()
        {
            var blobServiceClient = new BlobServiceClient("DefaultEndpointsProtocol=https;AccountName=petsconnectedstorage;AccountKey=BCZZ9yTfJ8fyM8ZVQeVIOT4XC8cj+IJY17fgUga7z5Lby4dtqlLZpuGZ8Z787Q/NPhOscdLT5gQ5+AStUskKDQ==;EndpointSuffix=core.windows.net");
            _containerClient = blobServiceClient.GetBlobContainerClient("images");
        }

        public async Task<string> UploadPhotoAsync(IFormFile photo)
        {
            // Benzersiz bir dosya adı oluştur
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