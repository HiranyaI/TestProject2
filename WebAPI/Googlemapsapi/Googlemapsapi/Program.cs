using System.Net.Http;
using System.Threading.Tasks;
using GoogleMapsAPI;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();




class program
{
    static void Main(string[] args)
    {
        // Initialize Google Maps client with your API key
        string apiKey = "YOUR_API_KEY_HERE";
        GoogleMapsClient mapsClient = new GoogleMapsClient(apiKey);

        // Initialize Google Map
        GoogleMap map = new GoogleMap(apiKey);

        // Add markers to the map
        map.AddMarker(37.7749, -122.4194, "San Francisco");
        map.AddMarker(34.0522, -118.2437, "Los Angeles");
        map.AddMarker(40.7128, -74.0060, "New York");

        // Define coordinates for a polyline
        List<Coordinate> polylineCoordinates = new List<Coordinate>
            {
                new Coordinate(37.7749, -122.4194), // San Francisco
                new Coordinate(34.0522, -118.2437), // Los Angeles
                new Coordinate(40.7128, -74.0060)   // New York
            };

        // Create a polyline
        Polyline polyline = new Polyline(polylineCoordinates, "#FF0000", 5);

        // Output information about the polyline
        Console.WriteLine(polyline);

        // Output information about each marker
        Console.WriteLine("Markers on the map:");
        Console.WriteLine("------------------------------");
        Console.WriteLine(new Marker(37.7749, -122.4194, "San Francisco"));
        Console.WriteLine(new Marker(34.0522, -118.2437, "Los Angeles"));
        Console.WriteLine(new Marker(40.7128, -74.0060, "New York"));
    }
}