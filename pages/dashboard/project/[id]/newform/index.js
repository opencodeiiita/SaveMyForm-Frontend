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
  Switch,
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
  const onChange = (checked) => {
    setIsChecked(checked);
  };
  const handleSubmit = () => {};
  const handleCancel = () => {};
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
      <form className=" bg-[#FFFEFE] max-w-4xl mx-8 max-600:mx-2 flex flex-col gap-8">
        <div>
          <Typography.Title
            level={3}
            className="mt-10 mb-0 text-2xl text-[#116149] font-inter font-bold text-left"
          >
            Form Name
          </Typography.Title>
          <Input
            placeholder="Enter form name"
            className="mt-2 font-inter text-[#116149] border-[#116149] border-t-0 border-l-0 border-r-0 border-b-dark-100 p-0.5 focus:valid:border-b-green-500 focus:invalid:border-b-red-500 transition-all"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Typography.Title
            level={3}
            className=" mb-0 text-2xl text-[#116149] font-inter font-bold text-left"
          >
            reCAPTCHA v3
          </Typography.Title>
          <Switch
            onChange={onChange}
            className={isChecked ? 'bg-green-700 w-12' : 'bg-gray-300 w-12'}
          />
        </div>
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
        <div>
          <div className="w-[calc(100vw-64px)] max-600:w-[calc(100vw-8px)]">
            <MultipleNewFormInputs inputs={inputs} setInputs={setInputs} />
          </div>
        </div>
        <div className="mt-8 w-72 flex gap-2 ">
          <button
            className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] rounded-lg bg-green-300 p-2 w-32"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] rounded-lg bg-white p-2 w-32"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
