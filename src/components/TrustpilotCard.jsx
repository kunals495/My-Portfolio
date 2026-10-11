import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { TRUSTPILOT, profileUrl, evaluateUrl } from "../constants/trustpilot";

const GREEN = "#00b67a"; // Trustpilot brand green
const EMPTY = "#dcdce6";

// Ek star box: rating ke hisaab se poora / aadha / khaali bharta hai
const StarBox = ({ fill }) => (
  <span
    className="flex items-center justify-center w-9 h-9 max-sm:w-8 max-sm:h-8 text-white"
    style={{
      background: `linear-gradient(90deg, ${GREEN} ${fill}%, ${EMPTY} ${fill}%)`,
    }}
  >
    <FaStar className="text-lg" />
  </span>
);

const TrustpilotCard = () => {
  const { rating, reviewCount, trustBox } = TRUSTPILOT;
  const widgetRef = useRef(null);
  const useWidget = Boolean(trustBox.businessUnitId && trustBox.templateId);
  const hasReviews = reviewCount > 0;

  // Official TrustBox widget load karna (sirf tab jab IDs bhari ho)
  useEffect(() => {
    if (!useWidget) return;
    const init = () =>
      window.Trustpilot &&
      widgetRef.current &&
      window.Trustpilot.loadFromElement(widgetRef.current, true);

    if (window.Trustpilot) {
      init();
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);
  }, [useWidget]);

  const starFill = (i) => {
    if (rating >= i) return 100;
    if (rating > i - 1) return Math.round((rating - (i - 1)) * 100);
    return 0;
  };

  return (
    <div className="w-full max-w-[420px] flex flex-col items-center gap-5 font-['Poppins']">
      <div className="w-full shadow-2xl rounded-3xl border-2 border-[#00040f] bg-[#e1e1e1] dark:bg-transparent hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
        {/* Heading */}
        <p className="text-[#00040f] dark:text-white text-lg font-medium flex items-center gap-2">
          <FaStar style={{ color: GREEN }} />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 font-semibold text-2xl tracking-wide">
            Trustpilot
          </span>
        </p>

        {useWidget ? (
          /* Official live widget */
          <div
            ref={widgetRef}
            className="trustpilot-widget w-full mt-4"
            data-locale={trustBox.locale}
            data-template-id={trustBox.templateId}
            data-businessunit-id={trustBox.businessUnitId}
            data-style-height={trustBox.height}
            data-style-width="100%"
            data-theme="dark"
          >
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">
              Trustpilot
            </a>
          </div>
        ) : (
          /* Custom themed rating block */
          <>
            <div
              className="flex gap-1 mt-4"
              role="img"
              aria-label={`Rated ${rating} out of 5 on Trustpilot`}
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <StarBox key={i} fill={starFill(i)} />
              ))}
            </div>

            {hasReviews ? (
              <>
                <p className="text-[#00040f] dark:text-white text-4xl font-semibold mt-4">
                  {rating.toFixed(1)}
                  <span className="text-base font-normal text-slate-700 dark:text-slate-300">
                    {" "}
                    / 5
                  </span>
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                  Based on {reviewCount} client review
                  {reviewCount > 1 ? "s" : ""}
                </p>
              </>
            ) : (
              <>
                <p className="text-[#00040f] dark:text-white text-xl font-semibold mt-4">
                  No reviews yet
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                  Worked with me?{" "}
                  <a
                    href={evaluateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-cyan-500"
                  >
                    Be the first to review
                  </a>
                </p>
              </>
            )}
          </>
        )}
      </div>

      {/* Show all client reviews */}
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 px-6 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600 font-medium text-[13px] text-[#e1e1e1] dark:text-black outline-none rounded transition-transform duration-300 hover:scale-105"
      >
        Show all client reviews
      </a>
    </div>
  );
};

export default TrustpilotCard;