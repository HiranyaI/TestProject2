using System;
namespace connectx.Domain.Enttities

public class Messages
{
	public string messageId { get; set; }
	public string userId { get; set; }
	public string followeshipId { get; set; }
	public int messageContent { get; set; }
    public string messageCharacterCount { get; set; }

    //navigate other entities
    public User userId { get; set; }

}