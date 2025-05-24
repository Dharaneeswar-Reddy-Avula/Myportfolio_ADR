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
      strength: "75%",
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
      strength: "80%",
      logo: "/JS.png",
    },
    {
      name: "Node.js",
      strength: "70%",
      logo: "/NodeJs.svg",
    },
    {
      name: "Express.js",
      strength: "70%",
      logo: "/ExpressJs.png",
    },
    {
      name: "Bootstrap",
      strength: "80%",
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
    <div className="bg-[#141c27] min-h-screen md:px-[90px] pt-[50px]">
      <h1 className="text-[#55e6a5] text-2xl font-lg relative before:absolute before:h-[2px] before:w-[100px] before:bg-[#55e6a5] before:top-4 before:left-[-100px] mx-5 pl-[30px] mb-[50px]">
        SKILLS
      </h1>
      <div className="flex flex-col md:flex-row w-full items-center md:gap-20">
        <div className="md:w-1/2 grid md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            {skills.slice(0, 5).map((skill, index) => (
              <div
                key={index}
                className="text-white flex items-center gap-4 mb-4"
              >
                <img src={skill.logo} alt="skill_logo" className="h-10 w-10" />

                <div className="flex flex-col w-full">
                  <div className="text-lg font-semibold">{skill.name}</div>
                  <div className="text-sm mb-1">{skill.strength}</div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div
                      className="bg-green-500 h-1 rounded-full"
                      style={{ width: skill.strength }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {skills.slice(5, 10).map((skill, index) => (
              <div
                key={index}
                className="text-white flex items-center gap-4 mb-4"
              >
                <img src={skill.logo} alt="skill_logo" className="h-10 w-10" />

                <div className="flex flex-col w-full">
                  <div className="text-lg font-semibold">{skill.name}</div>
                  <div className="text-sm mb-1">{skill.strength}</div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div
                      className="bg-green-500 h-1 rounded-full"
                      style={{ width: skill.strength }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" h-[300px] w-[300px] md:w-[500px] md:h-[500px]">
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
