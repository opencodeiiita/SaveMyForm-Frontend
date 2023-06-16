import React from 'react';
import { Input, Checkbox, Dropdown, Button, Space } from 'antd';
import { AiOutlineDown, AiOutlinePlus } from 'react-icons/ai';
import CustomParameter from '../CustomParameterInput';
export default function FormInput() {
  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: '',
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: '',
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: '',
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: '',
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const handleMenuClick = (e) => {
    console.log('click', e);
  };
  return (
    <>
      <div className="border-2 rounded-lg p-4 flex flex-col gap-2">
        <div className="flex flex-row justify-around gap-4 items-center">
          <div>
            <Dropdown menu={menuProps}>
              <Button className="rounded-lg" size="large">
                <Space>
                  Field Type
                  <AiOutlineDown />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div className="w-full">
            <Input
              placeholder="Field Name (as per HTML)"
              className="rounded-lg "
            />
          </div>
          <div>
            <Checkbox>Required</Checkbox>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <CustomParameter />
        </div>
        <div className="self-end">
          <button className="rounded-lg bg-[#DEF7E5] text-[#023430] font-semibold p-1 px-2 ">
            <Space>
              <AiOutlinePlus size={16} strokeWidth={12} />
              Add a Custom Parameter
            </Space>
          </button>
        </div>
      </div>
    </>
  );
}
