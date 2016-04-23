import { Conferences } from './conferences';
    
export var CONFERENCES: Conferences[] = [
	{
		"id":"1",
		"name":"Google I/O",
		"description":"An annual software developer-focused conference held by Google in San Francisco, California",
		"sessions" :[
			{
				"year":"link",
				"link":"https://www.google.com/events/io/io14videos"
			}
		]
	},
	{
		"id":"2",
		"name":"DotGo",
		"description":"The European Go conference",
		"sessions" :[
			{
				"year":2014,
				"link":"#/search/dotGoalt082014/false"
			},
            {
				"year":2015,
				"link":"#/search/dotGoalt082015/false"
			}
		]
	},
	{
		"id":"3",
		"name":"DotJS",
		"description":"The European JS conference",
		"sessions" :[
			{
				"year":2014,
				"link":"#/search/dotJSalt082014/false"
			},
            {
				"year":2015,
				"link":"#/search/dotJSalt082015/false"
			}
		]
	},
	{
		"id":"4",
		"name":"DotScale",
		"description":"The European Tech Conference on Scalability",
		"sessions" :[
			{
				"year":2014,
				"link":"#/search/dotScalealt082014/false"
			},
			{
				"year":2015,
				"link":"#/search/dotScalealt082015/false"
			}
		]
	},
	{
		"id":"5",
		"name":"dotRB",
		"description":"The European Ruby conference",
		"sessions" :[
			{
				"year":2013,
				"link":"#/search/dotRBalt082013/false"
			}
		]
	},
	{
		"id":"6",
		"name":"dotCSS",
		"description":"The largest CSS conference in Europe",
		"sessions" :[
			{
				"year":2014,
				"link":"#/search/dotCSSalt082014/false"
			},
            {
				"year":2015,
				"link":"#/search/dotCSSalt082015/false"
			}
		]
	},
	{
		"id":"7",
		"name":"dotSwift",
<<<<<<< HEAD:src/api/conferences/conferences-api.js
		"description":"The largest CSS conference in Europe",
		"sessions" :[
=======
		"description":"The European Swift Conference",
		"session" :[
>>>>>>> master:app/conferences/mock-conferences.ts
			{
				"year":2015,
                "link":"#/search/dotSwiftalt082015/false"
			},
            {
				"year":2016,
                "link":"#/search/dotSwiftalt082016/false"
			}
		]
	},
	{
		"id":"8",
		"name":"FOSDEM",
		"description":"FOSDEM is a free event for software developers to meet, share ideas and collaborate.",
		"sessions" :[
			{
				"year":"from 2005 to now",
				"link":"https://video.fosdem.org/"
			}
		]
	},
	{
		"id":"9",
		"name":"ng-conf",
		"description":"The World's Original Angular Conference",
		"sessions" :[
			{
				"year":2015,
                "link":"#/search/ng-confalt082015/false"
			},
			{
				"year":2016,
				"link":"#/search/ng-confalt082016/false"
			}
		]
	},
	{
		"id":"10",
		"name":"DConf",
		"description":"The World's Original Angular Conference",
		"sessions" :[
			{
				"year":2014,
				"link":"#/search/dconfalt082014/false"
			}
		]
	},
	{
		"id":"11",
		"name":"Devoxx",
		"description":"Annual European Java, Android and HTML5 conference",
		"sessions" :[
			{
				"year":2013,
				"link":"https://www.parleys.com/channel/devoxx-2013"
			},
            {
				"year":2014,
				"link":"https://www.parleys.com/channel/devoxx-2014"
			}
		]
	}
];
