using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace GoogleMapsAPI
{
    public class GoogleMapsClient
    {
        private readonly HttpClient _httpClient;
        private readonly string _apiKey;

        public GoogleMapsClient(string apiKey)
        {
            _httpClient = new HttpClient();
            _apiKey = apiKey;
        }

        public async Task<string> GetGeocodingDataAsync(string address)
        {
            string url = $"https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={_apiKey}";

            HttpResponseMessage response = await _httpClient.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsStringAsync();
            }
            else
            {
                throw new HttpRequestException($"Failed to retrieve geocoding data. Status code: {response.StatusCode}");
            }
        }
    }
}
