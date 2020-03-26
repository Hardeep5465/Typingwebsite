using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LatestHardeep.Controllers
{
    public class SscHistoryController : Controller
    {
        // GET: SscHistory
        public ActionResult Home(string id)
        {
            switch (id)
            {
                case "Page1":
                    return View("Page1");
                case "Page2":
                    return View("Page2");
                case "Page3":
                    return View("Page3");
                case "Page4":
                    return View("Page4");
                case "Page5":
                    return View("Page5");
                case "Page6":
                    return View("Page6");
                case "Page7":
                    return View("Page7");
                case "Page8":
                    return View("Page8");
                case "Page9":
                    return View("Page9");
                default:
                    return View("Index");
            }
        }
    }
}