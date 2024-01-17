using Microsoft.EntityFrameworkCore;
using SeniorProject.Models;

public class PetsConnectedDbContext : DbContext
{
    public PetsConnectedDbContext(DbContextOptions<PetsConnectedDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Pet> Pets { get; set; }
    public DbSet<PetPhoto> PetPhotos { get; set; }
     public DbSet<Shelter> Shelters { get; set; }
     public DbSet<ShelterPhoto> ShelterPhotos { get; set; }



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // User ve Pet arasındaki bir-çoka ilişkiyi kurar.
        // Bir User birden çok Pet'e sahip olabilir.
        modelBuilder.Entity<User>()
            .HasMany(u => u.Pets)
            .WithOne(p => p.Owner)
            .HasForeignKey(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade); // Bir User silindiğinde, ona ait Pets de silinecek.

        // Burada ekstra konfigürasyonlarınızı da yapabilirsiniz, örneğin:
        // Tablo isimlerini, varsayılan değerleri, indeksleri, unique kısıtları vs. tanımlayabilirsiniz.
       
    }
}