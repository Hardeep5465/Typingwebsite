using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LatestHardeep.Controllers
{
    public class ErrorController : Controller
    {
        // GET: Error
       
        public ViewResult PageNotFound()
        {
            return View();
        }
        public ViewResult ServerError()
        {
            return View();
        }

    }
}