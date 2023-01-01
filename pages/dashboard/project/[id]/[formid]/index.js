import { Row, Col, Typography, Button } from "antd";
import { useState, useEffect } from "react";

export default function Form() {
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
  return (
    <>
      <div
        className={`${
          size.width <= 800 ? "h-[18rem]" : "h-[11rem]"
        }   w-[90%] rounded-lg bg-[#FFFEFE] mx-auto shadow-[0_4px_4px_0px_#00000040] border-[#E7EEEC] border-2`}
      >
        <Row>
          <Col flex="none" className="pl-8">
            <Col className="justify-start">
              <Typography.Title
                level={3}
                className="mt-4 mb-2 text-4xl font-inter font-medium text-left"
              >
                Name
              </Typography.Title>
            </Col>
            <Col className="justify-start">
              <Typography.Title
                level={5}
                className="py-2 text-2xl font-normal text-[#001E2B] text-left"
              >
                Project Name
              </Typography.Title>
            </Col>
            {/* <Col className="justify-start">
              <Typography.Title
                level={5}
                className="mb-0 text-2xl font-normal text-[#001E2B] text-left "
              >
                Collaborators:{" "}
                <span className="hover:underline text-xl font-normal text-[#006DFB] text-left">
                  pranavt150@gmail.com
                </span>
              </Typography.Title>
            </Col> */}
            <Col className="justify-start">
              {size.width > 800 ? (
                <Typography.Title
                  level={5}
                  className="text-2xl font-normal text-[#001E2B] text-left"
                >
                  reCAPTCHA:{" "}
                  <span className="hover:underline text-xl font-medium text-[#00694B] mr-8 text-left">
                    Available
                  </span>
                  File Support:{" "}
                  <span className="hover:underline text-xl font-medium text-[#00694B] text-left">
                    Available
                  </span>
                </Typography.Title>
              ) : (
                <>
                  <Typography.Title
                    level={5}
                    className="text-2xl font-normal text-[#001E2B] text-left mt-0"
                  >
                    reCAPTCHA:{" "}
                    <span className="hover:underline text-xl font-medium text-[#00694B] text-left">
                      Available
                    </span>
                  </Typography.Title>
                  <Typography.Title
                    level={5}
                    className="text-2xl font-normal text-[#001E2B] text-left mt-0"
                  >
                    File Support:{" "}
                    <span className="hover:underline text-xl font-medium text-[#00694B] text-left">
                      Available
                    </span>
                  </Typography.Title>
                </>
              )}
            </Col>
          </Col>
          {size.width > 800 && (
            <>
              <Col flex="auto">
                <Button className="absolute right-0 mx-4 h-14 w-[10rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-lg my-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                  Downlaod CSV
                </Button>
                <Button className="absolute right-[11rem] mx-4 h-14 w-[10rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-lg my-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                  Downlaod PDF
                </Button>
              </Col>
            </>
          )}
        </Row>
        {size.width <= 800 && (
          <>
            <Row>
              <Col flex="auto">
                <Button className=" ml-8  h-10 w-[10rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-md  rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                  Download CSV
                </Button>

                <Button className=" mx-4 h-10 w-[10rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-md my-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                  Download PDF
                </Button>
              </Col>
            </Row>
          </>
        )}
      </div>
    </>
  );
}
