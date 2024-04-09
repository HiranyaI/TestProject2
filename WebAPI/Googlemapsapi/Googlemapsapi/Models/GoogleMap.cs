public class GoogleMap
{
    public string APIKey { get; }

    public GoogleMap(string apiKey)
    {
        APIKey = apiKey;
    }

    public void AddMarker(double latitude, double longitude, string title)
    {
        Console.WriteLine($"Added marker at {latitude}, {longitude} with title '{title}'");
    }
}