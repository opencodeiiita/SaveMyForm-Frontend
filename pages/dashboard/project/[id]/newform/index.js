import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Typography,
  message,
  Col,
  Checkbox,
  Label,
} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import MultipleNewFormInputs from '../../../../../components/elements/MultipleNewFormInputs';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

export default function NewForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [reCaptchaKey, setReCaptchaKey] = useState('');
  const [reCaptchaSecret, setReCaptchaSecret] = useState('');
  const [removeField, setRemoveField] = useState([]);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const clearInputs = () => {
    setProjectName('');
    setReCaptchaKey('');
    setReCaptchaSecret('');
    setIsChecked(false);
  };
  const [inputs, setInputs] = useState([
    { name: '', type: '', isRequired: false },
  ]);
  return (
    <>
      <form className=" bg-[#FFFEFE] max-w-4xl mx-8 max-600:mx-2">
        <Typography.Title
          level={3}
          className="mt-10 mb-0 text-base font-inter font-bold text-left"
        >
          Form Name:{' '}
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
          reCAPTCHA v3:{' '}
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
        <div className="w-[calc(100vw-64px)] max-600:w-[calc(100vw-8px)]">
          <MultipleNewFormInputs inputs={inputs} setInputs={setInputs} />
        </div>
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
          // onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </>
  );
}
