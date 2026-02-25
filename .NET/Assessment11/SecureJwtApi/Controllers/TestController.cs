using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SecureJwtApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        // Public endpoint
        [HttpGet("public")]
        public IActionResult Public()
        {
            return Ok(new { message = "This is a public endpoint" });
        }

        // Protected endpoint
        [Authorize]
        [HttpGet("protected")]
        public IActionResult Protected()
        {
            var userName = User.Identity?.Name;
            return Ok(new { message = $"Hello {userName}, you are authenticated!" });
        }
    }
}