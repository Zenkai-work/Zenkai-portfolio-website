AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "FULL STACK DEVELOPER",
    cardImage: "assets/images/experience-page/simevo.jpg",
    place: "Simevo S.R.L.",
    time: "(Nov, 2021 - present)",
    desp: "<li>Refactored Vue/Node code—reducing bugs, making it reusable, and altering it to \
    provide new data utilized by the new data-visualization interfaces</li> \
    <li>Used Amazon Lambda to increase the performance and secure the API endpoints</li> \
    <li>Implemented multiplayer real-time features using Nuxt.js and WebSockets</li> \
    <li>Used Amazon RDS for SQL databases and use it as the primary database</li> \
    <li>Built daily GoogleSheet report using google-spreadsheet and node-cron library</li> \
    <li>Wrote unit and end-to-end tests using Jest and Chai to ensure that the APIs are working as expected</li> \
    <li>Used Github and Gitlab CI/CD actions to implement CI and CD</li>" ,
  },
  {
    title: "FULL STACK DEVELOPER",
    cardImage: "assets/images/experience-page/raininteractivekk.jpg",
    place: "RAIN INTERACTIVE KK",
    time: "(May, 2017 - Oct, 2021)",
    desp: "<li>Optimized several large mongo queries where the execution time went down from 10 seconds to 1-2 seconds (sometimes sub-second)</li> \
    <li>Implemented full-text search of articles using elasticsearch</li> \
    <li>Migrated MongoDB to Postgres on Node.js back-end</li> \
    <li>Used Amazon S3 to store large files and MongoDB to store documents of Users, Accounts, Merchants, Transactions, etc</li> \
    <li>Developed cron-jobs for performing periodic features on the back-end side without any front-end requests</li> \
    <li>Implemented live reloading of new product content and messages using socket.io</li> \
    <li>Built transactions and repayments report as excel and built a function of converting Docx files to pdf files</li> \
    <li>Used mongo GridFSBucket/Google Cloud Storage to store large files like videos, audios, and images</li>",
  },
  {
    title: "FULL-STACK DEVELOPER",
    cardImage: "assets/images/experience-page/zodigitaljapan.jpeg",
    place: "ZO DIGITAL JAPAN",
    time: "(Oct, 2015 - Apr, 2017)",
    desp: "<li>Built a responsive website front end using React/Redux</li> \
    <li>Created several React components with D3 charts that support interactive visualizations of financial data projections and analysis</li> \
    <li>Developed unit tests and integration tests using Jest and Chai</li> \
    <li>Implemented client-side data transformations to map, filter, reduce, etc. large datasets for display in interactive SVG charts</li> \
    <li>Wrote advanced jQuery DataTables plugins and UX handling</li> \
    <li>Created a front-end application using React, which communicates with back-end API using JWT</li> \
    <li>Displayed PDFs in React app as easily as if they were images</li> \
    <li>Supported and refined a web service for storing data from social networks.</li>",
  },
  {
    title: "FRONT-END DEVELOPER",
    cardImage: "assets/images/experience-page/yumyapps.jpg",
    place: "YUMYAPPS CO.,LTD.",
    time: "(Apr, 2014 - Sep, 2015)",
    desp: "<li>Used react-webcam module to add camera features to React front-end</li> \
    <li>Created reusable React components for the date picker, dropdown, buttons, and input styles according to the provided designs</li> \
    <li>Improved the UI and UX across the entire application with an overhaul of the existing CSS code</li> \
    <li>Contributed as part of the team that developed a new web-shop app for a large retailer</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  },
];

// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, subtitle, desp }) =>
//       (output += `  
//       <div class="blog-slider__item swiper-slide">
//         <div class="blog-slider__img">
//             <img src="${image}" alt="">
//         </div>
//         <div class="blog-slider__content">
//           <div class="blog-slider__title">${title}</div>
//           <span class="blog-slider__code">${subtitle}</span>
//           <div class="blog-slider__text">${desp}</div>
//           <a href="#" class="blog-slider__button">Read More</a>   
//         </div>
//       </div>
//       `)
//   );
//   hackathonsection.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
