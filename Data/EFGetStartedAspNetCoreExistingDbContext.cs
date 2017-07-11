using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Gestionaire_location.Models;

namespace EFGetStarted.AspNetCore.ExistingDb.Models
{
    public class LocataireContext : DbContext
    {
        public LocataireContext (DbContextOptions<LocataireContext> options)
            : base(options)
        {
        }

        public DbSet<Locataires> Locataires { get; set; }
    }
}
