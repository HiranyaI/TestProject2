using System;
namespace connectx.Domain.Enttities

public class Department
{
    public string departmentId { get; set; }
    public string occupationId { get; set; }
    public string userId { get; set; }
    public string departmentName { get; set; }

    //navigate other entities
    public User userId { get; set; }
    public Occupation occupationId { get; set; }

}