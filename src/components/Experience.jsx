"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  Hackthechain,
  GSSOC,
  IITB,
  Sports,
  IIITians,
  GDSC,
  KDE,
  Oppia,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Hackthechain}
              title="WonderBiz Technologies"
              subtitle="Software Engineer"
              date="July 2025 - Present"
              para={[
                "Working as a Full Stack Developer focusing on C#, ASP.NET Core, ASP.NET Web API, and SQL Server.",
                "Developing and maintaining scalable web applications and APIs.",
                "Contributing to both frontend and backend with clean, efficient, and testable code.",
              ]}
            />
            <Exp_prop
              img={Oppia}
              title="Freelancer"
              subtitle="Full Stack Developer"
              date="January 2024 - Present"
              para={[
                "Developing and deploying projects based on client requirements.",
                "Worked on a rental cloth website with authentication and authorization systems.",
                "Integrated the website with Razorpay API payment gateway.",
              ]}
            />
            <Exp_prop
              img={KDE}
              title="Nullclass Edutech"
              subtitle="Software Developer Intern"
              date="2 Month remote"
              para={[
                "Part of a developer team working on an online meeting platform like Zoom.",
                "Contributing to the development of lecture-conducting features.",
              ]}
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;