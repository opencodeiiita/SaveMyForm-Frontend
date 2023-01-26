import React from "react";
import templateCode from "../../assets/images/illustrations/templateCode.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
const feature = () => {
  const { ref: text, inView: textVisible } = useInView({
    triggerOnce: true,
    rootMargin: "300px",
  });
  const { ref: code, inView: codeVisible } = useInView({
    triggerOnce: true,
    rootMargin: "300px",
  });
  const { ref: circle1, inView: circle1Visible } = useInView({
    triggerOnce: true,
    rootMargin: "300px",
  });
  const { ref: circle2, inView: circle2Visible } = useInView({
    triggerOnce: true,
    rootMargin: "300px",
  });
  const { ref: circle3, inView: circle3Visible } = useInView({
    triggerOnce: true,
    rootMargin: "300px",
  });
  return (
    <>
      <div className="relative min-h-[110vh] h-fit w-[100vw]">
        <svg
          className="max-600:hidden"
          width="100vw"
          height="110vh"
          viewBox="0 0 1728 982"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M467.106 0H1497.77H2186.85V981.501H-80L-68.7965 259.247C-68.7965 259.247 -63.0131 251.419 -54.8447 240.446C-72.5223 254.119 -58.5238 220.888 35.7699 130.611C172.196 -0.00463867 332.513 5.00678 467.106 0Z"
            fill="url(#paint0_linear_554_103)"
          />
          <path
            d="M467.106 0H1497.77H2186.85V981.501H-80L-68.7965 259.247C-68.7965 259.247 -63.0131 251.419 -54.8447 240.446C-72.5223 254.119 -58.5238 220.888 35.7699 130.611C172.196 -0.00463867 332.513 5.00678 467.106 0Z"
            fill="url(#paint1_linear_554_103)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_554_103"
              x1="308.882"
              y1="128.832"
              x2="1723.83"
              y2="1595.72"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0999588" stop-color="#001E2B" />
              <stop offset="0.629293" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_554_103"
              x1="308.882"
              y1="128.832"
              x2="1723.83"
              y2="1595.72"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0999588" stop-color="#001E2B" />
              <stop offset="0.629293" />
            </linearGradient>
          </defs>
        </svg>
        <div
          ref={code}
          className={`reveal-bottom  ${
            codeVisible ? "active-reveal" : "opacity-0"
          } mt-0 absolute max-600:top-4 top-[30vh] right-[15%] z-10 h-[20vw] w-[20vw] min-w-[400px] min-h-[400px] 
           max-xl:right-16 md:min-w-[300px] md:min-h[300px]  600:min-w-[200px] 600:min-h[200px] max-md:right-8 max-600:w-[80vw] max-600:min-h-[80vw] max-600:min-w-[80vw] max-600:h-[80vw] max-600:left-[5vw]`}
        >
          <Image
            src={templateCode}
            alt={"templateCode"}
            preserveAspectRatio="none"
          />
        </div>
        <div className="absolute max-600:relative max-600:min-h-[120vh] max-600:h-fit top-0 max-600:bg-[#001E2B] flex justify-center h-[100vh] w-[100vw]">
          <div
            className={`h-[100vh] w-[60vw] min-w-[0] max-600:min-w-full max-600:w-[100vw]`}
          >
            <div className="max-600:absolute max-600:top-0 max-600:w-full max-600:ml-0 max-600:pl-6 max-600:left-0 absolute flex justify-center left-[100px] top-0 w-[50%] h-[100%] max-md:justify-start max-md:ml-6">
              <div
                ref={text}
                className={`reveal-bottom ${
                  textVisible ? "active-reveal" : "opacity-0"
                } max-600:absolute max-600:top-[60vw] leading-normal max-600:w-[85vw] max-600:h-fit z-10 w-[60%] h-[60%] mt-[22vh] font-sans text-[#FFFFFF] max-xl:w-[80%]`}
              >
                <h5
                  className={`max-600:hidden leading-normal  font-semibold text-6xl text-[#FFFFFF] max-lg:text-5xl max-md:text-4xl`}
                >
                  <span className="text-[#01EC64]">JSON</span> Schema
                  <br />
                  Validation
                </h5>
                <h5 className="600:hidden leading-normal  font-semibold text-3xl text-[#FFFFFF]">
                  <span className="text-[#01EC64]">JSON</span> Schema Validation
                </h5>
                <p className="max-600:w-full leading-normal   max-600:mt-4 mt-16 font-normal text-2xl w-[300px] max-md:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                </p>
              </div>
            </div>
            <div
              ref={circle1}
              className={`reveal-bottom ${
                circle1Visible ? "active-reveal" : "opacity-0"
              } max-600:hidden absolute right-[30vw] top-[10vh] homeCircleColor w-[18vw] h-[18vw] rounded-full min-w-[200px] min-h-[200px] 
                min-[600px]:top-[22%] min-[600px]:right-[25%] md:right-[30%] lg:right-[25%] md:top-[20%] xl:top-[15%] min-[600px]:min-w-[100px] max-md:top-[38vw] max-md:right-[25vw] max-md:min-w-[130px] max-md:min-h-[130px] min-[600px]:min-h-[100px] `}
            ></div>
            <div
              ref={circle2}
              className={`max-600:right-8 max-600:top-64 absolute xl:right-[7vw] top-[65vh] homeCircleColor w-[14vw] h-[14vw] rounded-full max-md:min-w-[100px] max-md:min-h-[100px] min-w-[200px] min-h-[200px] 
               min-[600px]:right-[0%] max-md:top-[40%] sm:right-0  min-[600px]:min-w-[100px] min-[600px]:min-h-[100px] md:top-[47%] `}
            ></div>
            <div
              ref={circle3}
              className={`reveal-bottom ${
                circle3Visible ? "active-reveal" : "opacity-0"
              } max-600:top-4 max-600:right-28 max-600:w-[100px] max-600:h-[100px] absolute right-[12vw] top-[22vh] homeCircleColor w-[5vw] h-[5vw] rounded-full min-w-[75px] min-h-[75px] max-xl:right-[3%] max-xl:top-[26vh]`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default feature;
