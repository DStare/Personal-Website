using Microsoft.AspNetCore.Mvc;

namespace Website.Controllers
{
    public class Primary : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ContactInfo()
        {
            return View();
        }
        public IActionResult Resume()
        {
            return View();
        }
    }
}
