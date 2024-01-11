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
            var uniqueFileName = $"{Guid.NewGuid()}{Path.GetExtension(photo.FileName)}";
            var blobClient = _containerClient.GetBlobClient(uniqueFileName);

            var options = new BlobUploadOptions
            {
                HttpHeaders = new BlobHttpHeaders
                {
                    ContentType = photo.ContentType // Gerçek dosya türünü kullan
                }
            };

            // Dosyayı yükle
            using (var stream = photo.OpenReadStream())
            {
                await blobClient.UploadAsync(stream, options);
            }

            return blobClient.Uri.ToString();
        }

    }
}