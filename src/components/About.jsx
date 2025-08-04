import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";
import profileImage from "../assets/passport.jpg"; 
import resumeFile from "../assets/resume.pdf";
import { SiGithub, SiLinkedin, SiLeetcode, SiTwitter, SiGmail } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="p-8 mx-auto max-w-7xl mb-10 font-['Poppins'] max-sm:p-4 max-sm:mx-4"
    >
      <div className="flex items-center justify-between max-sm:flex-col gap-8 mt-12">
        {/* Text Section */}
        <div className="flex-1 min-w-0 max-sm:text-center">
          <h3 className="text-[70px] leading-[80px] font-semibold max-sm:text-[40px] max-sm:leading-[50px] text-[#00040f] dark:text-white">
            Hi, there! <br />I am
          </h3>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-[70px] font-semibold max-sm:text-[40px]">
            Kunal Singh
          </span>
          <p className="text-xl max-sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-5">
            Software Engineer
            <br />
            Proficient in Programming Languages and Technologies and have ability to solve real world problems
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="flex-1 min-w-0 max-sm:flex max-sm:justify-center">
          <Lottie
            animationData={computer}
            loop={true}
            className="max-w-[500px] w-full"
          />
        </div>

        {/* Profile Image and Socials */}
        <div className="flex-1 min-w-0 flex flex-col items-center max-sm:flex max-sm:justify-center">
          
          
          <div className="SOCIALS text-[#00040f] dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
            <a
              href="https://github.com/kunals495"
              className="hover:text-slate-500 dark:hover:text-sky-300"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-singh-627757330/"
              className="hover:text-slate-500 dark:hover:text-sky-300"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/kunalsingj7/"
              className="hover:text-slate-500 dark:hover:text-sky-300"
            >
              <SiLeetcode />
            </a>
           
            <a
              href="https://x.com/KunalSi31749372"
              className="hover:text-slate-500 dark:hover:text-sky-300"
            >
              <SiTwitter />
            </a>
            <a
              href="mailto:kunalsingj7@gmail.com"
              className="hover:text-slate-500 dark:hover:text-sky-300"
            >
              <SiGmail />
            </a>
          </div>
          <div className="flex gap-5 max-sm:justify-center">
            <a
              href={resumeFile}
              download="Kunal_Singh_Resume.pdf"
              className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600 font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;