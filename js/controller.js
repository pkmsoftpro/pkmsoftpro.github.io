var zambreyApp = angular.module('zambrey-app',[]);

zambreyApp.controller('zambrey-ctrl', function($scope){
	//UI
	$scope.displaySidebar=false;

	$scope.displayNavTop=function(){return $('body').scrollTop()!==0;};

	$scope.openInNewWindow=function()
	{
		window.open(event.currentTarget.getAttribute("link"));
	}

	//DATA
	$scope.nameText="Ameya Zambre";
	$scope.nameSubtext="I code for fun and food.";

	$scope.aboutMe=[
		{
			"description":"The name is Ameya(pronounced 'uh-meh-yuh'). I currently work as a Software Developer with Excel team at Microsoft. Before joining Microsoft I worked at Oracle for a few years. I graduated from Georgia Tech and am a proud BITSian. I also worked as Intern at Epic Systems in Madison and Intel India in Bangalore."
		}
	];

	$scope.recentProjects=[
		{
			"title":"Complex data in Excel",
			"description":"Worked on a project to create an interface(cards) for newly supported entity values in Excel on all endpoints (Win32, UWP, Android, iOS and Web).",
			"link":{
				"label":"TechCrunch",
				"href":"https://techcrunch.com/2018/03/29/excel-is-getting-smarter/",
			},
			"technology":"C++, Java, TypeScript"
		},
		{
			"title":"Einthusan Monitor",
			"description":"A solution to monitor a movie website for latest movies and also to search in existing movies using website's REST services. It was published on chrome webstore with 2500+ users. Code available on Github (zambrey).",
			"link":{
				"label":"Code@Github",
				"href":"https://github.com/zambrey/Einthusan-Monitor",
			},
			"technology":"JavaScript, HTML/CSS"
		},
		{
			"title":"zambrey.github.io",
			"description":"A responsive personal webpage",
			"link":{
				"label":"Code@Github",
				"href":"https://github.com/zambrey/zambrey.github.io",
			},
			"technology":"AngularJS, jquery, HTML/CSS"
		},
		{
			"title":"JD Edwards EnterpriseOne for iPad",
			"description":"Working independently on iPad application. Implemented a PDF viewer and handwriting support for signatures, native playback support for video files, touch-friendly navigation menu(later included in web client as well). Responsible for supporting all new features being developed on iPad browser and application and for uptaking latest iOS SDKs.",
			"link":{
				"label":"JD Edwards EnterpriseOne for iPad",
				"href":"https://itunes.apple.com/us/app/jd-edwards-enterpriseone-for/id624165519",
			},
			"technology":"Java, JavaScript(HTML/CSS), Objective-C"
		},
		{
			"title":"Third party apps support for JD Edwards",
			"description":"Worked in a team of 4 to support third party ADF applications in existing framework. The work involved developing a container to host ADF applications, allowing embedding appropriate content in authorized iframes, establishing secure communication link between different domains, managing sessions, supporting single sign on and overall providing a seamless experience for the end user.",
			"link":{
				"label":"Public Documentation",
				"href":"https://docs.oracle.com/cd/E24902_01/doc.91/e61893/toc.htm",
			},
			"technology":"Java, JavaScript(HTML/CSS)"
		}
	];

	$scope.internships=[
		{
			"title":"Project with ASAP R&D team",
			"description":"Design and development of an enhanced user interface with advanced functionality to display Emergency Department map with customized summary of the sub-areas and ability to drill down further in to those",
			"thumbnail":{
				"src":"thumbnails/epic-thumb.jpg"
			},
			"guide":{
				"name":"Paul Romine",
				"title":"Manager",
				"homepage":"https://www.linkedin.com/in/paul-romine-6410b63a"
			},
			"company":"Epic Systems, Madison WI",
			"duration":"May  - July 2012",
			"technology":"C#"
		},
		{
			"title":"Project with Common User Interface(CUI) team in Visual and Parallel Computing Group",
			"description":"Development of a logger tool for CUI team and framework for unified user interface for Intel software",
			"thumbnail":{
				"src":"thumbnails/intel-thumb.png"
			},
			"guide":{
				"name":"Indranil Mukherjee",
				"title":"Manager",
				"homepage":"http://in.linkedin.com/in/indranilm"
			},
			"company":"Intel India Pvt. Ltd., Bengaluru",
			"duration":"Jan - Jun 2011",
			"technology":"C#"
		},
		{
			"title":"Nation level workshop on Computer Graphics and Vision",
			"description":"We modeled an elastic body using spring mass model. To interact with the body we tracked an object using a camera and interfacing its movement with a virtual object. To introduce the effect of immersive environment we rendered the elastic object as an anaglyph so that it could be viewed as a three-dimensional object using red-cyan filters.",
			"thumbnail":{
				"src":"thumbnails/iitd-thumb.jpeg"
			},
			"guide":{
				"name":"Dr. Subodh Kumar",
				"title":"Guide",
				"homepage":"http://www.cse.iitd.ernet.in/~subodh/"
			},
			"company":"Indian Institute of Technology, New Delhi",
			"duration":"May - Jul 2010",
			"technology":"C++, C"
		},
		{
			"title":"Project with Advanced Technology Vehicles Project (ATVP) of ISRO",
			"description":"The project was aimed at developing an efficient program for processing the data received from sensors on board the sounding rockets, RH-200 and RH-300 MkII (Rohini sounding rockets, ISRO). The rockets transmit the data in a binary frame format continuously and the same is received on ground. Hence, this data cannot be analyzed by the scientists as it is and needs to be processed in real time before using it.",
			"thumbnail":{
				"src":"thumbnails/vssc-thumb.jpg"
			},
			"guide":{
				"name":"Dr. V. K. S. Panicker",
				"title":"Director",
			},
			"company":"Vikram Sarabhai Space Center, Thiruvanathapuram (Indian Space Research Organization)",
			"duration":"May - Jul 2008",
			"technology":"C++"
		}
	];

	$scope.graduateProjects=[
		{
			"title":"SalaRead",
			"description":"A visualization tool for public salaries data of Georgia Tech faculty. We imported and cleaned up publicly available salaries data of last 4 years to Google Fusion Tables. Utilizing that we developed an interactive visualization system using Google Charts plotting data against various parameters to provide more insight to the data.",
			"link":{
				"label":"Code@GitHub",
				"href":"https://github.com/zambrey/SalaRead"
			},
			"technology":"JavaScript(HTML/CSS), Google Charts, Google Fusion Tables"
		},
		{
			"title":"GTLive",
			"description":"A fault tolerant service and an accompanying android app which allowed users to live stream content camera. Consumers are able to visit a website to view the currently live streamed events in their browser. Part of a team of 4.",
			"technology":"Java"
		},
		{
			"title":"Unity Video Games",
			"description":"Four different title built from scratch using Unity game engine. FloodIt, Breakout, icanhascheezburger, Plastic Bogeys. Worked both independently and as a part of teams.",
			"link":{
				"label":"Try them out here",
				"href":"https://sites.google.com/site/ameyazambre/portfolio"
			},
			"technology":"Unity"	
		},
		{
			"title":"Voice2Text Logger",
			"description":"Developed an application which transcribes Skype voice calls into simple text file which had silence detection and removal, speech to text conversion and chronological arrangement of text generating the original conversation as its major components. ",
			"technology":"C#, Python"	
		}
	];

	$scope.undergradProjects=[
		{
			"title":"Development of binary similarity measures based approach for copy-move forgery detection in digital images (Undergraduate thesis)",
			"description":"We reviewed several existing methods proposed to detect copy-move forgery. These methods in general used block-matching procedures, which first divide the image into overlapping blocks and extract features from each block, assuming similar blocks will yield similar features. Later in block matching step duplicated blocks are tracked down based on their feature vectors. We proposed a binary similarity measures based approach for block matching. BSM feature values are calculated for the overlapping blocks and the blocks with same value of BSM feature are exactly the same. We also present a few preliminary test results we got during testing.",
			"thumbnail":{
				"src":"thumbnails/copy-move-thumb.jpg"
			},
			"link":{
				"label":"Report",
				"href":"https://docs.google.com/viewer?a=v&pid=explorer&chrome=true&srcid=0B6VoprahAXmZNjBjZmU4MDItMTk4MS00ZDA3LWI0NzgtM2QyNjgzYjMzMGFm&hl=en_US"
			},
			"guide":{
				"name":"Dr. R. K. Gupta",
				"title":"Assistant Professor, Department of Physics, BITS Pilani",
				"homepage":"http://discovery.bits-pilani.ac.in/Homepage/disciplines/physics/rkgupta.html"
			}
		},
		{
			"title":"Development of framework for form detection by simple cells in visual cortex area",
			"description":"The scope of this work was modeling simple and complex cells in visual cortex area of brain and practical implementation of image perception pipeline in brain. We developed an algorithm for simulation of form detection by simple cells in visual cortex area V1 and V2 in this project. This work was presented at International Symposium on Medical Imaging 2010.",
			"thumbnail":{
				"src":"thumbnails/med-image-thumb.jpg"
			},
			"link":{
				"label":"Report",
				"href":"https://docs.google.com/viewer?a=v&pid=explorer&chrome=true&srcid=1rqlO5HJsEvqaeQmT72l031YTmEA_2-bmvjl_YYJyT00fgK424bZEKhm-gBYg&hl=en"
			},
			"guide":{
				"name":"Dr. A. S. Mandal",
				"title":"Scientist - F, IC Design Group, Central Electronics Engineering Research Institute(CEERI), Pilani"
			}
		},
		{
			"title":"Three dimensional reconstruction from stereo pair images",
			"description":"After studying basics of three dimensional reconstruction, implementation of the module was done using some of the existing methods. We calculated Fundamental matrix using Eight Point Algorithm and further stereo matching was achieved using some indigenous methods. In the final step depth calculations were done thus completing the reconstruction from stereo pair.",
			"thumbnail":{
				"src":"thumbnails/3d-reconstruction-thumb.jpg"
			},
			"guide":{
				"name":"Dr. M. K. Rohil",
				"title":"Assistant Professor, Department of Computer Science, BITS Pilani"
			}
		},
		{
			"title":"Designing of student academic database and development of an application for generating grade cards and transcripts",
			"description":"We designed and developed BITS student academic database and user friendly application to generate grade cards and transcripts of students from the database. The required database was developed from the scratch by analyzing each and every aspect of problem statement. Graphical user interface was designed and developed providing a better and efficient alternative for the previously used software for the same purpose.",
			"thumbnail":{
				"src":"thumbnails/transcript-thumb.jpg"
			},
			"guide":{
				"name":"Dr. S. C. Sivasubramanian",
				"title":"Unit Chief, Computer Assisted Housekeeping Unit, BITS Pilani"
			}
		}
	];

	$scope.contact=[{
		"description":"[firstname][lastname] AT gmail DOT com"
	}];

	$scope.sections=[
	/*{
		"title":"Home",
		"id":""
	},*/
	{
		"title":"About Me",
		"id":"about",	
		"link":"#about",
		"content": $scope.aboutMe
	},
	{
		"title":"Recent Projects",
		"id":"recent",
		"link":"#recent",
		"content": $scope.recentProjects
	},
	{
		"title":"Internships",
		"id":"internships",
		"link":"#internships",
		"content": $scope.internships
	},
	{
		"title":"Graduate Projects",
		"id":"grad",
		"link":"#grad",
		"content": $scope.graduateProjects
	},
	{
		"title":"Undergraduate Projects",
		"id":"undergrad",
		"link":"#undergrad",
		"content": $scope.undergradProjects
	},
	{
		"title":"Contact",
		"id":"contact",
		"link":"#contact",
		"content":$scope.contact
	}];

	$scope.socialMedia=[
		{
			"name":"LinkedIn",
			"class":"fa fa-linkedin social",
			"link":"https://www.linkedin.com/in/ameyazambre"
		},
		{
			"name":"Twitter",
			"class":"fa fa-twitter social",
			"link":"https://twitter.com/ameyazambre"
		},
		{
			"name":"GitHub",
			"class":"fa fa-github social",
			"link":"https://github.com/zambrey/"
		}
	];

	
	
});