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
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useWindowSize } from "../../../../components/utils/hooks/useWindowSize";
import { useQuery, dehydrate } from "@tanstack/react-query";
import Loader from "../../../../components/elements/Loader";
// import { getProjectData } from "../../../../components/utils/FetchData";

async function getProjectData(id) {
  return await get(`/project/dashboard/${id}`).then((data) => {
    data?.data?.data?.forms?.forEach((form) => {
      let iostr = form.date_created;
      let iostr2 = form.last_updated;
      let tempDate = new Date(iostr).toDateString().slice(4);
      let tempDate2 = new Date(iostr2).toDateString().slice(4);
      form.date_created = tempDate.slice(0, 6) + "," + tempDate.slice(6);
      form.last_updated = tempDate2.slice(0, 6) + "," + tempDate2.slice(6);
    });
    return data?.data?.data;
  });
}

export default function Project({ id }) {
  // const getData = () => {
  const queryClient = useQueryClient();
  // return queryClient.getQueryData(["userData"]);
  // };
  //states and functions for modal.
  const router = useRouter();

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteProjectPassword, setDeleteProjectPassword] = useState("");
  const projectQuery = useQuery({
    queryKey: ["projectData", id],
    queryFn: () => {
      return getProjectData(id);
    },
    staleTime: 10 * 60 * 1000,
  });
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
    if (res) {
      setDeleteProjectPassword("");
      setIsModalOpen(false);
      router.replace("/dashboard");
    }
  };

  const handleCancel = () => {
    setDeleteProjectPassword("");
    //
    setIsModalOpen(false);
  };

  //Function to get screen size as the component is rendered on server side but we need the screen size of the user
  const size = useWindowSize();

  if (projectQuery?.isLoading) return <Loader />;
  if (projectQuery?.isSuccess) {
    // console.log(queryClient.getQueryData(["userData"]));
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
                  {projectQuery.data?.name}
                </Typography.Title>
              </Col>
              <Col className="justify-start">
                <Typography.Title
                  level={5}
                  className=" mb-0 text-2xl font-normal text-[#001E2B] text-left"
                >
                  {projectQuery.data?.owner?.name} (
                  {projectQuery.data?.owner?.email})
                </Typography.Title>
              </Col>
              <Col className="justify-start">
                <Typography.Title
                  level={5}
                  className="mb-0 text-2xl font-normal text-[#001E2B] text-left "
                >
                  {/* need to implement this */}
                  Collaborators:{" "}
                  {projectQuery.data?.collaborators?.map(
                    (collaborator, index) => {
                      <span
                        className="hover:underline text-xl font-normal text-[#006DFB] text-left"
                        key={index}
                      >
                        {collaborator}
                        {index !== projectQuery.data?.collaborators?.length - 1
                          ? " ,"
                          : null}
                      </span>;
                    }
                  )}
                </Typography.Title>
              </Col>
              <Col className="justify-start">
                <Typography.Title
                  level={5}
                  className="text-2xl font-normal text-[#001E2B] text-left mb-0"
                >
                  Allowed Origins:{" "}
                  {projectQuery.data?.allowedOrigins?.map((origin, index) => {
                    return (
                      <span
                        className="hover:underline text-xl font-medium text-[#970606] text-left mr-2"
                        key={index}
                      >
                        {origin}
                        {index !== projectQuery.data?.allowedOrigins?.length - 1
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
                    {projectQuery.data?.hasRecaptcha
                      ? "Available"
                      : "Unavailable"}
                  </span>
                </Typography.Title>
              </Col>
            </Col>
            {size.width > 800 && (
              <>
                <Col flex="24">
                  <Button className="pb-2 text-2xl absolute right-16 mx-4 h-14 w-14  border-[#00694B] text-[#00694B] font-medium font-inter mb-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                    <EditOutlined />
                  </Button>
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
                Forms {`(${projectQuery.data?.form_count || 0})`}
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
                <Col
                  span={6}
                  className="px-8 font-inter font-semibold text-base"
                >
                  Number of Submissions
                </Col>
                <Col
                  span={6}
                  className="px-8 font-inter font-semibold text-base"
                >
                  Last Submission
                </Col>
                <Col
                  span={6}
                  className="px-8 font-inter font-semibold text-base"
                >
                  Date Created
                </Col>
              </Row>
              <div className="border-[#C@CBCB] border-[1px]"></div>

              {/* ProjectItem */}
              {projectQuery.data?.forms?.map((form, i) => {
                return (
                  <ProjectItem
                    key={i}
                    name={form.name}
                    numberOfForms={form.submission_count}
                    allowedOrigin={form.last_updated}
                    dateCreated={form.date_created}
                    baseurl={`/dashboard/project/${id}`}
                    id={form.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

// Project.getInitialProps = async ({ query }) => {
//   const { id } = query;
//   return { id };
// };

export async function getServerSideProps({ params: { id } }) {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(["projectData", id], getProjectData);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
}
