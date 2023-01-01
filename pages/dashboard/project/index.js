import React, { useState, useEffect } from "react";
import { Typography, Col, Row, Button, Input } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import ProjectItem from "../../../components/elements/ProjectItem";

export default function Project() {
  const [formNum, setFormNum] = useState(2);
  //Function to get screen size as the component is rendered on server side but we need the screen size of the user
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
                className=" mb-2 text-4xl font-inter font-medium text-left"
              >
                Name
              </Typography.Title>
            </Col>
            <Col className="justify-start">
              <Typography.Title
                level={5}
                className=" mb-0 text-2xl font-normal text-[#001E2B] text-left"
              >
                Owner Name (Owner Email)
              </Typography.Title>
            </Col>
            <Col className="justify-start">
              <Typography.Title
                level={5}
                className="mb-0 text-2xl font-normal text-[#001E2B] text-left "
              >
                Collaborators: <span className="hover:underline text-xl font-normal text-[#006DFB] text-left">pranavt150@gmail.com</span>
              </Typography.Title>
            </Col>
            <Col className="justify-start">
              {size.width > 800 ? (
                <Typography.Title
                level={5}
                className="text-2xl font-normal text-[#001E2B] text-left"
              >
                Allowed Origins: <span className="hover:underline text-xl font-medium text-[#970606] text-left mr-4">Public</span>
                reCAPTCHA: <span className="hover:underline text-xl font-medium text-[#00694B] text-left">Available</span>
              </Typography.Title>
              ) : (
                <>
                  <Typography.Title
                    level={5}
                    className="text-2xl font-normal text-[#001E2B] text-left mb-0"
                  >
                    Allowed Origins: <span className="hover:underline text-xl font-medium text-[#970606] text-left mr-4">Public</span>
                  </Typography.Title>
                  <Typography.Title
                    level={5}
                    className="text-2xl font-normal text-[#001E2B] text-left mt-0"
                  >
                    reCAPTCHA: <span className="hover:underline text-xl font-medium text-[#00694B] text-left">Available</span>
                  </Typography.Title>
              </>
              )}
              
            </Col>
          </Col>
          {size.width > 800 && (
            <>
            
              <Col flex="auto">
                <Button className="absolute right-0 mx-4 h-14 w-[12rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-xl my-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                  Settings
                </Button>
              </Col>
            </>
          )}
      
        </Row>
        {size.width <= 800 && (
          <>
            <Row>
              <Col flex="auto">
                <Button className="absolute ml-8  h-14 w-[12rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-xl  rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                  Settings
                </Button>
              </Col>
            </Row>
          </>
        )}
      </div>
      <div className="w-[90%] h-[31.25rem] rounded-lg bg-[#FFFEFE] mx-auto shadow-[0_4px_4px_0px_#00000040] my-24 border-[#E7EEEC] border-2">
        <Row>
          <Col flex="4" className="mt-3 mb-0">
            <Typography.Text
              level={3}
              className="mb-0 text-4xl font-inter font-medium ml-8"
            >
              Forms {`(${formNum})`}
            </Typography.Text>

            <a className="mx-5 mt-8 text-[#006DFB]">Docs</a>
          </Col>
          {size.width > 800 && (
            <>
              <Col flex="1">
                <Button className="absolute right-0 h-12 w-12  border-[#00694B] border-2 text-[#00694B] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                  <ReloadOutlined className="mb-[5px] ml-[-3px]" />
                </Button>
              </Col>
              <Col flex="1">
                <Button
                  type="primary"
                  className="ml-5 mr-8 h-12 w-[16.25rem]  border-[#00694B] border-2 text-[#FFFEFE] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300"
                >
                  Create Form
                </Button>
              </Col>{" "}
            </>
          )}
        </Row>
        {size.width <= 800 && (
          <>
            <Row>
              <Col>
                <Button className="ml-8 h-12 w-12  border-[#00694B] border-2 text-[#00694B] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                  <ReloadOutlined className="mb-[5px] ml-[-3px]" />
                </Button>
              </Col>
              <Col>
                <Button
                  type="primary"
                  className="ml-5 mr-6 h-12 w-[16.25rem]  border-[#00694B] border-2 text-[#FFFEFE] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300"
                >
                  Create Form
                </Button>
              </Col>
            </Row>
          </>
        )}
        <Row span={22}>
          <Input
            className="w-[95%] mx-auto mt-5 border-2 border-[#C2C8CB] text-[#C2CBCB] rounded-lg font-inter font-medium text-lg"
            size="large"
            placeholder="Find forms by name"
            prefix={<SearchOutlined className="mr-4" />}
          />
        </Row>
        <div className="border-[#C@CBCB] border-[1px] mt-8"></div>
        <div className="width-[100%] overflow-x-auto">
          <div className="min-w-[768px]">
            <Row className="mt-3 mb-2">
              <Col
                span={6}
                className="pl-10 pr-6 font-inter font-semibold text-base"
              >
                Name
              </Col>
              <Col span={6} className="px-6 font-inter font-semibold text-base">
                Number of Submissions
              </Col>
              <Col span={6} className="px-6 font-inter font-semibold text-base">
                Last Submission
              </Col>
              <Col span={6} className="px-6 font-inter font-semibold text-base">
                Date Created
              </Col>
            </Row>
            <div className="border-[#C@CBCB] border-[1px]"></div>

            {/* ProjectItem */}
            <ProjectItem
              name="Form 1"
              numberOfForms="5"
              allowedOrigin="January 1, 1990, 00:00 UTC"
              dateCreated="January 1, 1970, 00:00 UTC"
            />
            <ProjectItem
              name="Form 2"
              numberOfForms="8"
              allowedOrigin="January 1, 1990, 00:00 UTC"
              dateCreated="January 1, 1970, 00:00 UTC"
            />
          </div>
        </div>
      </div>
    </>
  );
}
