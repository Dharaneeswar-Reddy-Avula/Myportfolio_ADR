import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Skills = () => {
  const skills = [
    {
      name: "React js",
      strength: "80%",
      logo: "/React.png",
    },
    {
      name: "Tailwind CSS",
      strength: "85%",
      logo: "/tailwind.svg",
    },
    {
      name: "HTML",
      strength: "90%",
      logo: "/html.png",
    },
    {
      name: "CSS",
      strength: "85%",
      logo: "/css.webp",
    },
    {
      name: "JavaScript",
      strength: "70%",
      logo: "/JS.png",
    },
    {
      name: "Node.js",
      strength: "65%",
      logo: "/NodeJs.svg",
    },
    {
      name: "Express.js",
      strength: "70%",
      logo: "/ExpressJs.png",
    },
    {
      name: "Bootstrap",
      strength: "70%",
      logo: "/Bootstrap.svg",
    },
    {
      name: "SEO",
      strength: "65%",
      logo: "/seo.jpg",
    },
    {
      name: "Redux State Management",
      strength: "75%",
      logo: "/Redux.svg",
    },
  ];

  return (
    <div className="bg-[#141c27] min-h-screen px-10 md:px-[90px] pt-[50px] pb-[50px]">
      <h1 className="text-[#55e6a5] text-2xl font-lg relative before:absolute before:h-[2px] before:w-[100px] before:bg-[#55e6a5] before:top-4 before:left-[-100px] mx-5 pl-[30px] mb-[50px]">
       Hands-on Experience In
      </h1>
      <div className="flex flex-col md:flex-row w-full items-center md:gap-20">
     <div className="md:w-1/2 grid md:grid-cols-2 gap-6">
  {[0, 1].map((columnIndex) => (
    <div key={columnIndex} className="flex flex-col gap-3">
      {skills
        .slice(columnIndex * 5, columnIndex * 5 + 5)
        .map((skill, index) => (
          <div
            key={index}
            className="flex h-[100px] items-center gap-4 bg-[#1b2735]/80 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 group border border-[#55e6a5]/20"
          >
            {/* Skill Logo */}
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="h-16 w-16 rounded-md object-contain border border-[#55e6a5] p-1 bg-black/30 group-hover:scale-105 transition duration-300"
            />

            {/* Skill Details */}
            <div className="flex flex-col w-full">
              <div className="text-white text-lg font-semibold">
                {skill.name}
              </div>
              {/* <div className="text-sm text-[#55e6a5] font-medium">
                {skill.strength}
              </div> */}
            </div>
          </div>
        ))}
    </div>
  ))}
</div>

        <div className=" h-[300px] w-[300px] md:w-[600px] md:h-[550px] bg-[#1b2735]/80 backdrop-blur-md border border-[#55e6a5]/20">
          <DotLottieReact
            src="https://lottie.host/6b346d52-2ac0-49b6-8ae6-6465be300f31/Q7gxlbra8i.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
