using System;
namespace connectx.Domain.Enttities

public class Occupation
{
    public string userId { get; set; }
    public string userId { get; set; }
    public string departmentId { get; set; }
    public string occupationName { get; set; }

    //navigate other entities
    public User userId {  get; set; }
    public Department departmentId { get; set; }

}