/*using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Hosting;
using System.Runtime.CompilerServices;
using System.Xml.Linq;

namespace SearchApi.Data
{
    public static class DataSeeder
    {
        public static void Seed(this IHost host)
        {
            using var scope = host.Services.CreateScope();
            using var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
            context.Database.EnsureCreated();
        }

        private static void AddUsers(AppDbContext context)
        {
            var user = context.newuser.FirstOrDefault();
            if (user != null) return;

            context.newuser.Add(new newuser
            {
                userId = "001",
                name = "Steve",
                bio = "Hi im  Steve",
                departmentname = "IT",
                age = 15
            });

            context.newuser.Add(new newuser
            {
                userId = "002",
                name = "Reyna",
                bio = "Hi im  Reyna",
                departmentname = "Accounting",
                age = 16
            });

            context.newuser.Add(new newuser
            {
                userId = "003",
                name = "Zen",
                bio = "Hi im  Zen",
                departmentname = "Business",
                age = 17
            });

            context.SaveChanges();
        }

    }
}
*/