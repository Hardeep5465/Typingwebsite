using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LatestHardeep.Controllers
{
    public class StartTypingController : Controller
    {
        // GET: StartTyping

        public ActionResult Index()
        {
            return View();
        }

     
        public ActionResult LearnTyping()
        {
            return View("LearnTyping");
        }

        public ActionResult PracticeTyping()
        {
            return View("PracticeTyping");
        }
    }
}