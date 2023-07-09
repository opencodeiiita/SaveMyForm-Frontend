import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  useQuery,
  dehydrate,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import { BiSortAlt2 } from "react-icons/bi";
import { Modal, Button, Input, Space } from "antd";

import { get, remove } from "../../../../../components/utils/API";
import { AppbarContext, UserContext } from "../../../../../components/context";
import Footer from "../../../../../components/elements/Footer";
import FormResponse from "../../../../../components/elements/FormResponse";
import DashboardVector from "../../../../../assets/svgs/dashboardsVector.svg";
import SEO from "../../../../../components/utils/SEO";
import { MdOutlineContentCopy } from "react-icons/md";

export default function FormDashboard() {
  const router = useRouter();
  const { formid, isNew, submissionLink } = router.query;
  const { setActive } = useContext(AppbarContext);
  let { isLoggedIn, user } = useContext(UserContext);
  const [form, setForm] = useState(null);
  const [newFormSubmissionLinkModalOpen, setNewFormSubmissionLinkModalOpen] =
    useState(false);

  const getFormDashboard = async () => {
    const res = await get(`/form/dashboard/${formid}`);
    const data = res?.data?.data;
    setForm(data);
  };

  const copySubmissionLink = () => {
    navigator.clipboard.writeText(submissionLink);
  };
  useEffect(() => {
    if (!isLoggedIn) {
      setActive({
        home: false,
        dashboard: false,
        documentation: false,
        faq: false,
      });
      router.push("/signin");
    }
    setActive({
      home: false,
      dashboard: true,
      documentation: false,
      faq: false,
    });
  }, [user]);
  useEffect(() => {
    if (formid) getFormDashboard();
  }, [formid]);
  useEffect(() => {
    if (isNew && submissionLink) setNewFormSubmissionLinkModalOpen(true);
  }, [isNew, submissionLink]);
  return (
    <>
      <SEO
        title="SaveMyForm | Form Dashboard"
        desc={`Form Dashboard .SaveMyForm is a platform where yoy save your form data now
                easily and securely.No need to create a Backend for collecting
                form responses on your application`}
      />
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
        <div className="flex flex-col gap-8 lg:w-1/2 w-5/6 z-20 mt-16">
          <div className="flex flex-col gap-2 ">
            <div className="flex flex-row gap-2 items-center">
              <h1 className=" text-[#DEF7E5] font-bold text-5xl">
                {form?.name}
              </h1>
              {form?.is_owner && (
                <button
                  className="text-[#DEF7E5]  h-[31px] px-2 rounded-lg border-2 border-[#DEF7E5] "
                  onClick={() => {
                    router.push(
                      `/dashboard/project/${router.query.id}/${router.query.formid}/settings`
                    );
                  }}
                >
                  Manage
                </button>
              )}
            </div>
            <div>
              <div className=" text-[#DEF7E5] font-base text-xl">
                {form?.project?.name}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 shadow-[0_4px_4px_0px_#00000040] rounded-lg p-8 bg-[#ffffff]">
            <div className="flex flex-row items-center  justify-between">
              <div className=" text-[#016749] font-bold text-5xl">
                {"45"}{" "}
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
              <button className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] rounded-lg bg-[#DEF7E5] p-2 w-32">
                Prev
              </button>
              <button className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] rounded-lg bg-[#DEF7E5] p-2 w-32">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={newFormSubmissionLinkModalOpen}
        centered
        closable={false}
        footer={[
          <Button
            type="primary"
            onClick={() => {
              setNewFormSubmissionLinkModalOpen(false);
              router.replace(router.asPath.split("?")[0], undefined, {
                shallow: true,
              });
            }}
          >
            Ok
          </Button>,
        ]}
      >
        <h3 className="font-semibold text-xl">Submission Link</h3>
        <p className="leading-5">
          Here is your form submission link, send POST request to this link to
          store your form submission
        </p>
        <Space.Compact style={{ width: "100%", marginTop: 16 }}>
          <Input
            defaultValue={submissionLink}
            disabled
            className="h-8 border-gray-300 rounded-l-lg"
          />
          <Button onClick={copySubmissionLink}>
            <MdOutlineContentCopy />
          </Button>
        </Space.Compact>
      </Modal>
      <Footer />
    </>
  );
}
