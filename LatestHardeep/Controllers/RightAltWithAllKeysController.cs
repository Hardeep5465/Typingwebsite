using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LatestHardeep.Controllers
{
    public class RightAltWithAllKeysController : Controller
    {
        // GET: RightAltWithAllKeys
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