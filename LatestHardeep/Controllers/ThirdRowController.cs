using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LatestHardeep.Controllers
{
    public class ThirdRowController : Controller
    {
        // GET: ThirdRow
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Lesson1()
        {
            return View("Lesson1");
        }
    }
}