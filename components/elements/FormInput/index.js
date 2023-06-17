import React from 'react';
import {
  Input,
  Checkbox,
  Dropdown,
  Button,
  Space,
  Select,
  message,
} from 'antd';
import { AiOutlineDown, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import CustomParameter from '../CustomParameterInput';
export default function FormInput({ fields, setFields, hasFileField }) {
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
  const menuProps = {
    options,
    onClick: handleMenuClick,
  };
  const handleMenuClick = (e) => {
    console.log('click', e);
  };
  const addField = () => {
    if (fields.length < 10) {
      setFields([...fields, { name: '', isRequired: false }]);
    } else {
      message.error('You cannot add more than 10 fields');
    }
  };
  const handleRemove = (i) => {
    if (fields.length > 1) {
      setFields((prev) => {
        let nFields = [...prev];
        nFields.splice(i, 1);
        return nFields;
      });
    } else {
      message.error('At least 1 field is required');
    }
  };
  return (
    <>
      <div className="rounded-lg  border-solid border-2 border-[#01684a] p-4 flex flex-col gap-2">
        <div className="text-lg text-[#01684a] font-bold">
          Add Fields to your Form
        </div>
        {fields.map((field, i) => (
          <div className="flex flex-col gap-4">
            <div className="border-2 rounded-lg p-4 flex flex-col gap-2">
              <div className="flex flex-row justify-around gap-4 items-center">
                <div className="w-2/3">
                  <Select
                    mode="single"
                    tokenSeparators={[',']}
                    style={{ width: '100%' }}
                    options={
                      hasFileField
                        ? options.filter(
                            (option) =>
                              option.label !== 'file' &&
                              option.label !== 'image',
                          )
                        : options
                    }
                    showArrow={true}
                    placeholder="Select Field Type"
                    size="large"
                    maxTagCount={1}
                    value={field.type}
                    onChange={(e) =>
                      setFields((prev) => {
                        let nFields = [...prev];
                        nFields[i].type = e;
                        return nFields;
                      })
                    }
                  />
                </div>
                <div className="w-full">
                  <Input
                    placeholder="Field Name (as per HTML)"
                    className="rounded-lg "
                    value={field.name}
                    onChange={(e) =>
                      setFields((prev) => {
                        let nFields = [...prev];
                        nFields[i].name = e.target.value;
                        return nFields;
                      })
                    }
                  />
                </div>
                <div>
                  <Checkbox
                    checked={field.isRequired}
                    onChange={(e) =>
                      setFields((prev) => {
                        let nFields = [...prev];
                        nFields[i].isRequired = e.target.checked;
                        return nFields;
                      })
                    }
                  >
                    Required
                  </Checkbox>
                </div>
                <div onClick={() => handleRemove(i)}>
                  <AiOutlineClose
                    size={20}
                    strokeWidth={12}
                    className="cursor-pointer"
                    fill="#970606"
                  />
                </div>
              </div>
              {/* <div className="flex flex-col gap-2">
           <CustomParameter />
         </div>
         <div className="self-end">
           <button className="rounded-lg bg-[#DEF7E5] text-[#023430] font-semibold p-1 px-2 ">
             <Space>
               <AiOutlinePlus size={16} strokeWidth={12} />
               Add a Custom Parameter
             </Space>
           </button>
         </div> */}
            </div>
          </div>
        ))}
        <button
          className="rounded-lg bg-[#DEF7E5] text-[#023430] font-semibold p-2 w-32"
          onClick={addField}
          type="button"
        >
          <Space>
            <AiOutlinePlus size={16} strokeWidth={12} />
            New Field
          </Space>
        </button>
      </div>
    </>
  );
}
