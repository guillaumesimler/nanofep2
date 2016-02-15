// Data input
var bio = {
    "name": "Guillaume Simler",
    "role": "Web Student",
    "welcomeMessage": "Welcome on my journey from corporate finance to IT",
    "skills": ["Corporate Finance", "Team Management", "M&A", "Sales", "ERP"],
    "contacts": {
        "mobile": "+49 176 76 24 ----",
        "email": "guillaume.simler@gmail.com",
        // Optional Insertions
        "LinkedIn": "https://de.linkedin.com/in/guillaume-simler-1391939",
        "Xing": "https://www.xing.com/profile/Guillaume_Simler",
        // Back to normal
        "github": "https://github.com/guillaumesimler",
        "blog": "http://www.simler.eu",
        "location": "Nürtingen, Germany"
    },

    /* the biopic ain't an Url: it is intentional and helper.js was adapted accordingly. 
    this was designed to allow the use of srcset: otherwise I would need to insert too
    many Urls. That for I standardized the namings and insert the %data% as the only 
    changing part of the Url.
    the other alternative would have been to use 4 different urls. 
    This explains the changes in helper.js from "%data%" to /%data%/g */
    "biopic": "bio_pic-2",
    //a small addition for some JQuerry interactivity
    "hydepic": "bio_pic-1"
};

var projects = {
    "projects": [{
            "title": "About Me",
            "dates": "01/2016",
            "description": "a first intro in HTML and CSS",
            /* the images aren't an Url: it is intentional and helper.js was adapted accordingly. 
            this was designed to allow the use of srcset: otherwise I would need to insert too
            many Urls. That for I standardized the namings and insert the %data% as the only 
            changing part of the Url.
            the other alternative would have been to use 4 different urls. 
            This explains the changes in helper.js from "%data%" to /%data%/g */
            "images": ["project1-1"]
        },

        {
            "title": "Portfolio",
            "dates": "02/2016",
            "description": "a deep dive into responsive webdesign",
            "images": ["project2-1",
                "project2-2",
                "project2-3"
            ]
        },

        {
            "title": "Resume",
            "dates": "02/2016",
            "description": "a deep dive into responsive webdesign",
            "images": ["project3-1"]
        }
    ]
};

var work = {

    /*Please be aware of an intentional modification of the JSON:
    The locations are no longer strings but arrays- helper.js was adapated accordingly.
    This has no programming background, only a biographical one */

    "jobs": [{
            "employer": "TTS Tooltechnic System (Festool)",
            "title": "Head of Strategic Projects",
            "location": ["Wendlingen, Germany"],
            "dates": "01/2014-03/2016",
            "description": "responsible for corporate strategy process, M&A, unconventional projects (Fablab, ...)"
        },

        {
            "employer": "TTS Tooltechnic System (Festool)",
            "title": "Managing Director TTS Polak",
            "location": ["Mimon, Czech Republic"],
            "dates": "01/2012-12/2013",
            "description": "responsible for daily operationss of TTS' aluminum foundry, its restruturing and sale to a strategic investor"
        },

        {
            "employer": "AVL",
            "title": "Manager Controlling AVL Europe & CFO AVL France",
            "location": [
                "Wiesbaden, Germany",
                "Croissy-sur-Seine, France",
                "Barcelona, Spain",
                "Stockholm, Sweden",
                "Turin, Italy",
                "Kidderminster, United Kingdom",
                "Graz, Austria"
            ],
            "dates": "02/2008-12/2011",
            "description": "responsible for daily financial operations of AVL France and its restruturing as well as a coordinating function of the financial operations of the European subsidies"
        },

        {
            "employer": "AGT Thermotechnik",
            "title": "financial manager",
            "location": ["Erkelenz, Germany"],
            "dates": "08/2007-06/2008",
            "description": "responsible for daily financial operations of AGT Thermotechnik"
        },

        {
            "employer": "IBM",
            "title": "ibm.com sales operation analyst",
            "location": [
                "Herrenberg, Germany",
                "Stuttgart, Germany",
                "Courbevoie, France"
            ],
            "dates": "01/2005-09/2006",
            "description": "responsible for reporting tool and method improvements, business counterpart to sales team"
        }
    ]
};

