using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SearchApi;

namespace SearchApi.Data
{
    public class AppDbContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public DbSet<newuser> newuser { get; set; }

        public AppDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_configuration.GetConnectionString("WebApiDatabase"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<newuser>().HasNoKey();

            base.OnModelCreating(modelBuilder);
        }
    }
}
