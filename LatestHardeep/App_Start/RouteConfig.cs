using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace LatestHardeep
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //To remove controller name from Typing Tips URL
            routes.MapRoute(
                name: "Typing Tips",
                url: "Typing-Tips",
                defaults: new { controller = "TypingTips", action = "TypingTips" }
            );

            //To remove controller name from Learn Typing URL
            routes.MapRoute(
                name: "Learn Punjabi Typing",
                url: "Learn-Punjabi-Ravi-Font-Typing",
                defaults: new { controller = "StartTyping", action = "LearnTyping" }
            );

            //To remove controller name from Disclaimer URL
            routes.MapRoute(
                name: "Disclaimer",
                url: "Disclaimer",
                defaults: new { controller = "Home", action = "Disclaimer" }
            );

            //To remove controller name from Setup Ravifont for Windows 7 URL
            routes.MapRoute(
                name: "Set up Ravi Font Windows 7",
                url: "Set-up-Punjabi-Ravi-Font-in-Windows-7",
                defaults: new { controller = "SetUpRaviFont", action = "Windows7"}
            );

            //To remove controller name from Setup Ravifont for Windows 7 Video URL
            routes.MapRoute(
                name: "Set up Ravi Font Windows 7 Video",
                url: "Set-up-Punjabi-Ravi-Font-in-Windows-7-Video",
                defaults: new { controller = "SetUpRaviFont", action = "Win7video" }
            );

            //To remove controller name from Setup Ravifont for Windows 10 URL
            routes.MapRoute(
                name: "Set up Ravi Font Windows 10",
                url: "Set-up-Punjabi-Ravi-Font-in-Windows-10",
                defaults: new { controller = "SetUpRaviFont", action = "Windows10"}
            );

            //To remove controller name Home Row Lessons 
            routes.MapRoute(
                name: "Home Row Lesson",
                url: "Punjabi-Ravi-Font-Typing-Home-Row/{id}",
                defaults: new { controller = "HomeRow", action = "Lesson", id = @"\d+" }
            );

            //To remove controller name Bottom Row Lessons 
            routes.MapRoute(
                name: "Bottom Row Lesson",
                url: "Punjabi-Ravi-Font-Typing-Bottom-Row/{id}",
                defaults: new { controller = "BottomRow", action = "Lesson", id = @"\d+" }
            );

            //To remove controller name Upper Row Lessons 
            routes.MapRoute(
                name: "Upper Row Lesson",
                url: "Punjabi-Ravi-Font-Typing-Upper-Row/{id}",
                defaults: new { controller = "FirstRow", action = "Lesson", id = @"\d+" }
            );

            //To remove controller name Shift Home Row Lessons 
            routes.MapRoute(
                name: "Shift Home Row Lesson",
                url: "Punjabi-Ravi-Font-Typing-Shift-Home-Row/{id}",
                defaults: new { controller = "ShiftHomeRow", action = "Lesson", id = @"\d+" }
            );

            //To remove controller name Shift Bottom Row Lessons 
            routes.MapRoute(
                name: "Shift Bottom Row Lesson",
                url: "Punjabi-Ravi-Font-Typing-Shift-Bottom-Row/{id}",
                defaults: new { controller = "ShiftBottomRow", action = "Lesson", id = @"\d+" }
            );

            //To remove controller name Shift Upper Row Lessons 
            routes.MapRoute(
                name: "Shift Upper Row Lesson",
                url: "Punjabi-Ravi-Font-Typing-Shift-Upper-Row/{id}",
                defaults: new { controller = "ShiftUpperRow", action = "Lesson", id = @"\d+" }
            );

            //To remove controller name Right Alt key With all keys 
            routes.MapRoute(
                name: "Right ALt with All Key Lesson",
                url: "Punjabi-Ravi-Font-Typing-Right-Alt-key-Lesson",
                defaults: new { controller = "RightAltWithAllKeys", action = "Lesson" }
            );

            //To remove controller name Shift Number Keys
            routes.MapRoute(
                name: "Shift Number Row",
                url: "Punjabi-Ravi-Font-Typing-Shift-Number-Row",
                defaults: new { controller = "ShiftNumberRow", action = "Lesson" }
            );

            //To remove controller name from passage 
            routes.MapRoute(
                name: "Passage Lesson",
                url: "Punjabi-Ravi-Font-Typing-Passage/{id}",
                defaults: new { controller = "PassageTyping", action = "Passage", id = @"\d+" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
          
        }
    }
}
