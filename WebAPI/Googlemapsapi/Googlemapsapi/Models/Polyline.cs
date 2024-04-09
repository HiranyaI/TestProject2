public class Polyline
{
    public List<Coordinate> Coordinates { get; }
    public string Color { get; }
    public int Weight { get; }

    public Polyline(List<Coordinate> coordinates, string color, int weight)
    {
        Coordinates = coordinates;
        Color = color;
        Weight = weight;
    }

    public override string ToString()
    {
        return $"Polyline with {Coordinates.Count} coordinates, color '{Color}', and weight {Weight}";
    }
}

public class Coordinate
{
    public double Latitude { get; }
    public double Longitude { get; }

    public Coordinate(double latitude, double longitude)
    {
        Latitude = latitude;
        Longitude = longitude;
    }

    public override string ToString()
    {
        return $"({Latitude}, {Longitude})";
    }
}