using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OptimizedApi.Data;
using OptimizedApi.Models;
using Microsoft.AspNetCore.RateLimiting;

namespace OptimizedApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableRateLimiting("FixedPolicy")]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }

        // ✅ GET with Pagination + AsNoTracking
        [HttpGet]
        [ResponseCache(Duration = 30, Location = ResponseCacheLocation.Any)]
        public async Task<IActionResult> GetProducts(int pageNumber = 1, int pageSize = 5)
        {
            if (pageNumber <= 0 || pageSize <= 0)
                return BadRequest("Page number and page size must be greater than 0.");

            var totalRecords = await _context.Products.CountAsync();

            var products = await _context.Products
                .AsNoTracking() // Performance optimization
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var response = new
            {
                TotalRecords = totalRecords,
                PageNumber = pageNumber,
                PageSize = pageSize,
                Data = products
            };

            return Ok(response);
        }

        // ✅ GET by Id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var product = await _context.Products
                .AsNoTracking()
                .FirstOrDefaultAsync(p => p.Id == id);

            if (product == null)
                return NotFound();

            return Ok(product);
        }

        // ✅ POST
        [HttpPost]
        public async Task<IActionResult> CreateProduct(Product product)
        {
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        // ✅ PUT
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, Product updatedProduct)
        {
            if (id != updatedProduct.Id)
                return BadRequest();

            var existingProduct = await _context.Products.FindAsync(id);

            if (existingProduct == null)
                return NotFound();

            existingProduct.Name = updatedProduct.Name;
            existingProduct.Price = updatedProduct.Price;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // ✅ DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
                return NotFound();

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}