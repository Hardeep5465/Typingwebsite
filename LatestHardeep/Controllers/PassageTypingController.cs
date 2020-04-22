using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LatestHardeep.Controllers
{
    public class PassageTypingController : Controller
    {
        // GET: PassageTyping
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Passage(string id)
        {
            switch (id)
            {
                case "1":
                    return View("Page1");
                case "2":
                    return View("Page2");
                case "3":
                    return View("Page3");
                case "4":
                    return View("Page4");
                case "5":
                    return View("Page5");
                case "6":
                    return View("Page6");
                case "7":
                    return View("7");
                case "8":
                    return View("8");
                case "9":
                    return View("9");
                default:
                    return View("Index");
            }
        }

    }
}