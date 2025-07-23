"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IIIT_KOTA from "../assets/IIIT_Kota.png";

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
              img={Oppia}
              title="Freelancer"
              subtitle="Full Stack Developer"
              date="January 2024- Present"
              para="- Working as a freelancer to develop and deploy projects as per client requirements.
                     - I already worked on rental cloth website in which developed authentication and authorization system and Integrated this website with razorpay API payment gateway."
              
            />
            <Exp_prop
              img={KDE}
              title="Nullclass Edutech"
              subtitle="Software Developer Intern"
              date="2 Month remote"
              para="- During my internship, I am a part of developer team which working on online meeting platform like zoom where nullclass can conduct their lectures.
                    "
            />
              <Exp_prop
              img={Hackthechain}
              title="Hackathon"
              subtitle="Team Lead"
              date="March 2025"
              para="- We participated in college level hackathon and deliver a python tool which perform real time web scrapping automation which is optimal solution for financial firm in a limited time."
            />
          
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
