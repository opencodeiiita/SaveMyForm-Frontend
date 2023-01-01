import React, { useState } from "react";
import { Button, Form, Input, Typography, Checkbox } from "antd";
import {
  ExclamationCircleOutlined,
  PlusOutlined,
  UserAddOutlined,
  DeleteOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import MultipleInputs from "../../../../../components/elements/MultipleInputs";

const newProject = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [reCaptchaKey, setReCaptchaKey] = useState("");
  const [reCaptchaSecret, setReCaptchaSecret] = useState("");
  const [domainNames, setDomainNames] = useState([{ value: "" }]);
  const [collaboratorNames, setCollaboratorNames] = useState([{ value: "" }]);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const clearInputs = () => {
    setProjectName("");
    setReCaptchaKey("");
    setReCaptchaSecret("");
    setDomainNames([{ value: "" }]);
    setCollaboratorNames([{ value: "" }]);
    setIsChecked(false);
  };

  return (
    <>
      <form className=" bg-[#FFFEFE] max-w-4xl mx-8">
        <Typography.Title
          level={3}
          className="mt-10 mb-0 text-base font-inter font-bold text-left"
        >
          Project Name:{" "}
          <ExclamationCircleOutlined className="text-lg text-[#7f7f7f] pl-4" />
          <Input
            placeholder="e.g example.com"
            className=" border-2 border-r-[#FFFEFE] border-t-[#FFFEFE] border-l-[#FFFEFE] border-b-[#C2C8CB] font-normal text-normal rounded-md bg-[#FFFEFE] p-3 focus:valid:border-b-green-500 focus:invalid:border-b-red-500 transition-all"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </Typography.Title>
        <Typography.Title
          level={3}
          className="mt-10 mb-0 text-base font-inter font-bold text-left"
        >
          reCAPTCHA v3:{" "}
          <ExclamationCircleOutlined className="text-lg text-[#7f7f7f] pl-4" />
        </Typography.Title>
        <Checkbox onChange={handleChange} checked={isChecked}>
          Do you want reCaptcha Support?
        </Checkbox>
        {isChecked && (
          <>
            <Input
              placeholder="Enter reCaptcha Key"
              className="mb-4 border-2 border-r-[#FFFEFE] border-t-[#FFFEFE] border-l-[#FFFEFE] border-b-[#C2C8CB] font-normal text-normal rounded-md bg-[#FFFEFE] p-3 focus:valid:border-b-green-500 focus:invalid:border-b-red-500 transition-all"
              value={reCaptchaKey}
              onChange={(e) => setReCaptchaKey(e.target.value)}
              required
            />
            <Input
              placeholder="Enter reCaptcha Secret"
              className=" border-2 border-r-[#FFFEFE] border-t-[#FFFEFE] border-l-[#FFFEFE] border-b-[#C2C8CB] font-normal text-normal rounded-md bg-[#FFFEFE] p-3 focus:valid:border-b-green-500 focus:invalid:border-b-red-500 transition-all"
              value={reCaptchaSecret}
              onChange={(e) => setReCaptchaSecret(e.target.value)}
              required
            />
          </>
        )}
        <Typography.Title
          level={3}
          className="mt-10 mb-0 text-base font-inter font-bold text-left"
        >
          Domain:{" "}
          <ExclamationCircleOutlined className="text-lg text-[#7f7f7f] pl-4" />
        </Typography.Title>
        <MultipleInputs
          placeholder="Enter Domain Name"
          type="email"
          addIcon={<PlusOutlined />}
          deleteIcon={<DeleteOutlined />}
          inputs={domainNames}
          setInputs={setDomainNames}
        />
        <Typography.Title
          level={3}
          className="mt-10 mb-0 text-base font-inter font-bold text-left"
        >
          Collaborators:{" "}
          <ExclamationCircleOutlined className="text-lg text-[#7f7f7f] pl-4" />
        </Typography.Title>
        <MultipleInputs
          placeholder={"Enter Collaborator's email"}
          type="email"
          addIcon={<UserAddOutlined />}
          deleteIcon={<UserDeleteOutlined />}
          inputs={collaboratorNames}
          setInputs={setCollaboratorNames}
        />
        <Button
          type="secondary"
          className=" border-[#00694B] text-[#00694B] font-medium font-inter  my-4 pb-2 rounded-md "
          onClick={clearInputs}
        >
          Cancel
        </Button>
        <Button
          type="primary"
          className=" ml-4 border-[#00694B] text-[#FFFEFE] font-medium font-inter rounded-md my-4 pb-2 "
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default newProject;
