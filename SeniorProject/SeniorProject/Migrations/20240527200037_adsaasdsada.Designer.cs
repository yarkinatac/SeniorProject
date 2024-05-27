﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace SeniorProject.Migrations
{
    [DbContext(typeof(PetsConnectedDbContext))]
    [Migration("20240527200037_adsaasdsada")]
    partial class adsaasdsada
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.14")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("SeniorProject.Models.Favorite", b =>
                {
                    b.Property<Guid>("FavoriteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("PetId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("FavoriteId");

                    b.HasIndex("PetId");

                    b.HasIndex("UserId");

                    b.ToTable("Favorites");
                });

            modelBuilder.Entity("SeniorProject.Models.MatchRequest", b =>
                {
                    b.Property<Guid>("MatchRequestId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ReceiverPetId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("RequestDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("ResponseDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("SenderPetId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.HasKey("MatchRequestId");

                    b.HasIndex("ReceiverPetId");

                    b.HasIndex("SenderPetId");

                    b.ToTable("MatchRequests");
                });

            modelBuilder.Entity("SeniorProject.Models.Pet", b =>
                {
                    b.Property<Guid>("PetId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("AdvertType")
                        .HasColumnType("int");

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<string>("Bio")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Breed")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double?>("Distance")
                        .HasColumnType("float");

                    b.Property<DateTime?>("End")
                        .HasColumnType("datetime2");

                    b.Property<string>("HealthInfo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Personality")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sex")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Shedding")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Size")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Start")
                        .HasColumnType("datetime2");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("PetId");

                    b.HasIndex("UserId");

                    b.ToTable("Pets");
                });

            modelBuilder.Entity("SeniorProject.Models.PetPhoto", b =>
                {
                    b.Property<Guid>("PetPhotoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("PetId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("PhotoUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PetPhotoId");

                    b.HasIndex("PetId");

                    b.ToTable("PetPhotos");
                });

            modelBuilder.Entity("SeniorProject.Models.Shelter", b =>
                {
                    b.Property<Guid>("ShelterId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PermitNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RepEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RepName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RepPhone")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("ShelterName")
                        .IsRequired()
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("WebsiteUrl")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ShelterId");

                    b.ToTable("Shelters");
                });

            modelBuilder.Entity("SeniorProject.Models.ShelterPhoto", b =>
                {
                    b.Property<Guid>("ShelterPhotoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("PhotoUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("ShelterId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("ShelterPhotoId");

                    b.HasIndex("ShelterId");

                    b.ToTable("ShelterPhotos");
                });

            modelBuilder.Entity("SeniorProject.Models.User", b =>
                {
                    b.Property<Guid>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Fullname")
                        .IsRequired()
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<double?>("Latitude")
                        .HasColumnType("float");

                    b.Property<double?>("Longitude")
                        .HasColumnType("float");

                    b.Property<int>("NumberofSittings")
                        .HasColumnType("int");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PetsCount")
                        .HasColumnType("int");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("SeniorProject.Models.Favorite", b =>
                {
                    b.HasOne("SeniorProject.Models.Pet", "Pet")
                        .WithMany()
                        .HasForeignKey("PetId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("SeniorProject.Models.User", "User")
                        .WithMany("Favorites")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Pet");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SeniorProject.Models.MatchRequest", b =>
                {
                    b.HasOne("SeniorProject.Models.Pet", "ReceiverPet")
                        .WithMany()
                        .HasForeignKey("ReceiverPetId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("SeniorProject.Models.Pet", "SenderPet")
                        .WithMany()
                        .HasForeignKey("SenderPetId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("ReceiverPet");

                    b.Navigation("SenderPet");
                });

            modelBuilder.Entity("SeniorProject.Models.Pet", b =>
                {
                    b.HasOne("SeniorProject.Models.User", "Owner")
                        .WithMany("Pets")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Owner");
                });

            modelBuilder.Entity("SeniorProject.Models.PetPhoto", b =>
                {
                    b.HasOne("SeniorProject.Models.Pet", "Pet")
                        .WithMany("Photos")
                        .HasForeignKey("PetId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pet");
                });

            modelBuilder.Entity("SeniorProject.Models.ShelterPhoto", b =>
                {
                    b.HasOne("SeniorProject.Models.Shelter", "Shelter")
                        .WithMany()
                        .HasForeignKey("ShelterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Shelter");
                });

            modelBuilder.Entity("SeniorProject.Models.Pet", b =>
                {
                    b.Navigation("Photos");
                });

            modelBuilder.Entity("SeniorProject.Models.User", b =>
                {
                    b.Navigation("Favorites");

                    b.Navigation("Pets");
                });
#pragma warning restore 612, 618
        }
    }
}
