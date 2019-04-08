
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
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		
		{
			module: "newsfeed",
			position: "top_right",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
		    	module: "MMM-awesome-alexa",
		    	position: "bottom_bar",
		    	config: {
			        wakeWord: "Alexa",
			        clientId: "amzn1.application-oa2-client.6f25162752bd41c0b9a24d8d922c5c97",
			        clientSecret: "13856e7ea962e34ad821cf3ecbf3a296864a47ca3b463ec99b701c4b6289c354",
			        deviceId: "SmartMirrorPi",
			        refreshToken: "Atzr|IwEBILghYc9_DueRDMKvddFq3sh6Qxx4X7JCJF-zqoHUdDdPRinKq6n9yimFjuRkbfATo_Y1m2R_-fc8P3HXiZ3hNt83pkYe7uvO1NGxEcH8d7SBwUiu2FLTHifMZp54eq3m4vo0R8dEylUqwDapjgL5Sb6Pj4lRSAAnlC5cg6YXrOriHxPWEvf-DfAc57NLu_g0pd0l3kwBUSIYmpNpH1KoZoIXC2G7onf4MJQ8ryiDZrpIW6X480OY3nBJ9u-QEIPb2QFYQKcvjnp8KmTnKJfC463GlcyvxH49haquQh7M_icaQqS6WzYyg6fP-DPEGDi_MpO6JRSVL9GI32iCbToeELj35XoZvxq5nRZe-eJI6579TuxU3hS-C1B1cPFfYbjeELMcUvgnJt-xifn22NN1wzLoITcZEQ0lTms4Y3BEdlaVo5diifzFeTX3KTDVQZKGlbi9odyk3-kUp44D7DySFYv0cZ8hwvT8EySX_hQJtgKXGZkPgMkTRFnEWEBDOtS7LZO1LjrD9M7BoSWIAocQRIOrO11Lpv69LxRl-pOBlYwZBg",
			        lite: false,
		        	isSpeechVisualizationEnabled: true
		    }
}	
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}