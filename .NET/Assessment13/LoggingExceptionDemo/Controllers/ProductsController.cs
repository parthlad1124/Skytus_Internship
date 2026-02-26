using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using LoggingExceptionDemo.Services;

namespace LoggingExceptionDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IMemoryCache _cache;
        private readonly ProductService _productService;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(IMemoryCache cache,
                                  ProductService productService,
                                  ILogger<ProductsController> logger)
        {
            _cache = cache;
            _productService = productService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            string cacheKey = "productList";

            if (!_cache.TryGetValue(cacheKey, out var products))
            {
                _logger.LogInformation("Cache MISS - Fetching from service");

                products = _productService.GetProducts();

                var cacheOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromSeconds(30));

                _cache.Set(cacheKey, products, cacheOptions);
            }
            else
            {
                _logger.LogInformation("Cache HIT - Returning cached data");
            }

            return Ok(products);
        }
    }
}