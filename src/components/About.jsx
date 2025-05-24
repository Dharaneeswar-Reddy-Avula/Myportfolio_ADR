import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#141c27] font-poppins pt-[140px] pb-[50px] md:px-[90px] flex flex-col md:flex-row gap-10 md:gap-[100px]">
      <div className="md:w-1/2 ">
        <h1 className="text-[#55e6a5] text-2xl font-lg relative before:absolute before:h-[2px] before:w-[100px] before:bg-[#55e6a5] before:top-4 before:left-[-100px] mx-5 pl-[30px]">ABOUT ME</h1>
        <section className="about w-full  md:px-[20px] flex flex-col gap-[20px] shadow-xxl md:ml-[70px]">
          <div className="detais-wrap flex flex-col md:gap-[10px]  rounded-lg shadow-lg p-[10px] md:p-[20px]">
            <div className="education-skillwrap flex flex-wrap pl-[10px] justify-between">
              <div className="education shadow-lg p-[10px] rounded-lg w-full">
                <h1 className="text-[20px] font-bold mb-[20px] text-white">
                  My Education
                </h1>
                <ul className="myedu flex flex-col gap-[20px] w-full relative after:absolute after:h-full after:w-[3px] after:top-0 after:bg-[#55e6a5]  rounded-lg p-[10px] after:left-[-10px] md:after:left-[-20px]">
                  <li className="border-[1px] text-white border-[#55e6a5] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[#55e6a5] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
                    Currently Studying: BTech 3rd year, CSE, RGUKT NUZVID (2025-2026)
                  </li>
                  <li className="border-[1px] text-white border-[#55e6a5] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[#55e6a5] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
                    BTech: RGUKT Nuzvid
                  </li>{" "}
                  <li className="border-[1px] text-white border-[#55e6a5] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[#55e6a5] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
                    Intermediate: RGUKT Nuzvid (2021-2023)
                  </li>
                  <li className="border-[1px] text-white border-[#55e6a5] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[#55e6a5] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
                    SSC: St. Antony's E.M High School, Kadapa (2020-2021)
                  </li>
                </ul>
              </div>
              <div className="mt-2 mx-6">
                <h3 className="text-white font-bold text-[20px] mb-[20px]">
                  Experience
                </h3>
                <div className="border-[1px] text-white border-[#55e6a5] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[#55e6a5] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
                  Intern at TechBuggy
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <div className="size-[250px] md:size-[350px] bg-[#55e6a5] md:ml-[90px] relative flex items-end justify-center">
            <div className="md:h-[370px] md:w-[350px] bg-[#131311] absolute top-5 right-5 flex flex-col items-center">
              <img src="2.png" alt="" className="scale-[1.2] md:scale-130 mt-5" />
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg h-[100px]  z-30 mx-2 md:ml-[50px] mt-[70px] text-white flex justify-center items-center px-[30px] rounded-md">
        <i>"Crafting clean, functional, and user-focused websites that make an impact."</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
