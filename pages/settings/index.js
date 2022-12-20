import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Settings = () => {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <>
      <div className="py-5 text-center bg-slate-600 mb-8">Navbar</div>
      <div className="max-w-5xl w-[90%] rounded-lg bg-[#FFFEFE] mx-auto mt-2 mb-8 shadow-[0_4px_4px_0px_#00000040] border-[#E7EEEC] border-2">
        <div className="h-24 w-24 bg-[#B1FE04] mt-12 rounded-full mx-auto "></div>
        <div className={`max-w-lg p-4 mx-auto `}>
          <Input
            placeholder="Name"
            className="mt-8 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg"
          />
          <Input
            placeholder="Email Address"
            className="mt-12 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg"
          />
          <Input.Password
            className="mt-12 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg"
            placeholder="Old Password"
            visibilityToggle={{
              visible: oldPasswordVisible,
              onVisibleChange: setOldPasswordVisible,
            }}
          />
          <Input.Password
            className="mt-12 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg"
            placeholder="New Password"
            visibilityToggle={{
              visible: newPasswordVisible,
              onVisibleChange: setNewPasswordVisible,
            }}
          />
          <Input.Password
            className="mt-12 mb-8 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg"
            placeholder="Confirm Password"
            visibilityToggle={{
              visible: confirmPasswordVisible,
              onVisibleChange: setConfirmPasswordVisible,
            }}
          />
        </div>
        <div className="ml-auto mr-0 m text-right">
          <Button
            type="default"
            className="mr-8 w-[8rem] h-10 rounded-lg font-inter font-medium text-lg text-center border-2 border-[#7FB3A4] text-[#00694B] hover:border-green-300] shadow-md hover:shadow-green-300 mb-8"
          >
            Cancel
          </Button>
          <Button
            type="primary"
            className="mr-4 w-[8rem] h-10 rounded-lg font-inter font-medium text-lg text-center hover:border-green-300] shadow-md hover:shadow-green-300 mb-8"
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default Settings;
