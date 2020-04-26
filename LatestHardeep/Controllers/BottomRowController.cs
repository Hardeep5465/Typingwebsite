using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LatestHardeep.Controllers
{
    public class BottomRowController : Controller
    {
        // GET: ThirdRow
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Lesson(string id)
        {
            switch (id)
            {
                case "1":
                    return View("Lesson1");
                case "2":
                    return View("Lesson2");
                case "3":
                    return View("Lesson3");
                default:
                    return View("Index");
            }

        }
    }
}