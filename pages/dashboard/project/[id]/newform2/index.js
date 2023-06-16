import React from 'react';
import Image from 'next/image';
import DashboardVector from '../../../../../assets/svgs/dashboardsVector.svg';
import { Input, Space, Checkbox } from 'antd';
import FormInput from '../../../../../components/elements/FormInput';
import { AiOutlinePlus } from 'react-icons/ai';
import Footer from '../../../../../components/elements/Footer';
export default function NewForm2() {
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
            </div>
            <div>
              <div className=" text-[#DEF7E5] font-base text-xl">
                {'Project1'}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 shadow-[0_4px_4px_0px_#00000040] rounded-lg p-8 bg-[#ffffff]">
            <div>
              <Input
                placeholder="Form Name"
                className="rounded-lg border-solid border-2 border-[#01684a]"
              />
            </div>
            <div className="rounded-lg  border-solid border-2 border-[#01684a] p-4 flex flex-col gap-2">
              <div className="text-lg text-[#01684a] font-bold">
                Add Fields to your Form
              </div>
              <div className="flex flex-col gap-4">
                <FormInput />
                <FormInput />
              </div>
              <button className="rounded-lg bg-[#DEF7E5] text-[#023430] font-semibold p-2 w-32">
                <Space>
                  <AiOutlinePlus size={16} strokeWidth={12} />
                  New Field
                </Space>
              </button>
            </div>
            <div className="flex flex-row gap-2">
              <Checkbox />
              <div className="text-lg text-[#01684a] font-bold">
                has reCAPTCHA Validation ?
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <button className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-lg  rounded-lg bg-green-300 p-2 w-32">
                Submit
              </button>
              <button className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-lg  rounded-lg bg-white p-2 w-32">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
