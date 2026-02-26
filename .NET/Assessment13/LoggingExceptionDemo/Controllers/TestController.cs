using Microsoft.AspNetCore.Mvc;

namespace LoggingExceptionDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        private readonly ILogger<TestController> _logger;

        public TestController(ILogger<TestController> logger)
        {
            _logger = logger;
        }

        [HttpGet("success")]
        public IActionResult Success()
        {
            _logger.LogInformation("Success endpoint called at {Time}", DateTime.UtcNow);

            return Ok(new
            {
                Message = "Request successful"
            });
        }

        [HttpGet("error")]
        public IActionResult ThrowError()
        {
            _logger.LogWarning("Error endpoint triggered at {Time}", DateTime.UtcNow);

            throw new Exception("This is a test exception.");
        }
    }
}