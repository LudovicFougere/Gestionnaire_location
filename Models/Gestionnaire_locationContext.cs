using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Gestionaire_location.Models
{
    public partial class Gestionnaire_locationContext : DbContext
    {
        public virtual DbSet<Blog> Blog { get; set; }
        public virtual DbSet<Locataires> Locataires { get; set; }
        public virtual DbSet<Post> Post { get; set; }
        public virtual DbSet<Reservation> Reservation { get; set; }

        public Gestionnaire_locationContext(DbContextOptions<Gestionnaire_locationContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Blog>(entity =>
            {
                entity.Property(e => e.Url).IsRequired();
            });

            modelBuilder.Entity<Locataires>(entity =>
            {
                entity.Property(e => e.Nom).HasColumnType("nchar(10)");

                entity.Property(e => e.Prenom).HasColumnType("nchar(10)");
            });

            modelBuilder.Entity<Post>(entity =>
            {
                entity.HasOne(d => d.Blog)
                    .WithMany(p => p.Post)
                    .HasForeignKey(d => d.BlogId);
            });

            modelBuilder.Entity<Reservation>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DateDebut)
                    .HasColumnName("Date_debut")
                    .HasColumnType("date");

                entity.Property(e => e.DateFin)
                    .HasColumnName("Date_fin")
                    .HasColumnType("date");

                entity.Property(e => e.Eventend)
                    .HasColumnName("eventend")
                    .HasColumnType("datetime");

                entity.Property(e => e.Eventstart)
                    .HasColumnName("eventstart")
                    .HasColumnType("datetime");

                entity.Property(e => e.Text)
                    .IsRequired()
                    .HasColumnName("text")
                    .HasColumnType("varchar(50)");
            });
        }
    }
}