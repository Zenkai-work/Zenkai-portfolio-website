AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/tailwindcss.png",
    langName: "Tailwind CSS",
    langDesc: "<li>Tailwind CSS is self-described as a utility first CSS framework</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage: "assets/images/techstack-page/vue.png",
    langName: "Vue",
    langDesc: "<li>Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/next.png",
    langName: "Next.js",
    langDesc: "<li>Next.js is a React framework that gives you building blocks to create web applications</li>",
  },
  {
    langImage: "assets/images/techstack-page/nuxt.png",
    langName: "Nuxt.js",
    langDesc: "<li>Nuxt.js is a free and open source JavaScript library based on Vue.js, Node.js, Webpack and Babel.js</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/django.png",
    langName: "Django",
    langDesc: "<li>Django is an advanced Web framework written in Python that makes use of the model view controller (MVC) architectural pattern</li>",
  },
  {
    langImage: "assets/images/techstack-page/web3.png",
    langName: "Web3.js",
    langDesc: "<li>web3. js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket</li>",
  },
  {
    langImage: "assets/images/techstack-page/ethereum.png",
    langName: "Ethereum",
    langDesc: "<li>Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development</li>",
  },
  {
    langImage: "assets/images/techstack-page/kubernetes.png",
    langName: "Kubernetes",
    langDesc: "<li>Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation</li>",
  },
  {
    langImage: "assets/images/techstack-page/docker.png",
    langName: "Docker",
    langDesc: "<li>Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers</li>",
  },
  {
    langImage: "assets/images/techstack-page/aws.png",
    langName: "Amazon Web Services",
    langDesc: "<li>Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
