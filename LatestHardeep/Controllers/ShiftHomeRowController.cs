using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LatestHardeep.Controllers
{
    public class ShiftHomeRowController : Controller
    {
        // GET: ShiftHomeRow
        public ActionResult Lesson(string id)
        {
            switch (id)
            {
                case "1":
                    return View("Lesson1");
                case "2":
                    return View("Lesson2");
                default:
                    return RedirectToAction("PageNotFound", "Error");
            }
        }
    }
}