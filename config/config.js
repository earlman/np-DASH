/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    // address: "0.0.0.0", // Address to listen on, can be:
    address: "localhost", // Address to listen on, can be:
    // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
    // - another specific IPv4/6 to listen on a specific interface
    // - "", "0.0.0.0", "::" to listen on any interface
    // Default, when address config is left out, is "localhost"
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.1.171", "192.168.1.193"], // Set [] to allow all IP addresses
    // or add a specific IPv4 of 192.168.1.5 :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
    // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    language: "en",
    timeFormat: 12,
    units: "metric",

    modules: [
        {
            module: "alert",
        },


        // {
        //     module: 'MMM-ModuleScheduler',
        //     config: {
        //         global_schedule: [
        //             // SHOW MODULES WITH THE CLASS 'morning_scheduler' AT 06:00 AND HIDE AT 09:00 EVERY DAY
        //             { from: '0 6 * * *', to: '0 9 * * *', groupClass: 'morning_scheduler' },
        //             // SHOW MODULES WITH THE CLASS 'evening_scheduler' AT 17:00 AND HIDE AT 23:00 EVERY DAY
        //             { from: '0 17 * * *', to: '0 22 * * *', groupClass: 'evening_scheduler' },
        //         ]
        //     }
        // },
        {
            module: 'MMM-ModuleScheduler',
            config: {

                // global_schedule: { from: '0 6 * * *', to: '0 12 * * *' },


                // SHOW MODULES WITH THE CLASS 'daytime_scheduler' AT 06:00 AND HIDE AT 22:00 EVERY DAY
                global_schedule: [

                    // { from: '0 5 * * *', to: '0 12 * * *', groupClass: 'morning_scheduler' },

                    { from: '0 5 * * *', to: '0 12 * * *', groupClass: 'schedule_m' },
                    { from: '0 5 * * *', to: '0 18 * * *', groupClass: 'schedule_ma' },
                    { from: '0 12 * * *', to: '0 18 * * *', groupClass: 'schedule_a' },
                    { from: '0 12 * * *', to: '0 2 * * *', groupClass: 'schedule_ae' },
                    { from: '0 18 * * *', to: '0 2 * * *', groupClass: 'schedule_e' },
                ]

            }
        },
        /*
                {
                    module: "updatenotification",
                    position: "top_bar"
                },
        */
        {
            module: "clock",
            position: "top_left",
            config: {
                showPeriod: false
            }
        },
        {
            module: 'MMM-Todoist-DailyHighlight',
            position: 'upper_third',	// This can be any of the regions. Best results in left or right regions.
            header: `🌞 Today's Highlight`, // This is optional
            classes: 'schedule_m',
            config: { // See 'Configuration options' for more information.
                accessToken: '7735360b7a5f2f97c8392318620b9e01a4546e45',
                maximumEntries: 1,
                updateInterval: 10 * 60 * 1000, // Update every 10 minutes
                projects: [2204951740], //this entry is mandatory
                fade: false,
                showProject: false,
                displayTasksWithoutDue: false,
                wrapEvents: true,

            }
        },
        {
            module: 'MMM-Todoist-DailyHighlight-Tomorrow',
            position: 'upper_third',	// This can be any of the regions. Best results in left or right regions.
            header: `🌞 Tomorrow's Highlight`, // This is optional
            classes: 'schedule_e',
            config: { // See 'Configuration options' for more information.
                accessToken: '7735360b7a5f2f97c8392318620b9e01a4546e45',
                maximumEntries: 1,
                updateInterval: 10 * 60 * 1000, // Update every 10 minutes
                projects: [2204951740], //this entry is mandatory
                fade: false,
                showProject: false,
                displayTasksWithoutDue: false,
                wrapEvents: true,
            }
        },
        {
            module: 'MMM-Todoist-Maintenance',
            position: 'upper_third',	// This can be any of the regions. Best results in left or right regions.
            header: '📅 Maintenance', // This is optional
            config: { // See 'Configuration options' for more information.
                accessToken: '7735360b7a5f2f97c8392318620b9e01a4546e45',
                maximumEntries: 5,
                updateInterval: 10 * 60 * 1000, // Update every 10 minutes
                projects: [179773662], //this entry is mandatory
                fade: true,
                showProject: false,
            }
        },
        {
            module: "MMM-Wallpaper-np-dash",
            position: "fullscreen_below",
            config: { // See "Configuration options" for more information.
                source: "pexels",
                slideInterval: 60 * 1000, // Change slides every minute
                orientation: "vertical"
            }
        }
        // {
        //     module: 'MMM-Todoist',
        //     position: 'left',	// This can be any of the regions. Best results in left or right regions.
        //     header: 'Todoist', // This is optional
        //     config: { // See 'Configuration options' for more information.
        //         accessToken: '40e94f56ac8a40bb96f9a1357661b700',
        //         maximumEntries: 60,
        //         updateInterval: 10 * 60 * 1000, // Update every 10 minutes
        //         projects: [179773662], //this entry is mandatory
        //         fade: false
        //     }
        // },
        // {
        //     module: "calendar",
        //     header: "US Holidays",
        //     position: "top_left",
        //     config: {
        //         calendars: [
        //             {
        //                 symbol: "calendar-check",
        //                 url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
        //             }
        //         ]
        //     }
        // },
        // {
        //     module: "compliments",
        //     position: "lower_third"
        // },
        // {
        //     module: "currentweather",
        //     position: "top_right",
        //     config: {
        //         location: "New York",
        //         locationID: "",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
        //         appid: "YOUR_OPENWEATHER_API_KEY"
        //     }
        // },
        // {
        //     module: "weatherforecast",
        //     position: "top_right",
        //     header: "Weather Forecast",
        //     config: {
        //         location: "New York",
        //         locationID: "5128581",  //ID from https://openweathermap.org/city
        //         appid: "YOUR_OPENWEATHER_API_KEY"
        //     }
        // },
        // {
        //     module: "newsfeed",
        //     position: "bottom_bar",
        //     config: {
        //         feeds: [
        //             {
        //                 title: "New York Times",
        //                 url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
        //             }
        //         ],
        //         showSourceTitle: true,
        //         showPublishDate: true
        //     }
        // },
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
