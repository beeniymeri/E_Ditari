using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context){
            if(context.Nxenesi.Any()) return;

            var nxenesi = new List<Nxenesi>{
                new Nxenesi{
                    Emri = "Blendi",
                    Mbiemri = "Ymeri",
                    Rruga = "Nazim Azemi",
                    Qyteti = "Viti 61060",
                    NumriKontaktues = "045827766",
                },
            };

            await context.Nxenesi.AddRangeAsync(nxenesi);
            await context.SaveChangesAsync();
        }
    }
}