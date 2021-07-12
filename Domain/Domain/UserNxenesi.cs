using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class UserNxenesi : IdentityUser
    {
        public string DisplayName { get; set; }
        public string Bio {get; set;}
        public int Roli { get; set; }
        
    }
}

