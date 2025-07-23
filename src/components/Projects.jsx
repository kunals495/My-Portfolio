import Project_prop from "./project_prop";
import {
  GPT4,
  Portfolio,
  Rocket,
  WellBeing,
  Game,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiMoneygram,
  SiMongodb,
  SiSolidity,
  SiEthereum,
  SiStreamlit,
  SiPandas,
  SiPhp,
  SiRazorpay,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="CONVO: Article Based Query Resolver AI"
            para="Developed a full-stack web application that fetches content from URLs and leverages large language
models to answer user queries or generate summaries with contextual accuracy.
Integrated web scraping, LangChain pipelines, and FastAPI with a React-based frontend to deliver
seamless, AI-driven article comprehension.
• Optimized to process articles in under 30 seconds and offers 1,048,576 input tokens and 8,192 output
tokens, enabling detailed analysis of lengthy documents.

"
            img={Portfolio}
            link="ok"
            github_link="https://github.com/kunals495/Convo"
            tailwindcss={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
             react={
              <Tooltip title="MongoDB" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            
             
          />
          <Project_prop
            title="Fundraiser: Blockchain Based Crowdfunding Platform"
            para="A blockchain-based crowdfunding platform that allows users to create, manage, and contribute to
fundraising campaigns securely.
• Designed and implemented smart contracts in Solidity, facilitating transparent transactions and ensuring
funds are released only upon meeting predefined campaign goals."
            img={Rocket}
            link="ok"
            github_link="https://github.com/kunals495/Blockcahin-Based-Crowdfunding-Platform"
            html5={
              <Tooltip title="Ethereum" arrow>
                <IconButton>
                  <SiEthereum className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
           <Project_prop
            title="B3 Shareholder Position Retrieval Tool | Hackathon Project"
            para="A Streamlit-based web application that fetches shareholder data from the Brazilian Stock Exchange (B3)
using an uploaded Excel file containing multiple company ‘Ticker’ symbols and their corresponding ‘CVM
Codes’.
• The Tool fetches data through B3's public API, processes it, and allows users to download the results in a
well-formatted Excel sheet which includes the percentage of shares held by multiple companies.
• It Reduced data entry time from hours to under a minute for 300+ tickers and saved 5+ hours of manual
work."
            img={GPT4}
            link="ok"
            github_link="https://github.com/kunals495/ShareHolder-Position-Retrieval-Tool"
            html5={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="Streamlit" arrow>
                <IconButton>
                  <SiStreamlit className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="Pandas" arrow>
                <IconButton>
                  <SiPandas className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Attirent: Rental Cloth Platform | Freelance Project"
            para="A dynamic web application that allows users to rent clothing for special occasions, with features like
category-wise browsing, secure checkout, and rental duration selection.
• Implemented user authentication, order tracking, and integrated an admin panel for managing inventory
and orders."
            img={WellBeing}
            link="ok"
            github_link="https://github.com/kunals495/Rental-Cloth-Website"
            html5={
              <Tooltip title="PHP" arrow>
                <IconButton>
                  <SiPhp className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="Razorpay" arrow>
                <IconButton>
                  <SiRazorpay className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="HTML5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          
         
         
        </div>
      </div>
    </section>
  );
};
export default Projects;
