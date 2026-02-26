using LoggingExceptionDemo.Models;

namespace LoggingExceptionDemo.Services
{
    public class ProductService
    {
        public List<Product> GetProducts()
        {
            // Simulating slow database call
            Thread.Sleep(3000);

            return new List<Product>
            {
                new Product { Id = 1, Name = "Laptop", Price = 75000 },
                new Product { Id = 2, Name = "Mobile", Price = 25000 },
                new Product { Id = 3, Name = "Headphones", Price = 3000 }
            };
        }
    }
}