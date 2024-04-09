using System;
namespace connectx.Domain.Enttities

public class Followership
{
	public string followershipId { get; set; }
	public string userId { get; set; }
	public string followershipName { get; set; }
    public string email { get; set; }
    public string approvalStatus { get; set; }

    //navigate other entities
    public User userId { get; set; }

}