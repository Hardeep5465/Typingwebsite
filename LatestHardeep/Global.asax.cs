using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace LatestHardeep
{
    //Declaring a class and to declare total no users property
    public class Global: System.Web.HttpApplication
    {
        public static int totalNumberOfUsers;
        public static int currentNumberOfUsers;
    }

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            //Connecting to db and Reading the hit count from table in the database as soon as session starts
            string connectionString = ConfigurationManager.ConnectionStrings["counterconnection"].ConnectionString;
            string queryString = "SELECT Hits from Counters WHERE TypeOfCounter = @TypeOfCounter";
            using (var connection = new SqlConnection(connectionString))
            {
                var cmd = new SqlCommand(queryString, connection);
                var typeofcounter = new SqlParameter("TypeOfCounter", System.Data.SqlDbType.NChar);
                typeofcounter.Value = "HomePage";
                cmd.Parameters.Add(typeofcounter);
                connection.Open();
                SqlDataReader reader = cmd.ExecuteReader();
                if (reader.Read())
                {
                    Global.totalNumberOfUsers = reader.GetInt32(0);
                }
                else
                {
                    Global.totalNumberOfUsers = 0;
                }
            }
        }

        protected void Session_Start(Object sender, EventArgs e)
        {
            // Increase the two counters.
            Global.totalNumberOfUsers += 1;
            Global.currentNumberOfUsers += 1;

            //Update the value of the variables as soon as the session starts
            string connectionString = ConfigurationManager.ConnectionStrings["counterconnection"].ConnectionString;
            string queryString = "UPDATE Counters SET Hits=@Hits WHERE TypeOfCounter = @TypeOfCounter";
            using (var connection = new SqlConnection(connectionString))
            {
                var cmd = new SqlCommand(queryString, connection);
                var hitparam = new SqlParameter("Hits", System.Data.SqlDbType.Int);
                hitparam.Value = Global.totalNumberOfUsers;
                var typeofcounter = new SqlParameter("TypeOfCounter", System.Data.SqlDbType.NChar);
                typeofcounter.Value = "HomePage";
                cmd.Parameters.Add(hitparam);
                cmd.Parameters.Add(typeofcounter);
                connection.Open();
                cmd.ExecuteNonQuery();
            }
        }
        protected void Session_End(Object sender, EventArgs e)
        {
            Global.currentNumberOfUsers -= 1;
        }
    }
}
