/**
 * @param {string} label
 */
const placeholderMedia = (label) => ({
  type: "placeholder",
  label,
  alt: `${label} placeholder`,
});

export const moreAboutMe = {
  work: [
    {
      id: "1",
      title: "Web Developer Intern",
      company: "The Church of Jesus Christ of Latter-day Saints",
      time: "Jan 2020 - July 2020",
      description: [
        "Debug, troubleshoot, refine dynamic Web Apps and user interfaces for a range of applications using web technologies.",
        "Optimized code and worked in an Agile Software development environment to gather, collaborate, and organize work with project team and cross-functional teams.",
        "Gained experience supporting systems and delivering services to 15+ million of members across the world.",
      ],
    },
    {
      id: "2",
      title: "Software Dev Engineer 1",
      company: "The Church of Jesus Christ of Latter-day Saints",
      time: "Aug 2020 - Present",
      description: [
        "Developed a web application to help the church's members to connect with their families, classes, and ways for members to continue their responsibilities by staying connected.",
        "Helped fill the gaps within the church members in their communities to stay connected with each other by consolidating church's blog, articles, magazines and many other resources provided by the church into the app.",
        "Developed and maintained a cost effective architecture into the app saving thousands of dollars.",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      title: "Home Alarm System (Team-oriented)",
      description: [
        "Executed HC-SR501 PIR motion detector into the main project to detect movements near the system using FPGA board (Xilinx Artix-7)",
        "Delivered testing codes to resolve why the state machine was not moving through the different states.",
      ],
      media: placeholderMedia("Home Alarm System media"),
    },
    {
      id: "2",
      title: "Android Scanner App (Team-oriented)",
      description: [
        "Utilized api and Built a QR barcode scanner app for a board game store.",
        "Designed the User Interface of the scanner app.",
        "Analyzed by undertaking exactly 100 surveys to get feedback on the User Experience of the app.",
      ],
      media: placeholderMedia("Android Scanner App media"),
    },
    {
      id: "3",
      title: "COVID-19 Tracker",
      description: [
        "Developed and deployed a responsive COVID-19 tracking webpage using React and firebase.",
        "User interface using a graph and a map that changes based on case types to visualize JSON data coming from an API endpoints.",
      ],
      media: placeholderMedia("COVID-19 Tracker media"),
    },
    {
      id: "4",
      title: "Glove Control Car (Team-oriented)",
      description: [
        "Developed a motion sensor rc car that can be driven by the gestures of your hand.",
        "Implemented MPU-6050 gyroscope for motion sensing to send data through 2 HC-05 bluetooth modules and various other equipments/tools to accomplish an rc size car. ",
      ],
      media: placeholderMedia("Glove Control Car media"),
    },
  ],
};

export const timelineData = {
  1: {
    id: 1,
    date: "2015 - 2016",
    title: "Where it all started",
    heading: "Course",
    description_1: "Senior year of High School",
    description_2:
      "I took an inteoductory class about Computer Engineering. My first taste to the programming world.",
    icon: "/assets/c.png",
    occupation: "education",
    technologies: ["C programming"],
  },
  2: {
    id: 2,
    date: "Sep 2016",
    title: "First College Course",
    heading: "Course",
    description_1: "Decided to major in Computer Engineering.",
    description_2:
      "My coding journey began with Procedural Programming in C++.",
    icon: "/assets/cplusplus.png",
    occupation: "education",
    technologies: ["C++"],
  },
  3: {
    id: 3,
    date: "Apr 2017",
    title: "My First Game",
    heading: "School Project",
    description_1:
      "I took a course on Object Oriented Programming where I built a Moon Lander game. I Utillized object-oriented paradigm and algorithm formulations to implement functionality for the lander.",
    icon: "/assets/cplusplus.png",
    occupation: "education",
    technologies: ["C++"],
  },
  4: {
    id: 4,
    date: "Sep 2017",
    title: "My First App",
    heading: "School Project",
    description_1: "Developed a Board Game Scanner App for Android in Java.",
    description_2:
      "This scanner app could scan the barcode of a given board game and display info such as: Name, Picture, stock availabilty and Price from a database.",
    icon: "/assets/java.png",
    occupation: "education",
    technologies: ["Java", "API"],
  },
  5: {
    id: 5,
    date: "Apr 2018",
    title: "Hardware ...",
    heading: "School Project",
    description_1: "Part of a team that developed a Home Alarm System",
    description_2:
      "This Home Alarm System is a security feature to put in Homes and also detected motion near the system.",
    icon: "/assets/vhdl.jpeg",
    occupation: "education",
  },
  6: {
    id: 6,
    date: "Jan 2019",
    title: "Discovered a new Passion",
    heading: "Course",
    description_1: "Took Web Engineering course",
    description_2: "Learned HTML, CSS, vanilla Javascript.",
    icon: "/assets/js.png",
    occupation: "education",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  7: {
    id: 7,
    date: "Jan 2020",
    title: "My Portfolio",
    heading: "Personal Project",
    description_1:
      "After almost a year, I created my Portfolio from the scratch. This website is built in react.",
    icon: "/assets/reactJS.png",
    occupation: "personal",
    technologies: ["ReactJS", "styled-components"],
  },
  8: {
    id: 8,
    date: "Apr 2020",
    title: "Covid Tracker",
    heading: "Personal Project",
    description_1:
      "Developed and deployed a responosive COVID-19 tracking webpage.",
    icon: "/assets/reactJS.png",
    occupation: "personal",
    technologies: ["ReactJS", "API endpoints"],
  },
  9: {
    id: 9,
    date: "Apr 2020",
    title: "More Hardware ...",
    heading: "School Project",
    description_1: "Glove control car",
    description_2:
      "Built an rc car that can be driven by the gestures of your hand.",
    icon: "/assets/c.png",
    occupation: "education",
    technologies: [
      "C",
      "Arduino",
      "Bluetooth Module",
      "MPU-6050",
      "Accelerometer",
      "Gyroscope",
    ],
  },
  10: {
    id: 10,
    date: "Jan 2021 - July 2021 (7 months)",
    title: "Internship!!",
    heading: "Work",
    description_1:
      "Landed a Web Development internship with The Church of Jesus Christ of Latter-day Saints.",
    icon: "/assets/reactJS.png",
    occupation: "work",
    technologies: [
      "ReactJS",
      "NextJS",
      "NodeJS",
      "Agile Software Development",
      "JIRA",
    ],
  },
  11: {
    id: 11,
    date: "Aug 2021 - April 2022",
    title: "Software Dev Engineer 1",
    heading: "Work",
    description_1: "I am currently working as a Software Dev Engineer 1.",
    icon: "/assets/nextjs.png",
    occupation: "work",
    technologies: [
      "JS",
      "ReactJS",
      "Redux",
      "Enzyme",
      "NextJS",
      "Firebase",
      "Agile Software Development",
    ],
  },
  12: {
    id: 12,
    date: "Oct 2021",
    title: "Time to update my portfolio",
    heading: "Personal Project",
    description_1: "I rebuilt my Portfolio using nextjs.",
    icon: "/assets/nextjs.png",
    occupation: "personal",
    technologies: ["ReactJS", "NextJS", "framer-motion", "styled-components"],
  },
  13: {
    id: 13,
    date: "May 2022",
    title: "QA Automation Engineer",
    heading: "Work",
    description_1:
      "New opportunity where the company is young in automation. So, taking my dev experience to build autoamtion framework.",
    icon: "",
    occupation: "work",
    technologies: ["Java", "Selenium", "TestNG", "Cucumber", "Jenkins"],
  },
};
