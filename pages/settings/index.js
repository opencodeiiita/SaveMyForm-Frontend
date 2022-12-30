import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Settings = () => {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordTab,setPasswordTab]=useState(false);
  return (
    <>
      <div className="h-24 w-24 bg-[#B1FE04] mt-8 rounded-full mx-auto "></div>
      <div 
      className="mt-8 pl-2 flex rounded-lg h-10 w-[90%] ml-auto mr-auto max-w-5xl bg-[#FFFEFE] shadow-[0_3px_4px_0px_#00000040] border-[1px]"
      >
        <div
        className={`${passwordTab?"":" border-b-[2px]"} hover:bg-[#f4f4f4] border-black cursor-pointer w-20 flex justify-center items-center ml-2`}
        onClick={()=>{setPasswordTab(false)}}
        >
            Account
        </div>
        <div
        className={`
        ${!passwordTab?"":"border-b-[2px]"}
        hover:bg-[#f4f4f4] border-black
        cursor-pointer w-20 flex justify-center items-center ml-2`}
        onClick={()=>{setPasswordTab(true)}}
        >Password</div>
      </div>
      <div className="max-w-5xl w-[90%] rounded-lg bg-[#FFFEFE] mx-auto mt-2 mb-8 shadow-[0_3px_4px_0px_#00000040] border-[1px]">
        <div className={`max-w-lg p-4 mx-auto `}>
          <Input
            placeholder="Name"
            className={`${passwordTab?"hidden":"block"} mt-8 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg`}
          />
          <Input
            placeholder="Email Address"
            className={`${passwordTab?"hidden":"block"} mt-12 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg`}
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
      </div>
      <div className="max-w-5xl w-[90%] ml-auto mr-auto">
          <Button
            type="primary"
            className="mr-4 w-[8rem] h-10 rounded-lg font-inter font-medium text-lg text-center hover:border-green-300 shadow-md mb-8 hover:scale-105"
          >
            Save
          </Button>
          <Button
            type="default"
            className="mr-8 w-[8rem] h-10 rounded-lg font-inter font-medium text-lg text-center border-1 border-[#7FB3A4] text-[#00694B] hover:border-green-300 shadow-md mb-8 hover:scale-105"
          >
            Cancel
          </Button>

        </div>
    </>
  );
};

export default Settings;
