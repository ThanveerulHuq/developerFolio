
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Thanveerul Huq",
  title: "Hi all, I'm Thanveer",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building professional Web applications with JavaScript / Angular / Nodejs and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1GyBYSdBTu3GcArzV1nu4Y_jUHRchuWye/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/ThanveerulHuq",
  linkedin: "https://www.linkedin.com/in/thanveerul-huq/",
  gmail: "thanveersiddiq@gmail.com",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ Azure / AWS")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-azure"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "Nielsen",
      companylogo: require("./assets/images/nielsen_logo.jpg"),
      date: "Nov 2019 – Present",
      desc: "Working in Spectra strategic insights in java and angular tech stack",
    },
    {
      role: "Programmer Analyst",   
      company: "Sanmina",
      companylogo: require("./assets/images/sanminaLogo.png"),
      date: "May 2017 – Oct 2019",
      desc: "Worked mostly with Angular and Node.js. Involved in setting up boiler plate code for Angular with oauth and role Guards."
    },
    {
      role: "Engineering Intern",  
      company: "Sanmina",
      companylogo: require("./assets/images/sanminaLogo.png"),
      date: "May 2016 – May 2017",
      desc: "Went through the training in sanmina manufacturing plant to understand the business. Learned Web technologies from basics and contributed to few projects."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "thanveersiddiq", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [ ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achivementsCards:[]
  // achivementsCards: [
  //   {
  //     title: "Google Code-In Finalist",
  //     subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
  //     image: require("./assets/images/codeInLogo.webp"),
  //     footerLink: [
  //       { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
  //       { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
  //       { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
  //     ]
  //   },
  //   {
  //     title: "Google Assistant Action",
  //     subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
  //     image: require("./assets/images/googleAssistantLogo.webp"),
  //     footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
  //   },

  //   {
  //     title: "PWA Web App Developer",
  //     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
  //     image: require("./assets/images/pwaLogo.webp"),
  //     footerLink: [
  //       { name: "Certification", url: "" },
  //       { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
  //     ]
  //   }
  // ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.expo.io/building-snapigram-7dc84aa1a339",
      title: "Building Snapigram",
      description: "Introducing our project building Snapigram (an Instagram clone) with Hasura and Expo"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: []
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9600642802",
  email_address: "thanveersiddiq@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "thanveersiddiq"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, blogSection,  contactInfo , twitterDetails, achievementSection,podcastSection,bigProjects,talkSection};
