import React, { useState, useEffect, useContext } from "react";
import { Typography, Col, Row, Button, Input } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import ProjectItem from "../../components/elements/ProjectItem";
import Avatar from "../../components/elements/Avatar";
import { get, getAccessToken } from "../../components/utils/API/index.js";
import { useRouter } from "next/router";
import { Link } from "@nextui-org/react";
import { AppbarContext } from "../../components/context";

export default function Dashboard() {
  const router = useRouter();
  const { setActive } = useContext(AppbarContext);
  // setActive({ home: false, dashboard: true, documentation: false, faq: false });
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
  const [userData, setUserData] = useState(null);
  const [showPage, setShowPage] = useState(false);

  async function getUserDashboard() {
    const accessToken = getAccessToken();
    if (!accessToken) {
      setActive({
        home: false,
        dashboard: false,
        documentation: false,
        faq: false,
      });
      router.push("/signin");
    } else {
      const data = await get("/user/dashboard");
      data?.data?.data?.projects.forEach((date) => {
        let iostr = date?.date_created;
        let tempDate = new Date(iostr).toDateString().slice(4);
        date.date_created = tempDate.slice(0, 6) + "," + tempDate.slice(6);
      });

      setUserData(data?.data?.data);
    }
  }
  // let dashboardData;
  useEffect(() => {
    //editing navbar
    setActive({
      home: false,
      dashboard: true,
      documentation: false,
      faq: false,
    });

    getUserDashboard();
  }, []);

  return (
    <>
      <div
        className={`${
          size.width <= 800 ? "h-[15rem]" : "h-[10rem]"
        } mt-8  w-[90%] rounded-lg bg-[#FFFEFE] mx-auto shadow-[0_4px_4px_0px_#00000040] border-[#E7EEEC] border-2`}
      >
        <Row>
          <Col flex="none">
            <div className="h-24 w-24 bg-[#B1FE04] my-7 rounded-full mx-8 ">
              <Avatar seed={userData?.name} />
            </div>
          </Col>
          <Col flex="none">
            <Col className="justify-start">
              <Typography.Title
                level={3}
                className="mt-10 mb-0 text-4xl font-inter font-medium text-left"
              >
                {userData?.name}
              </Typography.Title>
            </Col>
            <Col className="justify-start">
              <Typography.Title
                level={5}
                className="text-2xl font-light text-[#001E2B] text-left"
              >
                {userData?.email}
              </Typography.Title>
            </Col>
          </Col>
          {size.width > 800 && (
            <>
              <Col flex="auto">
                {/* <Link href="/settings" className="absolute right-0"> */}
                <Button
                  className="absolute right-0 mx-4 h-14 w-[12rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-xl my-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300"
                  onClick={() => router.push("/settings")}
                >
                  Settings
                </Button>
                {/* </Link> */}
              </Col>
            </>
          )}
        </Row>
        {size.width <= 800 && (
          <>
            <Row>
              <Col flex="auto">
                {/* <Link href="/settings" className="absolute"> */}
                <Button
                  className="absolute ml-8  h-14 w-[12rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-xl  rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300"
                  onClick={() => router.push("/settings")}
                >
                  Settings
                </Button>
                {/* </Link> */}
              </Col>
            </Row>
          </>
        )}
      </div>
      <div className="w-[90%] mb-16 min-h-[15rem] pb-4 rounded-lg bg-[#FFFEFE] mx-auto shadow-[0_4px_4px_0px_#00000040] mt-8 border-[#E7EEEC] border-2">
        <Row>
          <Col flex="4" className="mt-6 mb-0">
            <Typography.Text
              level={3}
              className="mb-0 text-4xl font-inter font-medium ml-8"
            >
              Projects ({userData?.project_count ? userData?.project_count : 0})
            </Typography.Text>

            <a className="mx-3 mt-8 text-[#006DFB]">Docs</a>
          </Col>
          {size.width > 800 && (
            <>
              <Col flex="1">
                <Button
                  onClick={(e) => getUserDashboard()}
                  className="absolute right-0 h-12 w-12  border-[#00694B] border-2 text-[#00694B] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300"
                >
                  <ReloadOutlined className="mb-[5px] ml-[-3px]" />
                </Button>
              </Col>
              <Col flex="1">
                {/* <Link href="dashboard/project/newproject"> */}
                <Button
                  type="primary"
                  className="ml-5 mr-8 h-12 w-[16.25rem]  border-[#00694B] border-2 text-[#FFFEFE] font-medium font-inter text-xl mt-4 rounded-lg hover:border-[#00593B] shadow-md hover:shadow-green-300"
                  onClick={() => router.push("dashboard/project/newproject")}
                >
                  Create Project
                </Button>
                {/* </Link> */}
              </Col>{" "}
            </>
          )}
        </Row>
        {size.width <= 800 && (
          <>
            <Row>
              <Col>
                <Button
                  className="ml-8 h-12 w-12  border-[#00694B] border-2 text-[#00694B] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300 shadow-md hover:shadow-green-300"
                  onClick={(e) => getUserDashboard()}
                >
                  <ReloadOutlined className="mb-[5px] ml-[-3px]" />
                </Button>
              </Col>
              <Col>
                <Button
                  type="primary"
                  className="ml-5 mr-8 h-12 w-[16.25rem]  border-[#00694B] border-2 text-[#FFFEFE] font-medium font-inter text-xl mt-4 rounded-lg hover:border-[#00593B] shadow-md hover:shadow-green-300"
                  onClick={() => router.push("dashboard/project/newproject")}
                >
                  Create Project
                </Button>
              </Col>
            </Row>
          </>
        )}
        <Row span={22}>
          <Input
            className="w-[95%] mx-auto mt-5 border-2 border-[#C2C8CB] text-[#C2CBCB] rounded-lg font-inter font-medium text-lg"
            size="large"
            placeholder="Find products by name"
            prefix={<SearchOutlined className="mr-4" />}
          />
        </Row>
        <div className="border-[#C@CBCB] border-[1px]mt-8"></div>
        <div className="width-[100%] overflow-x-auto">
          <div className="min-w-[768px]">
            <Row className="mt-3 mb-2">
              <Col
                span={6}
                className="pl-10 pr-8 font-inter font-semibold text-base"
              >
                Name
              </Col>
              <Col
                span={6}
                className="px-12 font-inter font-semibold text-base"
              >
                Number of Forms
              </Col>
              <Col span={6} className="px-8 font-inter font-semibold text-base">
                Allowed Origins
              </Col>
              <Col span={6} className="px-8 font-inter font-semibold text-base">
                Date Created
              </Col>
              {/* <Col span={1}></Col> */}
            </Row>
            <div className="border-[#C@CBCB] border-[1px]"></div>
            {userData &&
              userData.projects &&
              userData.projects.length > 0 &&
              userData.projects.map((project, i) => (
                <ProjectItem
                  key={i}
                  id={project?.id}
                  name={project?.name}
                  numberOfForms={project?.form_count}
                  allowedOrigin={project?.allowed_origins?.join(" ")}
                  dateCreated={project?.date_created}
                  baseurl={"/dashboard/project"}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
