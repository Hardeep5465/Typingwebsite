using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LatestHardeep.Controllers
{
    public class ShiftBottomRowController : Controller
    {
        // GET: ShiftBottomRow
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Lesson1()
        {
            return View("Lesson1");
        }
        public ActionResult Lesson2()
        {
            return View("Lesson2");
        }
    }
}