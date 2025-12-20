import React from 'react'
import { MdFileDownload } from "react-icons/md";

const Hero = () => {
   const downloadFile = () => {
    const fileUrl = `/Dharaneeswar-Reddy-Avula-updated.pdf`; // Export as PPTX
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.target = "_blank"; // Opens in a new tab (optional)
    anchor.rel = "noopener noreferrer";
    anchor.click();
  };
  return (
<div className='relative min-h-screen bg-center bg-cover bg-no-repeat  bg-[url("/homeBg.jpg")] flex flex-col md:flex-row items-center justify-evenly text-white p-3'>
<div className='md:w-1/2 flex flex-col justify-center md:pt-[70px] font-poppins md:ml-[50px] order-2 md:order-1'>
 <h1 className="text-[35px] md:text-[47px] font-bold uppercase leading-[1.2] break-normal mb-[30px] mt-10">
  HI, I'M <br />Dharaneeswar Reddy ! <br />
 FULLSTACK <span className='text-[#55e6a5]'> DEVELOPER</span>
</h1>
<p className='text-[#A2A2A2] mb-[65px] font-poppins'>I'm an aspiring full-stack developer with a strong foundation in programming <br />  and  a passion for building robust, scalable web applications. I'm dedicated to learning  both front-end and back-end technologies to create seamless, efficient, <br />and user-friendly digital solutions. Eager to solve real-world problems through <br /> code and continuously grow  my skills in software development.</p>
<div className='flex gap-5 flex-col md:flex-row'>
  <div onClick={downloadFile} download className="cv bg-[#55e6a5] text-black p-[20px_30px] mr-[20px] w-[190px] hover:bg-[#141c27] hover:text-white flex gap-2 items-center justify-center transition-all ease-linear duration-300">
    <span className='whitespace-nowrap'>Download CV</span> <span className='text-lg'><MdFileDownload/></span>
  </div>
  <a  href="#contact" className='text-white font-semibold  p-[20px_30px] w-[190px] border-[1px] border-[#55e6a5] flex justify-center items-center'>
    Get in Touch
  </a>
</div>
</div>
<div className='bg-center bg-contain bg-no-repeat  bg-[url("/banner_shape.png")] p-7 md:scale-[1.2] mt-[80px] md:mr-[50px] order-1 md:order-2'>
    <img src="IMAGE.png" alt="" className='md:h-[350px] mt-[-20px]' />

</div>
 {/* <div className="flex flex-col items-center">
          <div className="size-[250px] md:size-[350px] bg-[#55e6a5] md:ml-[90px] relative flex items-end justify-center">
            <div className="md:h-[370px] md:w-[350px] bg-[#131311] absolute top-5 right-5 flex flex-col items-center">
              <img src="2.png" alt="" className="scale-[1.2] md:scale-130 mt-5" />
            </div>
          </div>
        
        </div> */}
    </div>
  )
}

export default Hero
