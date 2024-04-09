using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SearchApi.Data;

namespace SearchApi.Controllers
{
    public class SearchController : Controller
    {
        private readonly AppDbContext _context;

        public SearchController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("/api/items")]
        public IActionResult GetItems()
        {
            var items = _context.newuser.ToList();
            return Ok(items);
        }


        [HttpGet("/api/search")]
        public IActionResult SearchItems([FromQuery] string query)
        {
            if (string.IsNullOrWhiteSpace(query))
            {
                return BadRequest(new { error = "Please provide a non-empty search query" });
            }

            var results = _context.newuser
                .Where(item => item.name.ToLower().Contains(query.ToLower()))
                .ToList();

            if (!results.Any())
            {
                return NotFound(new { error = "No matching items found" });
            }

            return Ok(results);
        }

    }
}