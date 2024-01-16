using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeniorProject.Models
{
    public class Shelter
    {
        [Key]
        public Guid ShelterId { get; set; } // Benzersiz kimlik

        [Required]
        [MaxLength(256)]
        public string Name { get; set; } // Barınağın ismi

        [Required]
        public string Location { get; set; } // Şehir

        [Required]
        [Phone]
        public string Phone { get; set; } // Telefon numarası

        public string WebsiteUrl { get; set; } // Website URL (isteğe bağlı)

        // Barınağın fotoğraflarını tutacak koleksiyon

        public virtual ICollection<ShelterPhoto> Photos { get; set; }
        public virtual ICollection<Pet> Pets { get; set; }
        
    }
}