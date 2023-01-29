import React, { useState, useEffect } from "react";
import { Typography, Col, Row, Button, Input, Modal } from "antd";
import {
  SearchOutlined,
  ReloadOutlined,
  EditOutlined,
} from "@ant-design/icons";
import ProjectItem from "../../../../components/elements/ProjectItem";
import { AiOutlineDelete } from "react-icons/ai";
import { get, remove } from "../../../../components/utils/API";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRouter } from "next/router";

export default function Project() {
  //states and functions for modal.
  const router = useRouter();
  const [id, setId] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteProjectPassword, setDeleteProjectPassword] = useState("");
  const [projectData, setProjectData] = useState({});
  //fetching data:-

  async function getProject() {
    const { data } = await get(`/project/dashboard/${router.query.id}`);
    // console.log(data);
    setProjectData(data?.data);
    data?.data?.forms.forEach((form) => {
      let iostr = form?.date_created;
      let iostr2 = form?.last_updated;
      let tempDate = new Date(iostr).toDateString().slice(4);
      let tempDate2 = new Date(iostr2).toDateString().slice(4);
      form.date_created = tempDate.slice(0, 6) + "," + tempDate.slice(6);
      form.last_updated = tempDate2.slice(0, 6) + "," + tempDate2.slice(6);
    });
  }
  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
      getProject();
    }
  }, [router.isReady]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  //need to fix some issues in this.
  const handleOk = async () => {
    // write send request here
    const token = await executeRecaptcha();
    if (!token) {
      // setResponse({ message: "Failed to Send!!!", status: "Failed" });
      //message error
      return;
    }
    const query = {
      recaptcha_token: token,
      password: deleteProjectPassword,
    };
    const res = await remove(`/project/delete/${id}`, query);
    console.log(res);
    setDeleteProjectPassword("");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setDeleteProjectPassword("");
    //
    setIsModalOpen(false);
  };

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
          size.width <= 800 ? "h-fit" : "h-[13rem]"
        }  mt-8 pt-4 w-[90%] rounded-lg bg-[#FFFEFE] mx-auto shadow-[0_4px_4px_0px_#00000040] border-[#E7EEEC] border-2`}
      >
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          okText="Confirm"
          onCancel={handleCancel}
        >
          <div className="py-4 text-lg font-[Poppins] font-normal">
            Are you sure you want to delete the project?
          </div>
          <Input
            className="rounded-lg"
            placeholder="Enter Password"
            type="password"
            onChange={(e) => {
              setDeleteProjectPassword(e.target.value);
            }}
          />
        </Modal>
        <Row>
          <Col flex="none" className="pl-8">
            <Col className="justify-start">
              <Typography.Title
                level={3}
                className=" mb-2 text-4xl font-inter font-medium text-left"
              >
                {projectData?.name}
              </Typography.Title>
            </Col>
            <Col className="justify-start">
              <Typography.Title
                level={5}
                className=" mb-0 text-2xl font-normal text-[#001E2B] text-left"
              >
                {projectData?.owner?.name} ({projectData?.owner?.email})
              </Typography.Title>
            </Col>
            <Col className="justify-start">
              <Typography.Title
                level={5}
                className="mb-0 text-2xl font-normal text-[#001E2B] text-left "
              >
                {/* need to implement this */}
                Collaborators:{" "}
                {projectData?.collaborators?.map((collaborator, index) => {
                  <span className="hover:underline text-xl font-normal text-[#006DFB] text-left">
                    {collaborator}
                    {index !== projectData?.collaborators?.length - 1
                      ? " ,"
                      : null}
                  </span>;
                })}
              </Typography.Title>
            </Col>
            <Col className="justify-start">
              {/* {size.width > 800 ? (
                <Typography.Title
                  level={5}
                  className="text-2xl font-normal text-[#001E2B] text-left"
                >
                  Allowed Origins:{" "}
                  {projectData?.allowedOrigins?.map((origin, index) => {
                    return (
                      <span className="hover:underline text-xl font-medium text-[#970606] text-left mr-2">
                        {origin}
                        {index !== projectData?.allowedOrigins?.length - 1
                          ? " ,"
                          : null}
                      </span>
                    );
                  })}
                  reCAPTCHA:{" "}
                  <span className="hover:underline text-xl font-medium text-[#00694B] text-left">
                    Available
                  </span>
                </Typography.Title>
              ) : (
                <> */}
              <Typography.Title
                level={5}
                className="text-2xl font-normal text-[#001E2B] text-left mb-0"
              >
                Allowed Origins:{" "}
                {projectData?.allowedOrigins?.map((origin, index) => {
                  return (
                    <span className="hover:underline text-xl font-medium text-[#970606] text-left mr-2">
                      {origin}
                      {index !== projectData?.allowedOrigins?.length - 1
                        ? " ,"
                        : null}
                    </span>
                  );
                })}
              </Typography.Title>
              <Typography.Title
                level={5}
                className="text-2xl font-normal text-[#001E2B] text-left mt-0"
              >
                reCAPTCHA:{" "}
                <span className="hover:underline text-xl font-medium text-[#00694B] text-left">
                  {projectData?.hasRecaptcha ? "Available" : "Unavailable"}
                </span>
              </Typography.Title>
              {/* </>
              )} */}
            </Col>
          </Col>
          {size.width > 800 && (
            <>
              <Col flex="24">
                <Button className="pb-2 text-2xl absolute right-16 mx-4 h-14 w-14  border-[#00694B] text-[#00694B] font-medium font-inter mb-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                  <EditOutlined />
                </Button>
                {/* </Col> */}
                {/* <Col flex="1"> */}
                <Button
                  className="absolute right-0 border-[#970606] text-[#970606] mx-4 h-14 w-14 font-medium font-inter text-xl mb-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-red-300"
                  onClick={showModal}
                >
                  <AiOutlineDelete className="h-6 w-6" />
                </Button>
              </Col>
            </>
          )}
        </Row>
        {size.width <= 800 && (
          <>
            <Row>
              <Col>
                <Button className="pt-0 pb-2 pl-3 text-xl ml-8 my-4  h-10 w-12  border-[#00694B] text-[#00694B] font-medium font-inter  rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                  <EditOutlined />
                </Button>
              </Col>
              <Col>
                <Button
                  className=" mr-8 ml-4 h-10 w-13  border-[#970606] text-[#970606] font-medium font-inter text-xl my-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-red-300"
                  onClick={showModal}
                >
                  <AiOutlineDelete className="" />
                </Button>
              </Col>
            </Row>
          </>
        )}
      </div>
      <div className="w-[90%] min-h-[15rem] pb-4 rounded-lg bg-[#FFFEFE] mx-auto shadow-[0_4px_4px_0px_#00000040] my-12 border-[#E7EEEC] border-2">
        <Row>
          <Col flex="4" className="mt-3 mb-0">
            <Typography.Text
              level={3}
              className="mb-0 text-4xl font-inter font-medium ml-8"
            >
              Forms {`(${projectData?.form_count || 0})`}
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
                  onClick={() =>
                    router.push(`/dashboard/project/${id}/newform`)
                  }
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
                  onClick={() =>
                    router.push(`/dashboard/project/${id}/newform`)
                  }
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
                className="pl-10 pr-8 font-inter font-semibold text-base"
              >
                Name
              </Col>
              <Col span={6} className="px-8 font-inter font-semibold text-base">
                Number of Submissions
              </Col>
              <Col span={6} className="px-8 font-inter font-semibold text-base">
                Last Submission
              </Col>
              <Col span={6} className="px-8 font-inter font-semibold text-base">
                Date Created
              </Col>
            </Row>
            <div className="border-[#C@CBCB] border-[1px]"></div>

            {/* ProjectItem */}
            {projectData?.forms?.map((form) => {
              return (
                <ProjectItem
                  name={form.name}
                  numberOfForms={form.submission_count}
                  allowedOrigin={form.last_updated}
                  dateCreated={form.date_created}
                  baseurl={`/dashboard/project/${id}`}
                  id={form.id}
                />
              );
            })}
            {/* <ProjectItem
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
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
