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
        public ActionResult One()
        {
            return View("One");
        }

    }
}