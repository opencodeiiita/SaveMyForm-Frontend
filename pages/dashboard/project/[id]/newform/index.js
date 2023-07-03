import React, { useState, useRef, useContext, useEffect, useMemo } from "react";
import Image from "next/image";
import { Input, Checkbox, message } from "antd";
import { useQuery, dehydrate, QueryClient } from "@tanstack/react-query";

import DashboardVector from "../../../../../assets/svgs/dashboardsVector.svg";
import FormInput from "../../../../../components/elements/FormInput";
import Footer from "../../../../../components/elements/Footer";
import createJSONSchema from "../../../../../components/utils/JSONSchema";
import { useRouter } from "next/router";
import { AppbarContext, UserContext } from "../../../../../components/context";
import { get, post, API_URL } from "../../../../../components/utils/API";
import Loader from "../../../../../components/elements/Loader";
import SEO from "../../../../../components/utils/SEO";

async function getProjectData(id) {
  if (id)
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
  return null;
}

export default function NewForm() {
  const { setActive } = useContext(AppbarContext);
  let { isLoggedIn, user } = useContext(UserContext);

  let [fields, setFields] = useState([{ name: "", isRequired: false }]);

  const router = useRouter();
  const { id } = router.query;
  const formName = useRef(null),
    reCAPTCHA = useRef(null);

  const hasFileField = useMemo(() => fields.some((field) => field.type === "image" || field.type === "file"), [fields]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const name = formName.current.input.value;
      const hasRecaptcha = reCAPTCHA.current.input.checked;
      const schema = createJSONSchema(fields);
      const body = {
        name,
        schema,
        hasRecaptcha,
        hasFileField,
        hostUrl: API_URL,
      };
      const response = await post(`/form/new/${id}`, body);
      if (response.status === 201) {
        message.success("Form created successfully");
        router.push({
          pathname: `/dashboard/project/${id}/${response.data.data.id}`,
          query: { isNew: true, submissionLink: response.data.data.submisssionUrl },
        });
      } else message.error(response.data.error);
    } catch (err) {
      message.error("Error in creating form");
    }
  };

  const handleCancel = async () => {
    router.back();
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

  const projectQuery = useQuery({
    queryKey: ["projectData", id],
    queryFn: () => {
      return getProjectData(id);
    },
    staleTime: 10 * 60 * 1000,
  });
  if (projectQuery?.isLoading) return <Loader />;
  if (projectQuery?.isSuccess)
    return (
      <>
        <SEO
          title="SaveMyForm | NewForm"
          desc={`Create New Form on SaveMyForm. SaveMyForm is a platform where yoy save your form data now
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
                <h1 className=" text-[#DEF7E5] font-bold text-5xl">{"New Form"}</h1>
              </div>
              <div>
                <div className=" text-[#DEF7E5] font-base text-xl">{projectQuery.data?.name}</div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-8 shadow-[0_4px_4px_0px_#00000040] rounded-lg p-8 bg-[#ffffff]">
                <div>
                  <Input
                    placeholder="Form Name"
                    className="rounded-lg border-solid border-2 border-[#01684a]"
                    ref={formName}
                  />
                </div>
                <FormInput fields={fields} setFields={setFields} hasFileField={hasFileField} />
                <div className="flex flex-row gap-2">
                  <Checkbox ref={reCAPTCHA} />
                  <div className="text-lg text-[#01684a] font-bold">has reCAPTCHA Validation ?</div>
                </div>
                <div className="flex flex-row gap-2">
                  <button
                    className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-md rounded-lg bg-[#DEF7E5] p-2 w-32"
                    onClick={handleSubmit}
                    disabled={projectQuery.data?.forms?.length >= 5}
                  >
                    Submit
                  </button>
                  <button
                    className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-md rounded-lg bg-white p-2 w-32"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
}
