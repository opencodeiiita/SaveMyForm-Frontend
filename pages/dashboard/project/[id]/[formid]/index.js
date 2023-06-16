import React, { useState, useContext, useEffect } from 'react';
import { Typography, Col, Row, Button, Input, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { get, remove } from '../../../../../components/utils/API';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useRouter } from 'next/router';
import { useWindowSize } from '../../../../../components/utils/hooks/useWindowSize';
import {
  useQuery,
  dehydrate,
  QueryClient,
  useQueryClient,
} from '@tanstack/react-query';
import { AppbarContext, UserContext } from '../../../../../components/context';
import Loader from '../../../../../components/elements/Loader';
import Form from '../../../../../components/elements/Form';
import Footer from '../../../../../components/elements/Footer';
import Link from 'next/link';
import { BiSortAlt2 } from 'react-icons/bi';
import FormResponse from '../../../../../components/elements/FormResponse';
import DashboardVector from '../../../../../assets/svgs/dashboardsVector.svg';
import Image from 'next/image';
export default function Project() {
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

  return (
    <>
      <div className="grid place-items-center w-screen relative">
        <div className="absolute w-full h-96 bg-[#023430] top-0 z-0">
          <Image
            src={DashboardVector.src}
            height={384}
            width={786}
            alt="Dashboard Vector"
            className="ml-auto object-cover h-full"
          />
        </div>
        <div className="flex flex-col gap-8 md:w-1/2 w-9/12 z-20 mt-16">
          <div className="flex flex-col gap-2 ">
            <div className="flex flex-row gap-2 items-center">
              <h1 className=" text-[#DEF7E5] font-bold text-5xl">{'Form1'}</h1>
              <button className="text-[#DEF7E5]  h-[31px] px-2 rounded-lg border-2 border-[#DEF7E5] ">
                Manage
              </button>
            </div>
            <div>
              <div className=" text-[#DEF7E5] font-base text-xl">
                {'Project1'}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 shadow-[0_4px_4px_0px_#00000040] rounded-lg p-8 bg-[#ffffff]">
            <div className="flex flex-row items-center  justify-between">
              <div className=" text-[#016749] font-bold text-5xl">
                {'45'}{' '}
                <span className="text-[#01684a] font-medium tracking-wide text-xl">
                  Responses
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <BiSortAlt2 fill="#00694b" size={24} />
                <span className="text-[#00694b] font-medium tracking-wide text-xl">
                  Latest
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <FormResponse />
              <FormResponse />
              <FormResponse />
              <FormResponse />
            </div>
            <div className="flex flex-row items-center gap-2 justify-center">
              <button className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] rounded-lg bg-green-300 p-2 w-32">
                Prev
              </button>
              <button className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] rounded-lg bg-green-300 p-2 w-32">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
