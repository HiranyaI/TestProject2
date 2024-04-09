public class Marker
{
    public double Latitude { get; }
    public double Longitude { get; }
    public string Title { get; }

    public Marker(double latitude, double longitude, string title)
    {
        Latitude = latitude;
        Longitude = longitude;
        Title = title;
    }

    public override string ToString()
    {
        return $"Marker at ({Latitude}, {Longitude}) with title '{Title}'";
    }
}