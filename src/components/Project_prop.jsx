/* eslint-disable react/prop-types */
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const Project_prop = (props) => {
  // Split the para prop into points based on periods or bullet points
  const points = props.para.split(/\.|\•/).map((point) => point.trim()).filter((point) => point);

  return (
    <div className="border-[#00040f] shadow-xl bg-[#e1e1e1] dark:bg-transparent dark:border-white border rounded-xl h-[370px] max-sm:h-[450px] p-7 max-sm:p-3 hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C] flex flex-col">
      <div className="HEADER">
        <div className="HEADING flex gap-7 max-sm:gap-0">
          <div className="p-3">
            <img
              src={props.img}
              alt=""
              className="max-w-[100px] rounded-full border border-[#00040f]"
            />
          </div>
          <div className="p-3">
            <h1 className="font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r p-1 from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-xl mb-2">
              {props.title}
            </h1>
            <h3 className="text-[#00040f] dark:text-slate-200 p-1">
              Tech Stack
            </h3>
            <div className="flex gap-1 p-1 -translate-x-2">
              {props.html5}
              {props.css3}
              {props.javascript}
              {props.tailwindcss}
              {props.react}
              {props.vite}
              {props.python}
              {props.mongodb}
            </div>
          </div>
        </div>
      </div>

      <div className="text-slate-500 text-base mt-5 px-5 flex-1 overflow-y-auto break-words">
        {points.join("\n")}
      </div>

      <div className="LINKS flex gap-2 text-[#00040f] dark:text-slate-200 p-2 pl-5 text-2xl">
        <a href={props.github_link} target="_blank" rel="noreferrer">
          <SiGithub />
        </a>
        {props.link && (
          <a href={props.link} target="_blank" rel="noreferrer">
            <SlLink />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project_prop;