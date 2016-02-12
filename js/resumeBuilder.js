// Data input
var bio={"name": "Guillaume Simler", 
	"role": "Web Student", 
	"picture_URL": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/0ad/352/006b11c.jpg", 
	"welcome_message" : "Welcome on my journey from corporate finance to IT",
	"skills" :["Corporate Finance", "Team Management", "M&A", "Sales", "ERP"],
	"contacts" :{
		"mobile": "+49 176 76 24 ----", 
		"email": "guillaume.simler@gmail.com", 
		"LinkedIn": "https://de.linkedin.com/in/guillaume-simler-1391939",
		"Xing": "https://www.xing.com/profile/Guillaume_Simler",
		"Github":"https://github.com/guillaumesimler",
		"blog":"http://www.simler.eu"},
	"bioPic": "bio_pic-2-150_1x.jpg"
};

var projects={
	"project":[
		{"title": "About Me",
		"dates": "01/2016",
		"description": "a first intro in HTML and CSS",
		"pic": ["project1-1-150_1x.jpg",
			"project1-2-150_1x.jpg"]
		},

		{"title": "Portfolio",
		"dates": "02/2016",
		"description": "a deep dive into responsive webdesign",
		"pic": ["project2-1-150_1x.jpg"]
		}		
	]
};

var work ={
	"jobs":[
		{"employer": "TTS Tooltechnic System (Festool)",
		"title":"Head of Strategic Projects",
		"location": ["Wendlingen, Germany"],
		"dates" : "01/2014-03/2016",
		"description": "responsible for corporate strategy process, M&A, unconventional projects (Fablab, ...)"
		},

		{"employer": "TTS Tooltechnic System (Festool)",
		"title":"Managing Director TTS Polak",
		"location": ["Mimon, Czech Republic"],
		"dates" : "01/2012-12/2013",
		"description": "responsible for daily operationss of TTS' aluminum foundry, its restruturing and sale to a strategic investor"
		},

		{"employer": "AVL",
		"title":"Manager Controlling AVL Europe & CFO AVL France",
		"location": [
			"Wiesbaden, Germany", 
			"Croissy-sur-Seine, France", 
			"Barcelona, Spain", 
			"Stockholm, Sweden", 
			"Torino, Italy",
			"Kidderminster, United Kingdom", 
			"Graz, Austria"],
		"dates" : "02/2008-12/2011",
		"description": "responsible for daily financial operations of AVL France and its restruturing as well as a coordinating function of the financial operations of the European subsidies"
		},

		{"employer": "AGT Thermotechnik",
		"title":"financial manager",
		"location": ["Erkelenz, Germany"],
		"dates" : "08/2007-06/2008",
		"description": "responsible for daily financial operations of AGT Thermotechnik"
		},

		{"employer": "IBM",
		"title":"ibm.com sales operation analyst",
		"location": [
			"Herrenberg, Germany", 
			"Stuttgart, Germany", 
			"Courbevoie, France"],
		"dates" : "01/2005-09/2006",
		"description": "responsible for reporting tool and method improvements, business counterpart to sales team"
		}
	]
};

var education={
	"schools": [
	{"name": "Audencia",
	"dates": "2004-2007",
	"location": "Nantes, France",
	"degree": "Master",
	"majors": ["Business Administration"]

	},
	{"name": "WHU",
	"dates": "2006-2007",
	"location": "Vallendar, Germany",
	"degree": "exchange year",
	"majors": ["Controlling", "Marketing", "Entrepreneurship"]
	},

	{"name": "Lycée du Parc",
	"dates": "2001-2003",
	"location": "Lyon, France",
	"degree": "classe préparatoire",
	"majors": ["math", "History", "philosophy"],
	"minors": ["German", "English", "Economics"]}
	],

	"OnlineCourses": [
	{"title" : "Programming Foundations with Python",
	"school" : "Udacity",
	"dates": "12/2015",
	"courseUrl": "https://www.udacity.com/courses/ud036"
	},

	{"title" : "How to Use Git and GitHub",
	"school" : "Udacity",
	"dates": "01/2016",
	"courseUrl": "https://www.udacity.com/courses/ud775"
	},

	{"title" : "Introduction to Cloud Computing",
	"school" : "edX",
	"dates": "01/2016",
	"courseUrl": "https://www.edx.org/course/introduction-cloud-computing-ieeex-cloudintro-x-0"
	}
	]
};


//Website building
	//Add bio details
