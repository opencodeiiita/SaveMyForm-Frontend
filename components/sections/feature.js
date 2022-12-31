import React from "react";
import templateCode from "../../assets/images/illustrations/templateCode.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const feature = () => {
  const { ref: text, inView: textVisible } = useInView({ triggerOnce: true });
  const { ref: code, inView: codeVisible } = useInView({ triggerOnce: true });
  const { ref: circle1, inView: circle1Visible } = useInView({
    triggerOnce: true,
  });
  const { ref: circle2, inView: circle2Visible } = useInView({
    triggerOnce: true,
  });
  const { ref: circle3, inView: circle3Visible } = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <div className="relative h-[100vh] w-[100vw]">
        <svg
          className="max-600:hidden"
          width="100vw"
          height="100%"
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

        <div className="absolute top-0 max-600:bg-[#001E2B] flex justify-center h-[100vh] w-full">
          <div
            className={`h-[100vh] w-[60vw] min-w-[0] max-600:min-w-full max-600:w-full`}
          >
            <div className="absolute flex justify-center left-0 top-0 w-[50%] h-[100%] max-md:justify-start max-md:ml-6">
              <div
                ref={text}
                className={`reveal-bottom ${
                  textVisible ? "active-reveal" : ""
                } max-600:absolute max-600:top-[270px] max-600:w-[85vw] z-10 w-[60%] h-[60%] mt-[22vh] font-sans text-[#FFFFFF] max-xl:w-[80%]`}
              >
                <h5
                  className={`max-600:hidden font-semibold text-6xl text-[#FFFFFF] max-lg:text-5xl max-md:text-4xl`}
                >
                  <span className="text-[#01EC64]">JSON</span> Schema
                  <br />
                  Validation
                </h5>
                <h5 className="600:hidden font-semibold text-3xl text-[#FFFFFF]">
                  <span className="text-[#01EC64]">JSON</span> Schema Validation
                </h5>
                <p className="max-600:w-full max-600:mt-4 mt-16 font-normal text-2xl w-[300px] max-md:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                </p>
              </div>
            </div>

            <div
              ref={code}
              className={`reveal-bottom ${
                codeVisible ? "active-reveal" : ""
              } max-600:top-20 max-600:left-6 mt-0 absolute top-[30vh] right-[15%] z-10 h-[20vw] w-[20vw] min-w-[400px] min-h-[400px]  max-xl:right-16 max-800:min-w-[300px] max-800:min-h[300px] max-md:right-8`}
            >
              <Image
                src={templateCode}
                alt={"templateCode"}
                preserveAspectRatio="none"
              />
            </div>
            <div
              ref={circle1}
              className={`reveal-bottom ${
                circle1Visible ? "active-reveal" : ""
              } max-600:hidden absolute right-[30vw] top-[10vh] homeCircleColor w-[18vw] h-[18vw] rounded-full min-w-[300px] min-h-[300px] max-xl:left-[35%] max-xl:top-[5%]`}
            ></div>
            <div
              ref={circle2}
              className={`max-600:right-8 max-600:top-64 absolute right-[5vw] top-[65vh] homeCircleColor w-[14vw] h-[14vw] rounded-full min-w-[200px] min-h-[200px] max-xl:right-[30%] `}
            ></div>
            <div
              ref={circle3}
              className={`reveal-bottom ${
                circle3Visible ? "active-reveal" : ""
              } max-600:top-4 max-600:right-28 max-600:w-[100px] max-600:h-[100px] absolute right-[12vw] top-[22vh] homeCircleColor w-[5vw] h-[5vw] rounded-full min-w-[75px] min-h-[75px] max-xl:top-[15vh]`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default feature;
