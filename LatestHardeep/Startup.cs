using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LatestHardeep.Startup))]
namespace LatestHardeep
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
