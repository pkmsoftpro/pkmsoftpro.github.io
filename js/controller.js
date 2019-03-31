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
	$scope.nameText="Prashant Kumar Modak";
	$scope.nameSubtext="I code for fun.";

	$scope.aboutMe=[
		{
			"description":"The name is Prashant(pronounced 'pra-san-t'). I am a graduate student, pursuing my Masters degree in Computer Science at Indiana University Bloomington. I have 4 years of industry experience as a Software Developer, during which I was involved in all stages of the SDLC. I am currently looking for full-time opportunities in Software Development. My previous roles were Software Consultant at Genpact Headstrong Capital Markets, specialized in Capital Markets and Warranty domain."
		}
	];

	$scope.graduateProjects=[
		{
			"title":"Airavata Nextcloud",
			"description":"Development of the WebDAV adaptor and integration of adaptor into Apache Airavata, which is a software framework to compose and manage the large-scale applications and workflows on distributed computing resources such as local clusters, supercomputers, computational grids, and computing clouds. Development and integration of the nextcloud connector in Java to the SEAGrid-rich client that is used to run the experiments using Apache Airavata as the middle man. Development of the API methods in Java to download the files and folders. Addition of the client-side changes in the PHP gateway admin portal to use the new WebDAV adapter for the nextcloud to replace the SCP transfers.",
			"link":{
				"label":"Code@Github",
				"href":"https://github.com/airavata-courses/airavata-nextcoud",
			},
			"technology":"Java, JavaFX, Jenkins, Docker, Ansible"
		},
		{
			"title":"Advanced Operating System",
			"description":"Implemented an in-memory file system for Xinu-OS. Wrote system calls for process synchronization using semaphores and implemented futures.",
			"link":{
				"label":"Code@Github",
				"href":"https://github.com/pkmsoftpro/Xinu-OS-P536-S18",
			},
			"technology":"C"
		},
		{
			"title":"pkmsoftpro.github.io",
			"description":"A responsive personal webpage",
			"link":{
				"label":"Code@Github",
				"href":"https://github.com/pkmsoftpro/pkmsoftpro.github.io",
			},
			"technology":"AngularJS, jquery, HTML/CSS"
		},
		{
			"title":"GameMaker",
			"description":"Developed a game maker application in an object oriented style, which allowed the user to build various arcade games dynamically by adding sprites and related events to a game arena.",
			"link":{
				"label":"Code@Github",
				"href":"https://github.com/pkmsoftpro/GameMaker",
			},
			"technology":"Java, Spring MVC, MySQL, Phaser.js"
		},
		{
			"title":"Breakout-Game",
			"description":"As a part of the P532 course at Indiana University, We had to create a game maker using Java in swing. I contributed to developing a generic Game Maker Application in Java that could be used to build and play a range of arcade games. Made extensive use of Java design patterns to implement generic features of the game. Features of the application: Save and Load, Sound, Webstartable Technologies. Design Patterns used: Singleton, Command, Composite, Factory, Façade, MVC, Observer pattern. User can save/load built games, define game rules/actions along with basic game play features. Customizable game and future proof implementation, reusable codebase.",
			"link":{
				"label":"Code@Github",
				"href":"https://docs.oracle.com/cd/E24902_01/doc.91/e61893/toc.htm",
			},
			"technology":"Swing, Bamboo, Fisheye, Log4J, JUnit, Mockito, Maven, Design Patterns"
		}
	];

	$scope.contact=[{
		"description":"[firstname] DOT [kr] DOT [mod] AT gmail DOT com"
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
			"link":"https://www.linkedin.com/in/pkmsoftpro/"
		},
		{
			"name":"Twitter",
			"class":"fa fa-twitter social",
			"link":"https://twitter.com/pkmsoftpro"
		},
		{
			"name":"GitHub",
			"class":"fa fa-github social",
			"link":"https://github.com/pkmsoftpro"
		}
	];

	
	
});
