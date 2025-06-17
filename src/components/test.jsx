import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
const Test = () => {
  const projects = [
  {
    name: "Teckzite",
    description: "Tech fest project",
    link: "https://teckzite.org",
    Role: "Frontend",
    stack: "MERN Stack",
    image: "/tz.png",

  },
  {
    name: "Alumni",
    description: "Alumni network platform",
    link: "https://alumni-repo.vercel.app/",
    Role: "Frontend",
    stack: "MERN Stack",
    image: "al.png",
   
  },
  {
    name: "Portfolio",
    description: "My personal portfolio",
    link: "https://myportfolio-adr.vercel.app/",
    Role: "Frontend",
    stack: "MERN Stack",
    image: "prof.png",
    
  },
  {
    name: "Martex",
    description: "Marketing website (Cloned Website)",
    link: "https://martex-clone.vercel.app/",
    Role: "Frontend",
    stack: "HTML, CSS, JS, Tailwindcss",
    image: "martex.png",
    
  },
  {
    name: "Gigo",
    description: "Cloned Website",
    link: "https://gigo-gamma.vercel.app/",
    Role: "Frontend",
    stack: "HTML, CSS, JS, Tailwindcss",
    image: "gigo.png",
    
  },
  {
    name: "Stocker",
    description: "Cloned the Stocker Websites just Frontend",
    link: "https://stocker-clone.vercel.app/",
    Role: "Frontend",
    stack: "HTML, CSS, JS, Tailwindcss",
    image: "stocker.png",
    
  },
  {
    name: "Dashboard",
    description: "Table creation dashboard UI",
    link: "https://database-dashboard-seven.vercel.app/",
    Role: "Frontend",
    stack: "HTML, CSS, JS, Tailwindcss",
    image: "db.png",
    
  },
  {
    name: "Sabbafarm",
    description: "Smart farming solution",
    link: "https:sabbafarm.com",
    Role: "Frontend, SEO",
    stack: "MERN Stack",
    image: "sb.png",
    
  },
  // {
  //   name: "EventArchitects",
  //   description: "Event planning tool",
  //   link: "#",
  //   Role: "Frontend, Backend",
  //   stack: "MERN Stack",
  //   image: "https://via.placeholder.com/300x180?text=EventArchitects",
  // },
];

  return (
    <section id="work" className="container mx-auto px-6 py-20 text-white">
      <div className="space-y-20">
        {projects.map((project, index) => {
          const isImageLeft = index % 2 === 0;
          return (
            <div
              key={project.id}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image Block */}
              <div
                className={`relative ${
                  isImageLeft ? "" : "order-2 lg:order-2"
                }`}
              >
                <Link className="bg-gray-200 rounded-lg overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>

              {/* Text Block */}
              <div
                className={`space-y-6  ${
                  isImageLeft ? "" : "order-1 lg:order-1"
                }`}
              >
                <div>
  
                  <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                  <p className="text-lg text-purple-100 leading-relaxed bg-[#1b2735]/80 backdrop-blur-md py-2 px-3 rounded-md">
                    {project.description}
                  </p>
                   <p className="text-lg text-purple-100 leading-relaxed bg-[#1b2735]/80 backdrop-blur-md py-2 px-3 rounded-md">
                    {project.Role}
                  </p>
                   <p className="text-lg text-purple-100 leading-relaxed bg-[#1b2735]/80 backdrop-blur-md py-2 px-3 rounded-md">
                    {project.stack}
                  </p>
                    <Link to= {project.link} className="text-lg w-full text-purple-100 leading-relaxed bg-[#1b2735]/80 backdrop-blur-md py-2 px-3 rounded-md">
                   View website 
                  </Link>
                </div>
                <div className="flex space-x-4">
                  <Github
                    size={24}
                    className="text-white hover:text-purple-300 cursor-pointer transition-colors"
                  />
                  <Twitter
                    size={24}
                    className="text-white hover:text-purple-300 cursor-pointer transition-colors"
                  />
                  <Linkedin
                    size={24}
                    className="text-white hover:text-purple-300 cursor-pointer transition-colors"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Test;
