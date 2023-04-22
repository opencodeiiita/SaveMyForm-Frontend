import React, { useState } from 'react';
import { Input, Checkbox, message } from 'antd';
import { Select, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
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
    // { label: "button", value: "button" },
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
    // { label: "submit", value: "submit" },
    { label: 'tel', value: 'tel' },
    { label: 'text', value: 'text' },
    { label: 'time', value: 'time' },
    { label: 'url', value: 'url' },
    { label: 'week', value: 'week' },
  ];
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const setOptions = () => {
    let tempOptions = options;
    inputs.forEach((input) => {
      if (input.type === 'file') tempOptions.splice(5, 1);
      // tempOptions.forEach((tempOption, index) => {
      // if (tempOption.label === input.type) {
      // tempOptions.splice(index, 1);
      // }
    });
    return tempOptions;
  };
  return (
    <>
      {contextHolder}
      {inputs.map((input, index) => {
        return (
          <>
            <Input.Group compact>
              {index !== inputs.length - 1 ? (
                <>
                  <div className=" rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-2 pt-4 h-fit w-[calc(100%-16px)]">
                    <Button
                      type="primary"
                      className="transition-all bg-red-500 border-red-500 inline-block mr-4"
                      icon={<DeleteOutlined />}
                      onClick={(e) => removeInput(index, e)}
                    ></Button>
                    <div className="w-[calc(95%-32px)] inline-block">
                      <Input
                        placeholder="Name"
                        className="inline-block w-[35%] border-2 border-r-[#FFFEFE] border-t-[#FFFEFE] border-l-[#FFFEFE] border-b-[#C2C8CB] font-normal text-xs rounded-md bg-[#FFFEFE]"
                        type="text"
                        value={input.name}
                        disabled
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
                        disabled
                      />
                      <Checkbox
                        className="w-[20%]"
                        onChange={handleChange}
                        checked={input.isRequired}
                        disabled
                      >
                        Required
                      </Checkbox>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-2 pt-4 h-fit w-[calc(100%-16px)]">
                    <Button
                      type="primary"
                      className="transition-all mr-4"
                      icon={<PlusOutlined />}
                      onClick={addInput}
                    ></Button>
                    <div className="w-[calc(95%-32px)] inline-block">
                      <Input
                        placeholder="Name"
                        className="inline-block w-[35%] border-2 border-r-[#FFFEFE] border-t-[#FFFEFE] border-l-[#FFFEFE] border-b-[#C2C8CB] font-normal text-xs rounded-md bg-[#FFFEFE]"
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
                      <Checkbox
                        className="w-[20%]"
                        onChange={handleChange}
                        checked={isChecked}
                      >
                        Required
                      </Checkbox>
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
