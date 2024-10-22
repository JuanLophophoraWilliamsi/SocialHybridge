using Microsoft.EntityFrameworkCore;
using SocialHybridge.Models;

namespace SocialHybridge.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Define your DbSets here. For example:
        public DbSet<User> Users { get; set; }
    }
}
