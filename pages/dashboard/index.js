import React, { useState, useEffect, useContext } from 'react';
import { Typography, Col, Row, Button, Input } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import ProjectItem from '../../components/elements/ProjectItem';
import Avatar from '../../components/elements/Avatar';
import { get, getAccessToken } from '../../components/utils/API/index.js';
import { useRouter } from 'next/router';
import { AppbarContext, UserContext } from '../../components/context';
import {
  useQuery,
  useMutation,
  QueryClient,
  useQueryClient,
  dehydrate,
} from '@tanstack/react-query';
import Loader from '../../components/elements/Loader';
import { useWindowSize } from '../../components/utils/hooks/useWindowSize';
import Card from '../../components/elements/card';
import PCard from '../../components/elements/P_Card';
import Icon from '../../assets/svgs/iconDash.svg';
import Image from 'next/image';
import Footer from '../../components/elements/Footer';
async function getUserDashboard() {
  return await get('/user/dashboard').then((data) => {
    data?.data?.data?.projects.forEach((date) => {
      let iostr = date.date_created;
      let tempDate = new Date(iostr).toDateString().slice(4);
      date.date_created = tempDate.slice(0, 6) + ',' + tempDate.slice(6);
    });
    return data?.data?.data;
  });
}

export default function Dashboard() {
  const router = useRouter();
  const { setActive } = useContext(AppbarContext);
  let { isLoggedIn, user } = useContext(UserContext);
  const size = useWindowSize();
  const userQuery = useQuery({
    queryKey: ['userData'],
    queryFn: getUserDashboard,
    staleTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    if (!isLoggedIn) {
      setActive({
        home: false,
        dashboard: false,
        documentation: false,
        faq: false,
      });
      router.push('/signin');
    }
    setActive({
      home: false,
      dashboard: true,
      documentation: false,
      faq: false,
    });
    if (user && user.verified === false) {
      setActive({
        home: false,
        dashboard: false,
        documentation: false,
        faq: false,
      });
      router.push('/verify');
    }
  }, [user]);
  if (userQuery?.isLoading) return <Loader />;
  if (userQuery?.isSuccess) {
    return (
      <>
        {/* <div
          className={`${
            size.width <= 800 ? 'h-[15rem]' : 'h-[10rem]'
          } mt-8  w-[90%] rounded-lg bg-[#FFFEFE] mx-auto shadow-[0_4px_4px_0px_#00000040] border-[#E7EEEC] border-2`}
        >
          <Row>
            <Col flex="none">
              <div className="h-24 w-24 bg-[#B1FE04] my-7 rounded-full mx-8 ">
                <Avatar seed={userQuery.data.name} />
              </div>
            </Col>
            <Col flex="none">
              <Col className="justify-start">
                <Typography.Title
                  level={3}
                  className="mt-10 mb-0 text-4xl font-inter font-medium text-left"
                >
                  {userQuery.data.name}
                </Typography.Title>
              </Col>
              <Col className="justify-start">
                <Typography.Title
                  level={5}
                  className="text-2xl font-light text-[#001E2B] text-left"
                >
                  {userQuery.data.email}
                </Typography.Title>
              </Col>
            </Col>
            {size.width > 800 && (
              <>
                <Col flex="auto">
                  <Button
                    className="absolute right-0 mx-4 h-14 w-[12rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-xl my-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300"
                    onClick={() => router.push('/settings')}
                  >
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
                  <Button
                    className="absolute ml-8  h-14 w-[12rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-xl  rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300"
                    onClick={() => router.push('/settings')}
                  >
                    Settings
                  </Button>
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
                Projects (
                {userQuery.data.project_count
                  ? userQuery.data.project_count
                  : 0}
                )
              </Typography.Text>

              <a className="mx-3 mt-8 text-[#006DFB]">Docs</a>
            </Col>
            {size.width > 800 && (
              <>
                <Col flex="1">
                  <Button
                    onClick={(e) => {
                      userQuery.refetch();
                    }}
                    className="absolute right-0 h-12 w-12  border-[#00694B] border-2 text-[#00694B] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300"
                  >
                    <ReloadOutlined className="mb-[5px] ml-[-3px]" />
                  </Button>
                </Col>
                <Col flex="1">
                  <Button
                    type="primary"
                    className="ml-5 mr-8 h-12 w-[16.25rem]  border-[#00694B] border-2 text-[#FFFEFE] font-medium font-inter text-xl mt-4 rounded-lg hover:border-[#00593B] shadow-md hover:shadow-green-300"
                    onClick={() => router.push('dashboard/project/newproject')}
                  >
                    Create Project
                  </Button>
                </Col>{' '}
              </>
            )}
          </Row>
          {size.width <= 800 && (
            <>
              <Row>
                <Col>
                  <Button
                    className="ml-8 h-12 w-12  border-[#00694B] border-2 text-[#00694B] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300 shadow-md hover:shadow-green-300"
                    onClick={(e) => {
                      userQuery.refetch();
                    }}
                  >
                    <ReloadOutlined className="mb-[5px] ml-[-3px]" />
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    className="ml-5 mr-8 h-12 w-[16.25rem]  border-[#00694B] border-2 text-[#FFFEFE] font-medium font-inter text-xl mt-4 rounded-lg hover:border-[#00593B] shadow-md hover:shadow-green-300"
                    onClick={() => router.push('dashboard/project/newproject')}
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
                <Col
                  span={6}
                  className="px-8 font-inter font-semibold text-base"
                >
                  Allowed Origins
                </Col>
                <Col
                  span={6}
                  className="px-8 font-inter font-semibold text-base"
                >
                  Date Created
                </Col>
              </Row>
              <div className="border-[#C@CBCB] border-[1px]"></div>
              {userQuery.isRefetching ? (
                <div className=" relative min-h-[40vh]">
                  <Loader />
                </div>
              ) : (
                userQuery.data &&
                userQuery.data.projects &&
                userQuery.data.projects.length > 0 &&
                userQuery.data.projects.map((project, i) => (
                  <ProjectItem
                    key={i}
                    id={project?.id}
                    name={project?.name}
                    numberOfForms={project?.form_count}
                    allowedOrigin={project?.allowed_origins?.join(' ')}
                    dateCreated={project?.date_created}
                    baseurl={'/dashboard/project'}
                  />
                ))
              )}

            </div>
          </div>
        </div> */}
        <div className="flex-col flex items-center border-0 border-yellow-500 font-[Poppins]">
          <svg
            width="100%"
            height="300"
            viewBox="0 0 1728 461"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="1727"
              height="460"
              fill="#023430"
              stroke="black"
            />
          </svg>
          <div
            className=" w-[clamp(200px,60%,900px)] project_cards relative top-[-150px] outline-[black]
             flex flex-col 
            "
          >
            <div className="text-xl font-bold md:m-2 mb-2 text-[#DEF7E5] text-center md:pl-8 md:text-start">
              Your Projects
            </div>
            <div className="flex flex-wrap justify-center md:justify-start  gap-16 md:pl-8">
              <Card />
              {userQuery.isRefetching ? (
                <div className=" relative min-h-[40vh]">
                  <Loader />
                </div>
              ) : (
                userQuery.data.projects &&
                userQuery.data.projects.length > 0 &&
                userQuery.data.projects.map((project, i) => (
                  <PCard
                    key={i}
                    id={project?.id}
                    formName={project?.name}
                    totalForms={project?.form_count}
                    allowedOrigins={project?.allowed_origins?.join(' ')}
                    creationDate={project?.date_created}
                  />
                ))
              )}
            </div>
          </div>
          <div className="mb-5 mt-[-100px] md:w-[clamp(0px,65%,900px)] w-[70%] flex flex-col md:flex-row">
            <div className="border-[#001E2B] border-[1px] rounded-[12px] flex md:w-[65%] flex-col md:flex-row">
              <div className=" md:w-[85%] flex flex-col justify-center p-2">
                <div className="m-2 text-xl font-bold">
                  Projects represent your website
                </div>
                <div className="m-1 ml-2 text-sm text-[#001E2B99]">
                  A project may contain multiple forms and those forms share the
                  same domain name and reCaptcha details.
                </div>
                <div className="ml-2 m-2">Learn More</div>
              </div>
              <div className="md:w-[70%] md:flex justify-center items-center hidden mb-[-20px]">
                <Image src={Icon} />
              </div>
            </div>
            <div className="border-[#001E2B] p-3 border-[1px] mt-5 md:mt-0 rounded-[12px] flex flex-col items-center justify-between md:w-[30%] md:ml-auto ">
              <div className="text-xl mb-[80px] font-bold">
                You can create upto 6 Projects.
              </div>
              <div className="text-[#001E2B99]">
                We are working to provide you more
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(['userData'], getUserDashboard);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
