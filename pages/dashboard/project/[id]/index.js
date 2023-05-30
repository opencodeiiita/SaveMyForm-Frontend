import React, { useState, useContext, useEffect } from 'react';
import { Typography, Col, Row, Button, Input, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { get, remove } from '../../../../components/utils/API';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useRouter } from 'next/router';
import { useWindowSize } from '../../../../components/utils/hooks/useWindowSize';
import {
  useQuery,
  dehydrate,
  QueryClient,
  useQueryClient,
} from '@tanstack/react-query';
import { AppbarContext, UserContext } from '../../../../components/context';
import Loader from '../../../../components/elements/Loader';
import Form from '../../../../components/elements/Form';
import Footer from '../../../../components/elements/Footer';
async function getProjectData(id) {
  return await get(`/project/dashboard/${id}`).then((data) => {
    data?.data?.data?.forms?.forEach((form) => {
      let iostr = form.date_created;
      let iostr2 = form.last_updated;
      let tempDate = new Date(iostr).toDateString().slice(4);
      let tempDate2 = new Date(iostr2).toDateString().slice(4);
      form.date_created = tempDate.slice(0, 6) + ',' + tempDate.slice(6);
      form.last_updated = tempDate2.slice(0, 6) + ',' + tempDate2.slice(6);
    });
    return data?.data?.data;
  });
}

export default function Project({ id }) {
  const { setActive } = useContext(AppbarContext);
  let { isLoggedIn, user } = useContext(UserContext);
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
  }, [user]);
  const projectQuery = useQuery({
    queryKey: ['projectData', id],
    queryFn: () => {
      return getProjectData(id);
    },
    staleTime: 10 * 60 * 1000,
  });
  if (projectQuery?.isLoading) return <Loader />;
  if (projectQuery?.isSuccess) {
    return (
      <>
        <div>
          <div className="relative">
            <svg
              height="461"
              viewBox="0 0 1728 461"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1604_86)">
                <path
                  d="M1727.5 0.5H0.5V460.5H1727.5V0.5Z"
                  fill="#023430"
                  stroke="black"
                />
                <path
                  d="M1628 0C1683.23 0 1728 44.7715 1728 100V324.686C1728 381.743 1673.73 423.166 1618.69 408.114C1596.62 402.076 1573.05 405.034 1553.15 416.338L1515 438.01L1476.2 453.704C1464.29 458.523 1451.56 461 1438.7 461H848.104C817.685 461 791.595 439.298 786.055 409.387C785.353 405.597 785 401.75 785 397.896V394.527C785 339.415 829.677 294.738 884.79 294.738H1098.52H1164.22C1240.12 294.738 1283.43 208.075 1237.87 147.369C1192.31 86.6627 1235.63 0 1311.53 0H1628Z"
                  fill="#00684A"
                />
              </g>
              <defs>
                <clipPath id="clip0_1604_86">
                  <rect width="1728" height="461" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className=" absolute top-[80px] left-[110px] md:left-[400px] flex-row md:justify-around md:flex justify-between items-center">
              <h1 className=" text-[#DEF7E5] font-bold text-[48px]">
                {projectQuery?.data?.name}
              </h1>
              <button className="text-[#DEF7E5] mt-2 md:mt-0 ml-12 md:ml-8 h-[31px] px-2 rounded-lg border-2 border-[#DEF7E5] ">
                Manage
              </button>
            </div>
            <div className="absolute top-[191px] left-[110px] md:left-[1056px] mt-8">
              <button className=" ml-6 flex text-[#00694B] font-semibold rounded-md px-2 py-1 bg-[#92E3A9] items-center justify-around">
                <PlusOutlined className="mr-1" />
                Create a form
              </button>
            </div>
            <div className="absolute left-[50px] md:left-[404px] top-[250px] md:top-[262px] mt-4 flex-row">
              <Form createdAt={'3'} formName={'Form1'} totalSubmissions={8} />
              <Form createdAt={'3'} formName={'Form1'} totalSubmissions={8} />
              <Form createdAt={'3'} formName={'Form1'} totalSubmissions={8} />
              <Form createdAt={'3'} formName={'Form1'} totalSubmissions={8} />
              <Form createdAt={'3'} formName={'Form1'} totalSubmissions={8} />
              <Form createdAt={'3'} formName={'Form1'} totalSubmissions={8} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export async function getServerSideProps({ params: { id } }) {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(['projectData', id], getProjectData);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
}
