using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EFGetStarted.AspNetCore.ExistingDb.Models
{
    public class LocataireContext : DbContext
    {
        public LocataireContext (DbContextOptions<LocataireContext> options)
            : base(options)
        {
        }

        public DbSet<EFGetStarted.AspNetCore.ExistingDb.Models.Locataires> Locataires { get; set; }
    }
}
