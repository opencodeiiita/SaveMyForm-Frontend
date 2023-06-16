import React from 'react';
import { Dropdown, Input, Button, Space } from 'antd';
import { AiOutlineDown } from 'react-icons/ai';

export default function CustomParameter() {
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
      <div className="flex flex-row justify-around gap-4 items-center">
        <div>
          <Dropdown menu={menuProps}>
            <Button className="rounded-lg" size="large">
              <Space>
                Custom Option Type
                <AiOutlineDown />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <div className="w-full">
          <Input placeholder="Custom Option Value" className="rounded-lg " />
        </div>
      </div>
    </>
  );
}
