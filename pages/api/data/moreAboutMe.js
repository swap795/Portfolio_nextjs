export default function handler(req, res) {
  res.status(200).json({
    work: [
      {
        id: "1",
        title: "Web Developer Intern",
        company: "The Church of Jesus Christ of Latter-day Saints",
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
      },
      {
        id: "2",
        title: "Android Scanner App (Team-oriented)",
        description: [
          "Utilized api and Built a QR barcode scanner app for a board game store.",
          "Designed the User Interface of the scanner app.",
          "Analyzed by undertaking exactly 100 surveys to get feedback on the User Experience of the app.",
        ],
      },
      {
        id: "2",
        title: "COVID-19 Tracker",
        description: [
          "Developed and deployed a responsive COVID-19 tracking webpage using React and firebase.",
          "User interface using a graph and a map that changes based on case types to visualize JSON data coming from an API endpoints.",
        ],
      },
      {
        id: "3",
        title: "Glove Control Car",
        description: [
          "Developed a motion sensor rc car that can be driven by the gestures of your hand.",
          "Implemented MPU-6050 gyroscope for motion sensing to send data through 2 HC-05 bluetooth modules and various other equipments/tools to accomplish an rc size car. ",
        ],
      },
    ],
  });
}
