using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreBasics.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
