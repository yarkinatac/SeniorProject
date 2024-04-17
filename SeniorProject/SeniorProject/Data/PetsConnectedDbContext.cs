using Microsoft.EntityFrameworkCore;
using SeniorProject.Models;
using System.Linq;

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
    public DbSet<MatchRequest> MatchRequests { get; set; }
    

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // User ve Pet arasındaki bir-çoka ilişkiyi kurar.
        modelBuilder.Entity<User>()
            .HasMany(u => u.Pets)
            .WithOne(p => p.Owner)
            .HasForeignKey(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade); // Bir User silindiğinde, ona ait Pets de silinecek.
        
        modelBuilder.Entity<MatchRequest>()
            .HasOne<Pet>(mr => mr.SenderPet)
            .WithMany()
            .HasForeignKey(mr => mr.SenderPetId)
            .OnDelete(DeleteBehavior.Restrict); // veya NoAction, eğer cascade delete sorun yaratıyorsa

        modelBuilder.Entity<MatchRequest>()
            .HasOne<Pet>(mr => mr.ReceiverPet)
            .WithMany()
            .HasForeignKey(mr => mr.ReceiverPetId)
            .OnDelete(DeleteBehavior.Restrict); 

        // Diğer model yapılandırmaları...
    }

    public override int SaveChanges()
    {
        UpdatePetsCount();
        return base.SaveChanges();
    }

    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
    {
        UpdatePetsCount();
        return await base.SaveChangesAsync(cancellationToken);
    }

    private void UpdatePetsCount()
    {
        foreach (var entry in ChangeTracker.Entries<Pet>())
        {
            var owner = Users.Find(entry.Entity.UserId);
            if (owner != null)
            {
                if (entry.State == EntityState.Added)
                {
                    owner.PetsCount++;
                }
                else if (entry.State == EntityState.Deleted)
                {
                    // Pet sayısı negatif olmaması için kontrol edilir
                    if (owner.PetsCount > 0)
                    {
                        owner.PetsCount--;
                    }
                }
            }
        }
    }
}