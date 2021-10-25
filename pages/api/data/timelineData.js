export default function handler(req, res) {
  res.status(200).json({
    1: {
      id: 1,
      date: "2016",
      title: "Where it all started",
      description_1: "Senior year of High School",
      description_2:
        "I took an inteoductory class about Computer Engineering. My first taste to the programming world.",
      icon: "/assets/c.png",
      occupation: "education",
      technologies: ["C programming"],
    },
    2: {
      id: 2,
      date: "2016",
      title: "First College Course",
      description_1: "Decided to major in Computer Engineering.",
      description_2:
        "My coding journey began with Procedural Programming in C++.",
      icon: "/assets/cplusplus.png",
      occupation: "education",
      technologies: ["C++"],
    },
    3: {
      id: 3,
      date: "2017",
      title: "My First Game",
      description_1:
        "I took a course on Object Oriented Programming where I built a Moon Lander game. I Utillized object-oriented paradigm and algorithm formulations to implement functionality for the lander.",
      icon: "/assets/cplusplus.png",
      occupation: "education",
      technologies: ["C++"],
    },
    4: {
      id: 4,
      date: "2017",
      title: "My First App",
      description_1: "Developed a Board Game Scanner App for Android in Java.",
      description_2:
        "This scanner app could scan the barcode of a given board game and display info such as: Name, Picture, stock availabilty and Price from a database.",
      icon: "/assets/java.png",
      occupation: "education",
      technologies: ["Java"],
    },
    5: {
      id: 5,
      date: "2018",
      title: "Hardware ...",
      description_1: "Part of a team that developed a Home Alarm System",
      description_2:
        "This Home Alarm System is a security feature to put in Homes and also detected motion near the system.",
      icon: "/assets/vhdl.jpeg",
      occupation: "education",
    },
    6: {
      id: 6,
      date: "2019",
      title: "Discovered a new Passion",
      description_1: "Took Web Engineering course",
      description_2: "Learned HTML, CSS, vanilla Javascript.",
      icon: "/assets/js.png",
      occupation: "education",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    7: {
      id: 7,
      date: "2020",
      title: "My Portfolio",
      description_1:
        "After almost a year, I created my Portfolio from the scratch. This website is built in react.",
      icon: "/assets/reactJS.png",
      occupation: "personal",
      technologies: ["ReactJS", "styled-components"],
    },
    8: {
      id: 8,
      date: "2020",
      title: "Covid Tracker",
      description_1:
        "Developed and deployed a responosive COVID-19 tracking webpage.",
      icon: "/assets/reactJS.png",
      occupation: "personal",
      technologies: ["ReactJS"],
    },
    9: {
      id: 9,
      date: "2020",
      title: "more Hardware ...",
      description_1: "Glove control car",
      description_2:
        "Built an rc car that can be driven by tilting your hands.",
      icon: "/assets/c.png",
      occupation: "education",
      technologies: [
        "C",
        "Arduino",
        "Bluetooth Module",
        "MotionTracking MPU-6050",
      ],
    },
    10: {
      id: 10,
      date: "2021",
      title: "Internship!!",
      description_1:
        "Landed a Web Development internship with The Church of Jesus Christ of Latter-day Saints.",
      icon: "/assets/reactJS.png",
      occupation: "work",
      technologies: ["ReactJS"],
    },
    11: {
      id: 11,
      date: "2021",
      title: "First Job!!!",
      description_1: "I am currently working as a Software Dev Engineer 1.",
      icon: "/assets/nextjs.png",
      occupation: "work",
      technologies: ["JS", "ReactJS", "Redux", "NextJS", "Firebase"],
    },
    12: {
      id: 12,
      date: "2021",
      title: "Time to update my portfolio",
      description_1: "I rebuilt my Portfolio using nextjs.",
      icon: "/assets/nextjs.png",
      occupation: "personal",
      technologies: ["ReactJS", "NextJS", "framer-motion", "styled-components"],
    },
  });
}
