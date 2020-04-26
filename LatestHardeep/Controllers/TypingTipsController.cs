using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LatestHardeep.Controllers
{
    public class TypingTipsController : Controller
    {
        // GET: TypingTips

       
        public ActionResult TypingTips()
        {
            return View("Tips");
        }
       
    }
}