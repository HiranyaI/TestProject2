using Microsoft.Extensions.Hosting;

namespace SearchApi.Data
{
    public class newuser
    {
        public string userId { get; set; }
        public string? name { get; set; }
        public string? bio { get; set; }
        public string? departmentname { get; set; }
        public int age { get; set; }

    }
}