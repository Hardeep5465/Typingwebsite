using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LatestHardeep.Controllers
{
    public class LeftAltWithAllKeysController : Controller
    {
        // GET: LeftAltWithAllKeys
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Lesson()
        {
            return View("Lesson");
        }
    }
}