var education = {
    "schools": [{
            "name": "Audencia",
            "dates": "2004-2007",
            "location": "Nantes, France",
            "degree": "Master",
            "majors": ["Business Administration"],
            "url": "http://www.audencia.com/en"

        }, {
            "name": "WHU",
            "dates": "2006-2007",
            "location": "Vallendar, Germany",
            "degree": "exchange year",
            "majors": ["Controlling", "Marketing", "Entrepreneurship"],
            "url": "https://www.whu.edu/en"
        },

        {
            "name": "Lycée du Parc",
            "dates": "2001-2003",
            "location": "Lyon, France",
            "degree": "classe préparatoire",
            "majors": ["Math", "History", "Philosophy"],
            "minors": ["German", "English", "Economics"],
            "url": "https://lyceeduparc.fr/ldp"
        }
    ],

    "onlineCourses": [{
            "title": "Programming Foundations with Python",
            "school": "Udacity",
            "date": "12/2015",
            "url": "https://www.udacity.com/courses/ud036"
        },

        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "date": "01/2016",
            "url": "https://www.udacity.com/courses/ud775"
        },

        {
            "title": "Introduction to Cloud Computing",
            "school": "edX",
            "date": "01/2016",
            "url": "https://www.edx.org/course/introduction-cloud-computing-ieeex-cloudintro-x-0"
        }
    ]
};


//Website building
//Add bio details
bio.display = function() {
    //	Add Name & Roole
    var data = "%data%";

    var formatedheaderName = HTMLheaderName.replace(data, bio.name);
    var formatedheaderRole = HTMLheaderRole.replace(data, bio.role);

    $("#header-text").prepend(formatedheaderRole);
    $("#header-text").prepend(formatedheaderName);


    // Add contacts
    var formatedmobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formatedemail = HTMLemail.replace(data, bio.contacts.email);
    var formatedLinkedin = HTMLLinkedIn.replace(data, bio.contacts.LinkedIn);
    var formatedXing = HTMLXing.replace(data, bio.contacts.Xing);
    var formatedGithub = HTMLgithub.replace(data, bio.contacts.Github);
    var formatedblog = HTMLblog.replace(data, bio.contacts.blog);

    $("#topContacts").append(formatedmobile);
    $("#topContacts").append(formatedemail);
    $("#SecContacts").append(formatedLinkedin);
    $("#SecContacts").append(formatedXing);
    $("#SecContacts").append(formatedGithub);
    $("#SecContacts").append(formatedblog);

    // Add Skills

    if (bio.skills.length > 0) {
        $("#header-text").append(HTMLskillsStart);

        for (var skill in bio.skills) {
            var formatedSkill = HTMLskills.replace(data, bio.skills[skill]);
            $("#skills").append(formatedSkill);
        };
    };

    //add Biopic

    var formatedbioPic = HTMLbioPic.replace(/%data%/g, bio.biopic);
    $("#header-picture").append(formatedbioPic);
};

	// Some interactivtiy to change from Dr Jekill to Mr Hyde

$(document).ready(function(){
	$('#header-picture').hover(function() {
		$("#biopic").remove();
		var formatedbioPic = HTMLbioPic.replace(/%data%/g, bio.hydepic);
		$("#header-picture").append(formatedbioPic);
	},function(){
		$("#biopic").remove();
    	var formatedbioPic = HTMLbioPic.replace(/%data%/g, bio.biopic);
    	$("#header-picture").append(formatedbioPic);		
	});
});

//Add Work section

// "Subfunction"
work.Location = function(_input) {
    var data = "%data%";
    var InputLocation = "";

    for (var place in _input.location) {
        InputLocation = InputLocation + _input.location[place] + " - ";
    };

    InputLocation = InputLocation.slice(0, -3);

    var formatedworkLocation = HTMLworkLocation.replace(data, InputLocation);


    $(".work-entry:last").append(formatedworkLocation);
};

