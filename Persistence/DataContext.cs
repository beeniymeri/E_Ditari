using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public object Books;

        public object Sesions;

        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Book> Book { get; set;}
        public DbSet<Sesion> Sesion { get; set;}
        
        
    }
}