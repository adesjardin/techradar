document.title = "AVIO Consulting Technology Radar (2016 Q2)";
var radar_arcs = [
                   {"r":100,"name":"Adopt"}
                  ,{"r":200,"name":"Trial"}
                  ,{"r":300,"name":"Assess"}
                  ,{"r":400,"name":"Hold"}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east


var h = 1000;
var w = 1300;

var radar_data = [
    { 
		"quadrant": "Techniques & Processes",
        "left" : 10,
        "top" : 18,
        "color" : "#649662",
        "items" : [ 
            { "name" : "Structured Logging", "pc": { "r": 250, "t": 100 }, "movement": "c" },
            { "name" : "Reactive Architecture", "pc":{"r":250,"t":110},"movement":"c"},    
            { "name" : "Single Page Applications", "pc":{"r": 80,"t":100},"movement":"c"},
            { "name" : "Hybrid Cloud Architecture", "pc":{"r":80,"t":120},"movement":"c"}, 
            { "name" : "Hybrid Mobile Applications", "pc":{"r":150,"t":110},"movement":"c"},
            { "name" : "Continuous Delivery", "pc": { "r": 80, "t": 140 }, "movement": "c" },
            { "name" : "Continuous Integration", "pc":{"r": 80,"t":160},"movement":"c"},   
            { "name" : "Continuous Deployment", "pc":{"r":250,"t":120},"movement":"c"}, 
            { "name" : "Machine Learning", "pc":{"r":250,"t":130},"movement":"c"},
            { "name" : "Progressive Web Apps", "pc":{"r":250,"t":140},"movement":"c"},   
            { "name" : "Mutation Testing", "pc":{"r":250,"t":150},"movement":"c"}
		]
    },
        { 
		"quadrant": "Tools",
        "left" : w-250+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            { "name" : "JIRA", "pc": { "r": 80, "t": 7 }, "movement": "c" },
            { "name" : "Confluence", "pc":{"r":80,"t":22},"movement":"c"},    
            { "name" : "Packer", "pc":{"r": 80,"t":37},"movement":"c"},
            { "name" : "SoapUI", "pc":{"r":80,"t":52},"movement":"c"}, 
            { "name" : "Opitz SOA Test Framework", "pc":{"r":80,"t":67},"movement":"c"},
            { "name" : "Git", "pc": { "r": 80, "t": 82 }, "movement": "c" },
            { "name" : "Slack", "pc":{"r": 50,"t": 15},"movement":"c"},   
            { "name" : "Docker", "pc":{"r":50,"t":35},"movement":"c"}, 
            { "name" : "Jenkins", "pc":{"r":50,"t":55},"movement":"c"},
            { "name" : "Liquibase", "pc":{"r":50,"t": 75},"movement":"c"},   
            { "name" : "Flentd", "pc":{"r":250,"t": 5},"movement":"c"},
            { "name" : "Travis CI", "pc": { "r": 250, "t": 15 }, "movement": "c" },
            { "name" : "Ansible", "pc":{"r":250,"t":25},"movement":"c"},    
            { "name" : "Chef", "pc":{"r": 250,"t": 35},"movement":"c"},
            { "name" : "Puppet", "pc":{"r":250,"t":45 },"movement":"c"}, 
            { "name" : "Salt Stack", "pc":{"r":250,"t": 55},"movement":"c"},
            { "name" : "Kafka", "pc": { "r": 250, "t": 65 }, "movement": "c" },
            { "name" : "Nagios", "pc":{"r": 250,"t": 75},"movement":"c"},   
            { "name" : "New Relic", "pc":{"r":250,"t": 85},"movement":"c"}, 
            { "name" : "Subversion", "pc":{"r":350,"t":45},"movement":"c"},
            { "name" : "ELK", "pc":{"r":150,"t":45},"movement":"c"}
		]
    },
        { 
		"quadrant": "Languages & Frameworks",
        "left" : 10,
        "top" : h/2 + 18,
        "color" : "#DC6F1D",
        "items" : [ 
            { "name" : "AngularJS", "pc": { "r": 80, "t": 190 }, "movement": "c" },
            { "name" : "Node.js for Dev", "pc":{"r":80,"t":210},"movement":"c"},    
            { "name" : "ES6", "pc":{"r": 80,"t":230},"movement":"c"},
            { "name" : "Angular 2", "pc":{"r":250,"t":190},"movement":"c"}, 
            { "name" : "React", "pc":{"r":250,"t":200},"movement":"c"},
            { "name" : "Node.js for Services", "pc": { "r": 250, "t": 210 }, "movement": "c" },
            { "name" : "Polymer", "pc":{"r": 250,"t": 220},"movement":"c"},   
            { "name" : "Typescript", "pc":{"r":250,"t":230},"movement":"c"}, 
            { "name" : "Flux/Redux", "pc":{"r":250,"t":240},"movement":"c"},
            { "name" : "JET Visualizations", "pc":{"r":250,"t":250},"movement":"c"},   
            { "name" : "ADF", "pc":{"r":350,"t":225},"movement":"c"},
            { "name" : "Ionic", "pc":{"r": 150,"t":210},"movement":"c"},
            { "name" : "React Native", "pc":{"r":150,"t":240},"movement":"c"}
		]
    },
        { 
		"quadrant": "Platforms & Products",
        "left" : w-250+30,
        "top" : h/2 + 18,
        "color" : "#AF1E23",
        "items" : [ 
            { "name" : "AWS", "pc": { "r": 80, "t": 277 }, "movement": "c" },
            { "name" : "Oracle BPM Suite", "pc":{"r":80,"t":292},"movement":"c"},    
            { "name" : "Oracle SOA Suite", "pc":{"r": 80,"t": 307},"movement":"c"},
            { "name" : "Oracle JCS for Dev/Test", "pc":{"r":80,"t":322},"movement":"c"}, 
			{ "name" : "Oracle SOA CS for Dev/Test", "pc":{"r":80,"t":337},"movement":"c"},            
            { "name" : "Oracle ICS", "pc":{"r":80,"t":352},"movement":"c"},
            { "name" : "Oracle Coherence", "pc": { "r": 50, "t": 285 }, "movement": "c" },
            { "name" : "Oracle Stream Analytics", "pc":{"r": 50,"t":315},"movement":"c"},   
            { "name" : "Mulesoft Anypoint", "pc":{"r":50,"t":345},"movement":"c"}, 
            { "name" : "Oracle PCS", "pc":{"r":150,"t":285},"movement":"c"},
            { "name" : "Oracle MCS", "pc":{"r":150,"t":300},"movement":"c"},   
            { "name" : "Oracle CS for Prod", "pc":{"r":150,"t":315},"movement":"c"}, 
            { "name" : "Oracle JCS for Prod", "pc":{"r":350,"t":285},"movement":"c"},
            { "name" : "Amazon Mobile Hub", "pc":{"r":350,"t":300},"movement":"c"}        
		]
    }
];