// "Main function"
work.display = function() {

    var data = "%data%";

    if (work.jobs.length > 0) {

        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            //formated Employer and Title
            var formatedworkEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
            var formatedtworkTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
            var formatedInput = formatedworkEmployer + formatedtworkTitle;
            $(".work-entry:last").append(formatedInput);

            // Dates are quite easy
            var formatedworkDates = HTMLworkDates.replace(data, work.jobs[job].dates);
            $(".work-entry:last").append(formatedworkDates);

            //Location is more fun: a second loop is needed in my case

            work.Location(work.jobs[job ]);

            //Description
            var formatedworkDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
            $(".work-entry:last").append(formatedworkDescription);
        };
    };
};

//Add Project section
projects.display = function() {

    var data = "%data%";

    for (var proj in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formatedprojectTitle = HTMLprojectTitle.replace(data, projects.projects[proj].title);
        var formatedprojectDates = HTMLprojectDates.replace(data, projects.projects[proj].dates);
        var formatedprojectDescription = HTMLprojectDescription.replace(data, projects.projects[proj].description);

        $(".project-entry:last").append(formatedprojectTitle);
        $(".project-entry:last").append(formatedprojectDates);
        $(".project-entry:last").append(formatedprojectDescription);

        if (projects.projects[proj].images.length > 0) {

            for (var image in projects.projects[proj].images) {
                var formatedprojectImage = HTMLprojectImage.replace(/%data%/g, projects.projects[proj].images[image]);
                $(".project-entry:last").append(formatedprojectImage);
            };
        };
    };
};

// Add Education

education.display = function() {
    var data = "%data%";

    if (education.schools.length > 0) {

        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var simplifiedSchool = education.schools[school];

            var formatedschoolName = HTMLschoolName.replace(data, simplifiedSchool.name);
            formatedschoolName = formatedschoolName.replace("#", simplifiedSchool.url);

            var formatedschoolDegree = HTMLschoolDegree.replace(data, simplifiedSchool.degree);
            var formatedschoolDates = HTMLschoolDates.replace(data, simplifiedSchool.dates);
            var formatedschoolLocation = HTMLschoolLocation.replace(data, simplifiedSchool.location);

            var formatedschoolHeader = formatedschoolName + formatedschoolDegree;

            $(".education-entry:last").append(formatedschoolHeader);
            $(".education-entry:last").append(formatedschoolDates);
            $(".education-entry:last").append(formatedschoolLocation);

            if (simplifiedSchool.majors.length > 0) {
                var formatedschoolMajor = "";

                for (var major in simplifiedSchool.majors) {
                    formatedschoolMajor = formatedschoolMajor + simplifiedSchool.majors[major] + ", ";
                };

                formatedschoolMajor = formatedschoolMajor.slice(0, -2);
                formatedschoolMajor = HTMLschoolMajor.replace(data, formatedschoolMajor);

                $(".education-entry:last").append(formatedschoolMajor);
            };
        };
    };

    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);

        for (var course in education.onlineCourses) {

            var formatedonlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[course].title);
            var formatedonlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[course].school);
            var formatedonlinelDates = HTMLonlineDates.replace(data, education.onlineCourses[course].date);
            var formatedonlineURL = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].url);

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

// Load the map

$("#mapDiv").append(googleMap);


//Collecting click locations

// $(document).click(function(loc) {
//  	var x = loc.pageX;
// 	var y = loc.pageY;

// 	logClicks(x,y);
//  });

//Internationalize


// function inName(inputName) {
// 	var n = inputName.indexOF(" ");
// 	var newName = inputName.slice(0.1).toUpperCase + inputName.slice(1,n-1).toLowerCAse + inputName.slice(n).toUpperCase;

// 	return newName;
// };

// $("#main").append(internationalizeButton);