using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeniorProject.Models
{
    public class Shelter
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ShelterId { get; set; }

        [Required]
        [MaxLength(256)]
        public string Name { get; set; }

        [Required]
        public string Location { get; set; } // Barınağın konumu (örneğin, şehir, semt)

        [Required]
        public string Phone { get; set; } // Barınağın iletişim numarası

        public string Website { get; set; } // Barınağın web sitesi (isteğe bağlı)

        // Barınakta bulunan evcil hayvanlar için ilişki
        public virtual ICollection<Pet> Pets { get; set; }

        // Barınak ile kullanıcı arasındaki ilişki
        public Guid UserId { get; set; }
        
        [ForeignKey("UserId")]
        public virtual User Manager { get; set; }
    }
}