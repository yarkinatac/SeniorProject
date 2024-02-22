using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

namespace SeniorProject.Services.Blob
{
    public class BlobService
    {
        private readonly BlobContainerClient _containerClient;
        private readonly BlobContainerClient _containerClient1;

        public BlobService()
        {
            var blobServiceClient = new BlobServiceClient("DefaultEndpointsProtocol=https;AccountName=petsconnectedphotos;AccountKey=cAvqprrkiNfUl0GDucYxFNV2yBJ7AWWoGG9U2w8DpW6QgmlSDhCZrcrQ606NAeKs321rJuDjPy+4+ASth214hw==;EndpointSuffix=core.windows.net");
            _containerClient = blobServiceClient.GetBlobContainerClient("petsconnected");
            
            var blobServiceClient1 = new BlobServiceClient("DefaultEndpointsProtocol=https;AccountName=petsconnectedphotos;AccountKey=cAvqprrkiNfUl0GDucYxFNV2yBJ7AWWoGG9U2w8DpW6QgmlSDhCZrcrQ606NAeKs321rJuDjPy+4+ASth214hw==;EndpointSuffix=core.windows.net");
            _containerClient1 = blobServiceClient1.GetBlobContainerClient("shelter");
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

        public async Task<string> UploadShelterPhotoAsync(IFormFile shelterPhoto, string name)
        {
            // Benzersiz bir dosya adı oluştur BlogStorage İmage kısmında gözükmesi için
            
            var fileName = $"{name + Path.GetExtension(shelterPhoto.FileName)}";
            var blobClient = _containerClient.GetBlobClient(fileName);

            var options = new BlobUploadOptions
            {
                HttpHeaders = new BlobHttpHeaders
                {
                    ContentType = "image/jpeg" // Gerçek dosya türünü kullan
                }
            };

            // Dosyayı yükle
            using (var stream = shelterPhoto.OpenReadStream())
            {
                await blobClient.UploadAsync(stream, httpHeaders: new BlobHttpHeaders { ContentType = "image/jpeg" });
            }

            return blobClient.Uri.ToString();
        }

    }
}