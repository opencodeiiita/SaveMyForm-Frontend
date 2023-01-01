import { Button, GrowIn } from "antd";
import { useState, useEffect } from "react";
import Image from "next/image";
import heroImage from "../../../assets/images/illustrations/heroSection.png";
const HeroSection = () => {
  const handleClick = () => {
    console.log("button kyu dabaya?");
  };
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      //To make the button appear on reload
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }
  const size = useWindowSize();
  if (size.width < 600) {
    return (
      <>
        <div className="bg-[#00694B] h-fit w-full">
          <div className=" w-[80%]">
            <Image
              className="object-contain z-10 ml-6"
              src={heroImage}
              alt={"heroImage"}
              priority={true}
            />
          </div>
          <div className="">
            <div className=" ml-8 max-w-md text-[#FFFEFE] py-8">
              <div className="font-inter font-bold text-3xl">
                Save your form data now Easily and Securely.
              </div>
              <div className="mt-5 font-inter font-medium text-lg">
                No need to create a form Backend for collecting form responses
                on your application.
              </div>
              <Button
                type="primary"
                className="bg-[#01EC64] text-[#00694B] mt-8 rounded-lg font-medium text-xl pb-10 pt-2 pl-8 pr-8 max-1100:mt-8"
                onClick={handleClick}
              >
                Start Now
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-[40vw] h-[100vh] inline-block">
        <div className="h-[10vh]"></div>
        <div className="mt-0 absolute z-10 h-[30vw] w-[30vw] top-[calc(50vh-15vw)] left-[calc(8vw-30px)] max-xl:top-[calc(10vw-3vh)] max-xl:w-[448px] max-xl:h-[448px] ">
          <Image src={heroImage} alt={"heroImage"} />
        </div>
        <svg
          className=" z-0 h-[110vh] w-[40vw] absolute top-[10vh]"
          width="100%"
          height="100%"
          viewBox="0 0 782 960"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M455.672 627.804C369.814 810.739 144.776 741.966 3.16007e-06 958L0 0H782C709.038 41.4991 555.911 166.991 527.103 336.967C498.295 506.943 467.479 601.682 455.672 627.804Z"
            fill="#011E2B"
          />
        </svg>
      </div>

      <div className="absolute left-[40vw] inline-block w-[60vw] h-[100vh]">
        <div className="z-0 absolute right-0 bottom-[calc(23vh-3px)] w-[15vw] h-[55vh]">
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 258 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9272 403.601C18.2493 427.678 5.94327 464.566 0 480C34.8912 476.082 143.973 373.824 143.973 373.824C143.973 373.824 231.149 283.2 258 262.751V0C164.184 59.6585 96.5177 146.281 69.2197 189.839C18.2833 271.116 22.0246 373.505 19.9272 403.601Z"
              fill="#00694B"
            />
          </svg>
        </div>
        <div className="z-10 absolute right-0 -bottom-[5px]  inline-block w-[40vw] h-[60vh]">
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 675 434"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M392.974 287.71C258.344 372.18 108.189 396.71 0 434H686V0.0493975H679.7C652.047 -3.63856 532.542 200.142 392.974 287.71Z"
              fill="#01EC64"
            />
          </svg>
        </div>
        <div className=" absolute top-[calc(54vh-10vw)] right-[15vw] h-[30vw] w-[50vw] xl:w-[40vw] max-xl:top-[62vh] max-xl:right-[15vw] max-lg:right-[22vw] ">
          <div className="font-inter font-bold text-5xl max-2xl:text-4xl max-xl:text-3xl max-sm:text-xl">
            Save your form data now <br />{" "}
            <span className="text-[#00694B]">Easily</span> and{" "}
            <span className="text-[#00694B]">Securely.</span>
          </div>
          <div className="mt-5 font-inter font-medium text-xl text-[#001E2B] max-xl:text-lg max-sm:text-xs">
            No need to create a <span className="#00694B">Backend </span>for
            <br />
            collecting form responses on your application.
          </div>
          <Button
            type="primary"
            className="mt-8 rounded-lg font-medium text-xl pb-10 pt-2 pl-8 pr-8"
            onClick={handleClick}
          >
            Start Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
