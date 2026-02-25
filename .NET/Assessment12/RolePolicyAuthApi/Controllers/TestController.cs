using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace RolePolicyAuthApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        // Public endpoint
        [HttpGet("public")]
        public IActionResult Public()
        {
            return Ok("This is public endpoint");
        }

        // Any authenticated user
        [Authorize]
        [HttpGet("authenticated")]
        public IActionResult Authenticated()
        {
            return Ok("You are authenticated");
        }

        // Role Based - Admin only
        [Authorize(Roles = "Admin")]
        [HttpGet("admin-only")]
        public IActionResult AdminOnly()
        {
            return Ok("Welcome Admin");
        }

        // Role Based - User only
        [Authorize(Roles = "User")]
        [HttpGet("user-only")]
        public IActionResult UserOnly()
        {
            return Ok("Welcome User");
        }

        // Policy Based - AdminOnly policy
        [Authorize(Policy = "AdminOnly")]
        [HttpGet("policy-admin")]
        public IActionResult PolicyAdmin()
        {
            return Ok("Access granted via AdminOnly policy");
        }

        // Custom Policy - AdminWithEmail
        [Authorize(Policy = "AdminWithEmail")]
        [HttpGet("policy-custom")]
        public IActionResult PolicyCustom()
        {
            return Ok("Access granted via custom policy (Admin + Email claim)");
        }
    }
}