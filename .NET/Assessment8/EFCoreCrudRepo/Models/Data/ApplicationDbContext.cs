using Microsoft.EntityFrameworkCore;

namespace EFCoreCrudRepo.Models.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<EFCoreCrudRepo.Models.Student> Students { get; set; }
    }
}