bio.display = function() {
	//	Add Name & Roole

	var formatedheaderName = HTMLheaderName.replace("%data%", bio.name);
	var formatedheaderRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formatedheaderRole);
	$("#header").prepend(formatedheaderName);
	

	// Add contacts
	var formatedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formatedemail = HTMLemail.replace("%data%", bio.contacts.email);
	var formatedLinkedin = HTMLLinkedIn.replace("%data%", bio.contacts.LinkedIn);
	var formatedXing = HTMLXing.replace("%data%", bio.contacts.Xing);
	var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.Github);
	var formatedblog = HTMLblog.replace("%data%", bio.contacts.blog);

	$("#topContacts").append(formatedmobile);
	$("#topContacts").append(formatedemail);
	$("#topContacts").append(formatedLinkedin);
	$("#topContacts").append(formatedXing);
	$("#topContacts").append(formatedGithub);
	$("#topContacts").append(formatedblog);

	// Add Skills

	if(bio.skills.length >0) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formatedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formatedSkill);	
			};
	};

	//add Biopic

	var formatedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").prepend(formatedbioPic);
};
	//Add Work section

		// "Subfunction"
work.Location = function() {
	var InputLocation = "";
			
	for (place in work.jobs[job].location){
		InputLocation=	InputLocation + work.jobs[job].location[place] + " - ";
		};
	
	InputLocation = InputLocation.slice(0, -3); 

	var formatedworkLocation = HTMLworkLocation.replace("%data%",InputLocation);
		

	$(".work-entry:last").append(formatedworkLocation);
};

		// "Main function"
work.display = function() {
	if (work.jobs.length >0) {
			
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			
			//formated Employer and Title
			var formatedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formatedtworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formatedInput = formatedworkEmployer + formatedtworkTitle;
			$(".work-entry:last").append(formatedInput);

			// Dates are quite easy
			var formatedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formatedworkDates);

			//Location is more fun: a second loop is needed in my case
			
			work.Location();

			//Description
			var formatedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formatedworkDescription);
		};
	};
};

	//Add Project section
projects.display = function() {
	for (proj in projects.project) {
		$("#projects").append(HTMLprojectStart);

		var formatedprojectTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
		var formatedprojectDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
		var formatedprojectDescription = HTMLprojectDescription.replace("%data%",projects.project[proj].description);
		
		$(".project-entry:last").append(formatedprojectTitle);
		$(".project-entry:last").append(formatedprojectDates);
		$(".project-entry:last").append(formatedprojectDescription);

		if (projects.project[proj].pic.length > 0){

			for (image in projects.project[proj].pic){
				var formatedprojectImage = HTMLprojectImage.replace("%data%", projects.project[proj].pic[image]);
				$(".project-entry:last").append(formatedprojectImage);
			};
		};
	};
};

	// Add Education

education.display = function () {
	if (education.schools.length > 0) {

		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var simplifiedSchool =  education.schools[school];

			var formatedschoolName = HTMLschoolName.replace("%data%", simplifiedSchool.name);
			var formatedschoolDegree = HTMLschoolDegree.replace("%data%", simplifiedSchool.degree);
			var formatedschoolDates = HTMLschoolDates.replace("%data%", simplifiedSchool.dates);
			var formatedschoolLocation = HTMLschoolLocation.replace("%data%", simplifiedSchool.location);

			var formatedschoolHeader = formatedschoolName + formatedschoolDegree;

			$(".education-entry:last").append(formatedschoolHeader);
			$(".education-entry:last").append(formatedschoolDates);
			$(".education-entry:last").append(formatedschoolLocation);

			if (simplifiedSchool.majors.length > 0) {
				var formatedschoolMajor = ""; 

				for (major in simplifiedSchool.majors) {
					formatedschoolMajor = formatedschoolMajor +  simplifiedSchool.majors[major] + ", ";
				};

				formatedschoolMajor = formatedschoolMajor.slice(0,-2);
				formatedschoolMajor = HTMLschoolMajor.replace("%data%", formatedschoolMajor);

				$(".education-entry:last").append(formatedschoolMajor);
			};
		};
	};

	if (education.OnlineCourses.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);

		for (course in education.OnlineCourses) {
					
			var formatedonlineTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[course].title);
			var formatedonlineSchool = HTMLonlineSchool .replace("%data%", education.OnlineCourses[course].school);
			var formatedonlinelDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[course].dates);
			var formatedonlineURL = HTMLonlineURL.replace("%data%", education.OnlineCourses[course].courseURL);

			var formatedonlinelHeader = formatedonlineTitle + formatedonlineSchool;

			$(".education-entry:last").append(formatedonlinelHeader);
			$(".education-entry:last").append(formatedonlinelDates);
			$(".education-entry:last").append(formatedonlineURL);
		};

	};

};
	// Build the website
education.display();
work.display();
projects.display();
bio.display();


	//Collecting click locations

$(document).click(function(loc) {
 	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
 });

	//Internationalize


// function inName(inputName) {
// 	var n = inputName.indexOF(" ");
// 	var newName = inputName.slice(0.1).toUpperCase + inputName.slice(1,n-1).toLowerCAse + inputName.slice(n).toUpperCase;

// 	return newName;
// };

// $("#main").append(internationalizeButton);

