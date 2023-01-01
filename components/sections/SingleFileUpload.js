import React from "react";
import { useInView } from "react-intersection-observer";
const SingleFileUpload = () => {
  const { ref: docImg, inView: docImgVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: text, inView: textVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <div className="max-600:h-[80vh] h-[100vh] relative bg-[#01EC64] max-600:bg-[#01694b]">
        <svg
          className="absolute -bottom-[210px] left-0 600:hidden"
          width="111"
          height="260"
          viewBox="0 0 111 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-40 3.06388C-15.7672 0.172317 47.2144 0.415924 91.7985 40.8607C151.056 94.6169 47.8532 184.829 -40 258.5"
            stroke="#01EC64"
            stroke-width="3"
          />
        </svg>

        <svg
          className="absolute bottom-0 -right-8 max-600:hidden"
          width="10vw"
          height="15vw"
          viewBox="0 0 168 410"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M186.744 3.51516C158.711 -0.860423 85.8514 -0.491787 34.2749 60.7103C-34.2766 142.056 12.0326 297.507 113.664 408.987"
            stroke="#01EC64"
            stroke-width="3"
          />
        </svg>

        <svg
          className="absolute top-0 right-0 max-600:h-[30vh] max-600:w-[30vw]"
          width="25vw"
          height="20vw"
          preserveAspectRatio="none"
          viewBox="0 0 288 411"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M89.8348 1.1963C59.2167 33.1675 -8.65659 124.986 4.04639 235.269C20.9302 381.848 219.267 439.178 425.587 394.323"
            stroke="#01EC64"
            stroke-width="3"
          />
        </svg>

        <svg
          className="max-600:hidden"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1728 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H1628C1683.23 0 1728 44.7715 1728 100V924C1728 979.228 1683.23 1024 1628 1024H0V0Z"
            fill="url(#paint0_linear_837_143)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_837_143"
              x1="0"
              y1="0"
              x2="1307.99"
              y2="1185.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.348527" stop-color="#001E2B" />
              <stop offset="0.866562" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute left-0 top-0 w-[28vw] h-[100vh] max-600:hidden">
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 534 942"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="-62.7374"
              cy="470.863"
              rx="596.263"
              ry="470.863"
              fill="#01EC64"
            />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-[35vw] h-[100vh] max-600:hidden">
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 659 944"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5.83374C103.454 -4.58614 372.335 -3.70828 562.673 142.036C815.656 335.749 522.816 677.049 147.754 942.526"
              stroke="#01EC64"
              stroke-width="3"
            />
          </svg>
        </div>
        <svg
          ref={docImg}
          className={`reveal-bottom ${
            docImgVisible ? "active-reveal" : ""
          } max-600:hidden max-800:-left-8 max-800:h-[300px] max-800:w-[300px] absolute top-[25vh] left-[10vw] z-10 h-[25vw] w-[25vw]`}
          width="100%"
          height="100%"
          viewBox="0 0 473 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M229.915 41.3936L425.569 69.241C439.743 74.4688 443.043 84.9699 442.921 89.5671L385.339 511.83C383.432 523.189 372.545 525.856 367.339 525.77L45.7824 480.003C32.1503 472.405 29.5833 464.338 30.0038 461.255L74.7323 133.252L229.915 41.3936Z"
            fill="#116148"
          />
          <g filter="url(#filter0_d_837_146)">
            <path
              d="M216.07 135.884L228.942 41.4951L74.3822 133.516L194.936 151.602C209.164 151.254 214.954 140.978 216.07 135.884Z"
              fill="#12AB51"
            />
          </g>
          <path
            d="M296.108 337.042L293.021 367.327L160.195 339.044L163.282 308.759L141.144 304.045L138.058 334.33C136.926 345.435 145.962 356.641 158.138 359.234L290.964 387.517C303.14 390.11 314.027 383.146 315.159 372.041L318.246 341.756L296.108 337.042ZM180.524 250.546L194.68 268.103L226.003 248.163L217.597 330.639L239.735 335.353L248.14 252.876L274.154 285.026L291.212 274.115L241.012 211.856L180.524 250.546Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_837_146"
              x="74.3822"
              y="41.4951"
              width="162.56"
              height="118.106"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_837_146"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_837_146"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className=" max-600:w-[90vw] max-600:top-[50vh] max-600:translate-y-[-40%] max-600:left-0 max-600:mx-8 absolute top-0 left-[50vw] inline-block w-[60vw] h-[100vh]">
          <div
            ref={text}
            className={`reveal-bottom ${
              textVisible ? "active-reveal" : ""
            } max-600:pr-8 max-600:top-0 max-600:w-[90vw] absolute top-[calc(40vh-10vw)] left-0 h-[400px] w-[52vw] max-800:w-[54vw]`}
          >
            <div className=" max-600:w-[60vw] max-600:text-3xl text-[#FFFFFF] max-800:text-3xl text-[52px] w-[40vw] font-bold font-sans max-1140:text-4xl">
              Single file upload allowed!
            </div>
            <div className="text-[#FFFFFF] max-600:text-xl max-800:text-base max-800:w-[60vw]  font-medium font-sans text-xl w-[380px] max-1140:text-lg max-1140:mt-4">
              We save your form easily and securely that no other platform can
            </div>
            <div className="max-600:mt-16 max-600:w-[80vw] max-600:text-lg max-800:text-base text-[#FFFFFF] w-[75%] font-medium font-sans text-xl max-1140:text-lg mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleFileUpload;
