const Exp_prop = (props) => {
  return (
    <div
      className="shadow-2xl rounded-3xl border-2 bg-[#e1e1e1] dark:bg-transparent border-[#00040f] h-[490px] max-sm:h-[450px] p-6 hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] flex flex-col justify-between transition-all duration-300 hover:scale-105"
    >
      <div className="HEADER flex items-center">
        <div className="max-w-[80px] pr-3 mr-3">
          <img
            src={props.img}
            alt={props.title}
            className={`w-full h-auto ${
              props.title === "WonderBiz Technologies"
                ? "rounded-full border border-gray-300 dark:border-gray-600"
                : ""
            } transition-transform hover:scale-105`}
          />
        </div>
        <div className="max-w-[125px]">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r inline from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-2xl tracking-wide font-semibold">
            {props.title}
          </h1>
          <p className="text-[#00040f] dark:text-white text-lg my-2">
            {props.subtitle}
          </p>
          <p className="italic text-sm text-slate-700 dark:text-slate-300">
            {props.date}
          </p>
        </div>
      </div>
      <div className="flex-1 mt-5 p-2">
        <p
          className="text-sm text-slate-700 dark:text-slate-300 line-clamp-5"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {props.para.join(" ")}
        </p>
      </div>
    </div>
  );
};

export default Exp_prop;