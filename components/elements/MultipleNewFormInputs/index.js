import React, { useState } from 'react';
import {
  Input,
  Checkbox,
  message,
  Select,
  Button,
  Switch,
  Typography,
} from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

const index = ({ inputs, setInputs }) => {
  const [formName, setFormName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [currentType, setCurentType] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const addInput = () => {
    if (inputs.length > 10) {
      messageApi.open({
        type: 'error',
        content: 'You have already selected 10 input fields',
      });
      return;
    }
    let tempInputs = inputs;
    if (formName !== '' && currentType !== '') {
      tempInputs[tempInputs.length - 1] = {
        name: formName,
        type: currentType,
        isRequired: isChecked,
      };
      setInputs([...inputs, { name: '', type: '', isRequired: false }]);
      setFormName('');
      setIsChecked(false);
      setCurentType('');
    }
  };
  const removeInput = (index, e) => {
    const temp = [...inputs];
    temp.splice(index, 1);
    setInputs(temp);
  };
  const options = [
    { label: 'checkbox', value: 'checkbox' },
    { label: 'color', value: 'color' },
    { label: 'date', value: 'date' },
    { label: 'datetime-local', value: 'datetime-local' },
    { label: 'email', value: 'email' },
    { label: 'file', value: 'file' },
    { label: 'hidden', value: 'hidden' },
    { label: 'image', value: 'image' },
    { label: 'month', value: 'month' },
    { label: 'number', value: 'number' },
    { label: 'password', value: 'password' },
    { label: 'radio', value: 'radio' },
    { label: 'range', value: 'range' },
    { label: 'reset', value: 'reset' },
    { label: 'search', value: 'search' },
    { label: 'tel', value: 'tel' },
    { label: 'text', value: 'text' },
    { label: 'time', value: 'time' },
    { label: 'url', value: 'url' },
    { label: 'week', value: 'week' },
  ];
  const onChange = (checked) => {
    setIsChecked(checked);
  };

  const setOptions = () => {
    let tempOptions = options;
    inputs.forEach((input) => {
      if (input.type === 'file') tempOptions.splice(5, 1);
    });
    return tempOptions;
  };
  return (
    <>
      {contextHolder}
      <div className="flex flex-row items-center gap-8">
        <Typography.Title
          level={3}
          className=" mb-0 text-2xl text-[#116149] font-inter font-bold text-left"
        >
          Form Fields
        </Typography.Title>
        <button
          className="bg-green-300 text-green-700 py-0.5  px-2 rounded-md flex justify-center items-center font-semibold"
          onClick={addInput}
        >
          <AiOutlinePlus className="mr-1" />
          Add
        </button>
      </div>
      {inputs.map((input, index) => {
        return (
          <>
            <Input.Group compact>
              {index !== 0 ? (
                <>
                  <div className="w-full p-2 pt-4 h-fit">
                    <div className="flex flex-row items-center gap-2">
                      <Input
                        placeholder="Enter field name"
                        className="mt-2 font-inter text-[#116149] border-[#116149] border-t-0 border-l-0 border-r-0 border-b-dark-100 p-0.5 focus:valid:border-b-green-500 focus:invalid:border-b-red-500 transition-all"
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        required
                      />
                      <Select
                        mode="single"
                        allowClear
                        className="mx-[5%] inline-block w-[35%] py-2"
                        placeholder="type"
                        options={setOptions()}
                        showArrow={true}
                        onChange={(value) => setCurentType(value)}
                        showSearch={false}
                      />
                      <div className="flex flex-row gap-2 items-center">
                        <div className="  text-base text-[#116149] font-inter font-bold ">
                          Required
                        </div>
                        <Switch
                          onChange={onChange}
                          className={
                            isChecked ? 'bg-green-700 w-12' : 'bg-gray-300 w-12'
                          }
                        />
                      </div>
                      <button className="ml-2">
                        <MdDelete
                          className=" w-6 h-6 text-red-500"
                          onClick={(e) => removeInput(index, e)}
                        />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full p-2 pt-4 h-fit">
                    <div className="flex flex-row items-center gap-2">
                      <Input
                        placeholder="Enter field name"
                        className="mt-2 font-inter text-[#116149] border-[#116149] border-t-0 border-l-0 border-r-0 border-b-dark-100 p-0.5 focus:valid:border-b-green-500 focus:invalid:border-b-red-500 transition-all"
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        required
                      />
                      <Select
                        mode="single"
                        allowClear
                        className="mx-[5%] inline-block w-[35%] py-2"
                        placeholder="type"
                        options={setOptions()}
                        showArrow={true}
                        onChange={(value) => setCurentType(value)}
                        showSearch={false}
                      />
                      <div className="flex flex-row gap-2 items-center">
                        <div className="  text-base text-[#116149] font-inter font-bold ">
                          Required
                        </div>
                        <Switch
                          onChange={onChange}
                          className={
                            isChecked ? 'bg-green-700 w-12' : 'bg-gray-300 w-12'
                          }
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Input.Group>
          </>
        );
      })}
    </>
  );
};

export default index;
