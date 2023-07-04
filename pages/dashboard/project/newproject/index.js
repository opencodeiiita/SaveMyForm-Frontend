import React, { useState } from "react";
import Footer from "../../../../components/elements/Footer";
import { Input } from "antd";
import { Switch, Space } from "antd";
import Image from "next/image";
import { Loading } from "@nextui-org/react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { message } from "antd";
import { post } from "../../../../components/utils/API";
import { useRouter } from "next/router";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import SEO from "../../../../components/utils/SEO";
import DashboardVector from "../../../../assets/svgs/dashboardsVector.svg";
import { useQueryClient } from "@tanstack/react-query";

export default function NewProject() {
  let queryClient = useQueryClient();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const [state, setState] = useState(false);
  const [projectName, setProjectName] = useState(null);
  const [recaptchaKey, setReCaptchaKey] = useState(null);
  const [recaptchaSecret, setReCaptchaSecret] = useState(null);
  const [loading, setLoading] = useState(false);
  const [domain, setDomain] = useState([""]);
  const onChange = (checked) => {
    setState(checked);
  };
  const success = () => {
    message.success("Project Successfully saved");
    router.push("/dashboard");
    queryClient.invalidateQueries(["userData"]);
  };
  const addDomain = () => {
    if (domain.length < 3) {
      setDomain([...domain, ""]);
    } else {
      message.error("You cannot add more than 3 allowed origins");
    }
  };
  const handleDeleteDomain = (i) => {
    if (domain.length > 1) {
      setDomain((prev) => {
        let nDomains = [...prev];
        nDomains.splice(i, 1);
        return nDomains;
      });
    } else {
      message.error("At least 1 field is required");
    }
  };
  const handleSubmit = async () => {
    if (!executeRecaptcha) {
      message.error("Recaptcha Failed");
      return;
    }
    const token = await executeRecaptcha();
    if (!token) {
      message.error("Recaptcha Failed");
      return;
    }
    setLoading(true);
    const res = await post("/project/new", {
      name: projectName,
      hasRecaptcha: state,
      recaptchaKey: recaptchaKey,
      recaptchaSecret: recaptchaSecret,
      allowedOrigins: domain,
      recaptcha_token: token,
    });
    setLoading(false);
    res.status === "error" ? message.error(res.error) : success();
  };
  const handleCancel = async () => {
    router.back();
  };
  return (
    <>
      <SEO
        title="SaveMyForm | NewProject"
        desc={`Create new project on SaveMyForm. SaveMyForm is a platform where yoy save your form data now
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
              <h1 className=" text-[#DEF7E5] font-bold text-5xl">{"New Project"}</h1>
            </div>
          </div>
          <div className="flex flex-col gap-8 shadow-[0_4px_4px_0px_#00000040] rounded-lg p-8 bg-[#ffffff]">
            <div>
              <Input
                placeholder="Project Name"
                required
                className="rounded-lg border-solid border-2 border-[#01684a]"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="text-xl text-[#01684a] font-bold">reCAPTCHA v3</h1>
              <Switch onChange={onChange} className={state ? "bg-green-700 w-12" : "bg-gray-300 w-12"} />
            </div>
            {state && (
              <div>
                <Input
                  placeholder="Enter reCAPTCHA Key"
                  required
                  className="rounded-lg border-solid border-2 border-[#01684a]"
                  value={recaptchaKey}
                  onChange={(e) => setReCaptchaKey(e.target.value)}
                />
              </div>
            )}
            {state && (
              <div>
                <Input
                  placeholder="Enter reCAPTCHA Secret"
                  required
                  className="rounded-lg border-solid border-2 border-[#01684a]"
                  value={recaptchaSecret}
                  onChange={(e) => setReCaptchaSecret(e.target.value)}
                />
              </div>
            )}
            <div className="flex flex-col gap-4">
              <div className="text-lg text-[#01684a] font-bold">Add Allowed Domains</div>
              {domain.map((item, index) => {
                return (
                  <div className="flex flex-row items-center" key={index}>
                    <Input
                      placeholder="Domain"
                      className="rounded-lg border-solid border-2 border-[#01684a]"
                      onChange={(e) =>
                        setDomain((prev) => {
                          let nFields = [...prev];
                          nFields[index] = e.target.value;
                          return nFields;
                        })
                      }
                      value={item}
                    />
                    <button
                      className="ml-2"
                      onClick={() => {
                        handleDeleteDomain(index);
                      }}
                    >
                      <AiOutlineClose size={20} strokeWidth={12} className="cursor-pointer" fill="#970606" />
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                className="rounded-lg bg-[#DEF7E5] text-[#023430] font-semibold p-2 w-32"
                onClick={addDomain}
                type="button"
              >
                <Space>
                  <AiOutlinePlus size={16} strokeWidth={12} />
                  Add Domain
                </Space>
              </button>
            </div>
            <div className="flex flex-row gap-2">
              <button
                className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-lg rounded-lg bg-[#DEF7E5] p-2 w-32"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? <Loading color="success" size="sm" /> : "Save"}
              </button>
              <button
                className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-lg  rounded-lg bg-white p-2 w-32"
                onClick={handleCancel}
              >
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
