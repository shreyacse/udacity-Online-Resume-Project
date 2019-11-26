/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Charlie Chaplin");
//var awesomeThoughts="I am Shreya and I am awesome";
//var aawesomeThoughts=awesomeThoughts.replace("awesome","fun");
//console.log(awesomeThoughts);
//console.log(aawesomeThoughts);
var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "john@example.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "San Francisco"
    },
    "welcomeMessage": "lorem ipsum dolor sit etc etc etc.",
    "skills": [
        "awesomeness", "delivering things", "cryogenic sleep",
        "saving universe"
    ],
    "biopic": "images/fry.jpg"
};

//function displayBio() {
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);



    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedRol = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#header").append(formattedRol);
    $("#footerContacts").append(formattedRol);
    var formattedRo = HTMLemail.replace("%data%", bio.contacts.email);
    $("#header").append(formattedRo);
    $("#footerContacts").append(formattedRo);
    var formattedR = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#header").append(formattedR);
    $("#footerContacts").append(formattedR);
    var formatted = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#header").append(formatted);
    $("#footerContacts").append(formatted);
    var formatte = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(formatte);
    $("#footerContacts").append(formatte);
    var f = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(f);
    var formatt = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formatt);
    $("#header").append(HTMLskillsStart);
    //for (var skill in bio.skills) {
    //bio.skills.forEach(function(skill){
    for (var i = 0; i < bio.skills.length; i++) {
        var format = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(format);
    }

};
bio.display();

var work = {
    "jobs": [{
            "employer": "Udacity",
            "title": "Course Developer",
            "location": "Kolkata, India",
            "dates": "Feb 2014 - Current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": " LearnBIG",
            "title": "Software Engineer",
            "location": "Mumbai, India",
            "dates": "May 2013 - Jan 2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
};
//{
//"employer": "LEAD Academy Charter High School",
//"title": "Science Teacher",
//"location": "Nashville, TN",
//"dates": "Jul 2012 - May 2013",
//"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//},
//{
// "employer": "Stratford High School",
//"title": "Science Teacher",
//"location": "Nashville, TN",
//"dates": "Jun 2009 - Jun 2012",
//"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//}
//]
//};
//function displayWork() {
work.display = function() {
    //for (var job in work.jobs) {
    //work.jobs.forEach(function(job){
    for (var c = 0; c < work.jobs.length; c++) {
        $("#workExperience").append(HTMLworkStart);
        var formatLocation = HTMLworkEmployer.replace("%data%", work.jobs[c].employer);
        //$("#main").append(formatLocation);
        var formatLocatio = HTMLworkTitle.replace("%data%", "- " + work.jobs[c].title);
        //$("#main").append(formatLocatio);
        var formattedEmpTitle = formatLocation + formatLocatio;
        $(".work-entry:last").append(formattedEmpTitle);
        var formatLocati = HTMLworkDates.replace("%data%", work.jobs[c].dates);
        var formatLocat = HTMLworkDescription.replace("%data%", work.jobs[c].description);
        var formatLoca = HTMLworkLocation.replace("%data%", work.jobs[c].location);
        $(".work-entry:last").append(formatLocati);
        $(".work-entry:last").append(formatLoca);
        $(".work-entry:last").append(formatLocat);
    }
};
work.display();


var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2014",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinkingbishop jarlsberg.",

        "images": ["images/fry.jpg", "images/fry.jpg"]


        //{

        // "title": "Software Engineer",

        //"dates": "May 2013 - Jan 2014",
        //"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        //}
    }]

};

//function displayProject() {
projects.display = function() {

    //for (var pro in projects.projects) {
    //projects.projects.forEach(function(pro){
    for (var k = 0; k < projects.projects.length; k++) {
        $("#projects").append(HTMLprojectStart);
        var formatProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[k].title);
        $(".project-entry:last").append(formatProjectTitle);
        var formatProjectTitl = HTMLprojectDates.replace("%data%", projects.projects[k].dates);
        $(".project-entry:last").append(formatProjectTitl);
        var formatProjectTit = HTMLprojectDescription.replace("%data%", projects.projects[k].description);
        $(".project-entry:last").append(formatProjectTit);
        //project.images.forEach(function(image){
        for (var w = 0; w < projects.projects[k].images.length > 0; w++) {
            var formatProjectTi = HTMLprojectImage.replace("%data%", projects.projects[k].images[w]);
            $(".project-entry:last").append(formatProjectTi);
            //var formatProjectT = HTMLprojectImage.replace("%data%", projects.projects[k].images[k]);
            //$(".project-entry:last").append(formatProjectT);
        }
    }
    //for (var proj in projects.images) {
};

projects.display();

var education = {
    "schools": [{
            "name": "Nova Southeastern University",
            "location": "Bihar, India",
            "degree": "Masters",
            "majors": ["CS"],
            "dates": "2013"
        },
        {
            "name": "Ekward College",
            "location": "Chennai, India",
            "degree": "BA",
            "majors": ["CS"],
            "dates": "2003"
        }
    ],
    "onlineCourses": [{
        "title": "Javascript Crash Course",
        "school": "Udacity",
        "dates": "2014",
        "url": "http:/udacity.com/course/ud804"
    }]
};

//function displayEducation() {
education.display = function() {
    //for (var school in education.schools) {
    for (var b = 0; b < education.schools.length; b++) {
        //education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);
        var formatEducation = HTMLschoolName.replace("%data%", education.schools[b].name);
        $(".education-entry:last").append(formatEducation);
        var formatEducatio = HTMLschoolDegree.replace("%data%", " - " + education.schools[b].degree);
        $(".education-entry:last").append(formatEducatio);
        var formatEducati = HTMLschoolDates.replace("%data%", education.schools[b].dates);
        $(".education-entry:last").append(formatEducati);
        var formatEducat = HTMLschoolLocation.replace("%data%", education.schools[b].location);
        $(".education-entry:last").append(formatEducat);
        var formatEduca = HTMLschoolMajor.replace("%data%", education.schools[b].majors);
        $(".education-entry:last").append(formatEduca);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    //for (var online in education.onlineCourses) {
    //education.onlineCourses.forEach(function(online){
    for (var p = 0; p < education.onlineCourses.length; p++) {
        var formatOnlineCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[p].title);
        $(".education-entry:last").append(formatOnlineCourse);
        var formatOnlineCours = HTMLonlineSchool.replace("%data%", " - " + education.onlineCourses[p].school);
        $(".education-entry:last").append(formatOnlineCours);
        var formatOnlineCour = HTMLonlineDates.replace("%data%", education.onlineCourses[p].dates);
        $(".education-entry:last").append(formatOnlineCour);
        var formatOnlineCou = HTMLonlineURL.replace("%data%", education.onlineCourses[p].url);
        $(".education-entry:last").append(formatOnlineCou);
    }
};

//displayEducation();
education.display();
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
//$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);