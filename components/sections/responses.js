import React from "react";
import { useInView } from "react-intersection-observer";
const responses = () => {
  const { ref: circle1, inView: circle1Visible } = useInView({
    triggerOnce: true,
  });
  const { ref: circle2, inView: circle2Visible } = useInView({
    triggerOnce: true,
  });
  const { ref: docImg, inView: docImgVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: text, inView: textVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <div className=" max-600:h-[80vh] h-[100vh] relative max-600:bg-[#001E2B]">
        <svg
          className=" z-0 h-[100vh] w-[48.05vw] max-600:hidden -mt-[5px]"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 831 1006"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M509.514 650.312C413.511 847.371 177.188 772.116 0 1006V0.000106758L831 0C831 150 621.596 153.921 589.385 337.02C557.173 520.119 522.716 622.173 509.514 650.312Z"
            fill="url(#paint0_linear_759_98)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_759_98"
              x1="-395.268"
              y1="-84.2207"
              x2="634.578"
              y2="826.778"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#001E2B" />
              <stop offset="0.772793" />
            </linearGradient>
          </defs>
        </svg>

        <div
          ref={circle1}
          className={`reveal-bottom ${
            circle1Visible ? "active-reveal" : ""
          } max-600:float-right max-600:top-[18vh] max-600:mt-4 max-600:ml-4 max-600:right-8 max-600:left-auto max-600:w-[130px] max-600:h-[130px] absolute left-[10vw] top-[-5vw] homeCircleColor rounded-full w-[10vw] h-[10vw]`}
        ></div>
        <div
          ref={circle2}
          className={`reveal-bottom ${
            circle2Visible ? "active-reveal" : ""
          } max-800:hidden absolute left-[5vw] top-[23vh] homeCircleColor2 w-[5vw] h-[5vw] rounded-full`}
        ></div>

        <svg
          ref={docImg}
          className={`reveal-bottom ${
            docImgVisible ? "active-reveal" : ""
          } max-600:hidden max-800:-left-8 max-800:h-[300px] max-800:w-[300px] absolute top-[12vh] left-[10vw] z-10 h-[25vw] w-[25vw]`}
          width="100%"
          height="100%"
          viewBox="0 0 385 489"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M115.137 39.8581L274.986 3.90716C287.56 4.14263 293.36 12.4103 294.689 16.5148L380.841 407.889C382.882 418.528 375.292 424.259 371.242 425.795L108.53 484.881C95.6422 482.38 91.1619 476.039 90.5328 473.181L23.6115 169.171L115.137 39.8581Z"
            fill="#116148"
          />
          <g filter="url(#filter0_d_759_106)">
            <path
              d="M133.675 127.734L114.417 40.249L23.4231 169.514L122.202 148.182C133.092 143.469 134.388 132.586 133.675 127.734Z"
              fill="#12AB51"
            />
          </g>
          <g clip-path="url(#clip0_759_106)">
            <path
              d="M167.63 320.421C155.96 323.003 145.047 320.851 134.891 313.964C124.73 307.079 118.286 297.342 115.56 284.752C113.223 273.961 114.155 263.679 118.355 253.907C122.555 244.134 129.273 236.994 138.51 232.486C138.533 222.043 141.931 211.36 148.705 200.438C155.478 189.517 163.802 182.963 173.676 180.779C177.908 179.842 181.884 180.665 185.604 183.246C189.319 185.834 191.671 189.41 192.66 193.976L203.535 244.195L208.887 235.4C209.968 233.566 211.568 232.415 213.686 231.946C215.8 231.478 217.806 231.904 219.704 233.224C221.444 234.434 222.569 236.215 223.078 238.567C223.587 240.918 223.301 243.011 222.22 244.845L206.888 270.853C206.298 271.853 205.592 272.624 204.768 273.166C203.946 273.713 203.022 274.101 201.996 274.328C200.97 274.554 199.971 274.593 198.998 274.443C198.026 274.298 197.065 273.896 196.116 273.236L171.437 256.08C169.697 254.871 168.548 253.13 167.992 250.858C167.432 248.593 167.741 246.46 168.92 244.459C170.002 242.626 171.591 241.439 173.689 240.899C175.793 240.364 177.779 240.687 179.648 241.869L188.146 247.6L177.271 197.38C167.944 201.473 161.479 208.23 157.874 217.65C154.271 227.076 153.413 236.147 155.301 244.863L151.453 245.714C144.015 247.36 138.282 251.6 134.252 258.436C130.222 265.271 129.076 272.701 130.814 280.725C132.551 288.749 136.663 295.016 143.149 299.524C149.635 304.033 156.597 305.465 164.035 303.82L256.369 283.392C261.755 282.2 265.873 279.187 268.724 274.352C271.574 269.517 272.37 264.195 271.112 258.384C269.853 252.574 266.93 248.074 262.343 244.885C257.755 241.695 252.768 240.696 247.382 241.888L235.84 244.442L232.245 227.84C230.807 221.199 228.056 215.319 223.991 210.199C219.927 205.085 215.152 201.032 209.667 198.042L205.488 178.742C216.026 181.485 225.079 186.986 232.646 195.245C240.212 203.499 245.208 213.229 247.634 224.435C256.723 223.585 264.957 226.074 272.336 231.905C279.712 237.742 284.434 245.434 286.501 254.98C288.747 265.355 287.292 274.921 282.136 283.676C276.973 292.426 269.582 297.865 259.964 299.993L167.63 320.421Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_759_106"
              x="23.4231"
              y="40.249"
              width="118.412"
              height="137.265"
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
                result="effect1_dropShadow_759_106"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_759_106"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_759_106">
              <rect
                width="189.133"
                height="203.835"
                fill="white"
                transform="matrix(0.97639 -0.216014 0.211634 0.977349 81.6676 165.471)"
              />
            </clipPath>
          </defs>
        </svg>

        <div className=" max-600:w-[90vw] max-600:top-[50vh] max-600:translate-y-[-40%] max-600:left-0 max-600:mx-8 absolute top-0 left-[40vw] inline-block w-[60vw] h-[100vh]">
          <div
            ref={text}
            className={`reveal-bottom ${
              textVisible ? "active-reveal" : ""
            } max-600:pr-8 max-600:top-0 max-600:w-[90vw] absolute top-[calc(46vh-10vw)] left-0 h-[400px] w-[50vw] max-800:w-[54vw]`}
          >
            <div className=" max-600:text-2xl max-600:text-[#FFFFFF] max-800:text-3xl text-[52px] font-bold font-sans max-1140:text-4xl">
              Save{" "}
              <span className="text-[#116148] max-600:text-[#01EC64]">
                1000
              </span>{" "}
              form responses for{" "}
              <span className="text-[#116148] max-600:text-[#01EC64]">30</span>{" "}
              days !
            </div>
            <div className="max-600:text-[#FFFFFF] max-600:text-lg max-800:text-base max-800:w-[50vw]  font-medium font-sans text-xl w-[380px] max-1140:text-lg max-1140:mt-4">
              We save your form easily and securely that no other platform can
            </div>
            <div className="max-600:mt-16 max-600:text-[#FFFFFF] max-600:w-[80vw] max-600:text-lg max-800:text-base text-[#116148] w-[75%] font-medium font-sans text-xl max-1140:text-lg max-1140:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute{" "}
            </div>
          </div>
          <div className="max-600:hidden z-0 absolute right-0 bottom-[calc(23vh-3px)] w-[10vw] h-[55vh]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 184 622"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8336 523C14.5004 554.2 4.72236 602 0 622C27.7236 616.922 114.397 484.414 114.397 484.414C114.397 484.414 183.665 366.98 205 340.481V0C130.456 77.3074 76.6904 189.555 55.0001 246C14.5275 351.322 17.5001 484 15.8336 523Z"
                fill="#00694B"
              />
            </svg>
          </div>
          <div className="max-600:hidden z-10 absolute right-0 bottom-0 inline-block w-[35vw] h-[57vh]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 510 486"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M310.484 322.183C204.115 416.773 85.4788 444.243 0 486H542V0.0553161H537.023C515.174 -4.07452 420.755 224.122 310.484 322.183Z"
                fill="#01EC64"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default responses;
