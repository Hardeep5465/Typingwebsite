using System.Web;
using System.Web.Mvc;

namespace LatestHardeep
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            //Commented this line because we are handling errors by ourselves
           filters.Add(new HandleErrorAttribute());
        }
    }
}
