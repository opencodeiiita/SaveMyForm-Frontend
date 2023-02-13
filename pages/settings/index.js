import React, { useState, useEffect } from "react";
import { Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { patch } from "../../components/utils/API";
import { UserContext } from "../../components/context";
import { useContext } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useQueryClient } from "@tanstack/react-query";

const Settings = () => {
  const queryClient = useQueryClient();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { user, setUser } = useContext(UserContext);
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [userPasswordVisible, setUserPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordTab, setPasswordTab] = useState(false);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [errorBool, setErrorBool] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [userPassword, setUserPassword] = useState("");
  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
  }, [user]);
  //   const success = () => {
  //     messageApi.open({
  //       type: "success",
  //       content: "Password was successfully updated",
  //     });
  //   };
  //   const error = () => {
  //     messageApi.open({
  //       type: "error",
  //       content: "Error encountered",
  //     });
  //   };
  async function handleSave() {
    if (!executeRecaptcha) {
      message.error("Recaptcha Failed");
      return;
    }
    const token = await executeRecaptcha();
    if (!token) {
      message.error("Recaptcha Failed");
      return;
    }
    patch("/user/updatepassword", {
      oldPassword: oldPassword,
      newPassword: newPassword,
      recaptcha_token: token,
    })
      .catch((err) => {
        message.error("Error Encountered");
      })
      .then(() => {
        message.success("Password was successfully updated");
      });
  }
  function validatePasswords() {
    if (oldPassword === "" || newPassword === "" || confPassword === "") {
      setErrorBool(true);
      setErrorMessage("All fields are required");
    } else if (newPassword.length < 7) {
      setErrorBool(true);
      setErrorMessage("New password length >7 required!");
    } else if (newPassword !== confPassword) {
      setErrorBool(true);
      setErrorMessage("Confirm Password does not match!");
    } else {
      setErrorBool(false);
      handleSave();
    }
  }
  const reset = () => {
    if (passwordTab == true) {
      setOldPassword("");
      setNewPassword("");
      setConfPassword("");
    } else {
      setEmail("");
      setName("");
    }
  };

  const updateUser = async () => {
    if (!executeRecaptcha) {
      message.error("Recaptcha Failed");
      return;
    }
    const token = await executeRecaptcha();
    if (!token) {
      message.error("Recaptcha Failed");
      return;
    }
    patch("/user/update", {
      name: name,
      email: email,
      password: userPassword,
      recaptcha_token: token,
    })
      .catch((err) => {
        message.error("Error Encountered");
      })
      .then(() => {
        setUser({
          name: name,
          email: email,
          verified: user.verified,
        });  
        message.success("User was successfully updated");
      });
  };
  return (
    <>
      {contextHolder}
      <div className="h-24 w-24 bg-[#B1FE04] mt-8 rounded-full mx-auto "></div>
      <div className="mt-8 pl-2 flex rounded-lg h-10 w-[90%] ml-auto mr-auto max-w-5xl bg-[#FFFEFE] shadow-[0_3px_4px_0px_#00000040] border-[1px]">
        <div
          className={`${
            passwordTab ? "" : " border-b-[2px]"
          } hover:bg-[#f4f4f4] border-black cursor-pointer w-20 flex justify-center items-center ml-2`}
          onClick={() => {
            setPasswordTab(false);
          }}
        >
          Account
        </div>
        <div
          className={`
        ${!passwordTab ? "" : "border-b-[2px]"}
        hover:bg-[#f4f4f4] border-black
        cursor-pointer w-20 flex justify-center items-center ml-2`}
          onClick={() => {
            setPasswordTab(true);
          }}
        >
          Password
        </div>
      </div>
      <div className="max-w-5xl w-[90%] rounded-lg bg-[#FFFEFE] mx-auto mt-2 mb-8 shadow-[0_3px_4px_0px_#00000040] border-[1px]">
        <div className={`max-w-lg p-4 mx-auto `}>
          <Input
            placeholder="Name"
            className={`${
              passwordTab ? "hidden" : "block"
            } mt-12 py-1 px-2 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg`}
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <Input
            placeholder="Email Address"
            className={`${
              passwordTab ? "hidden" : "block"
            } mt-12 py-1 px-2 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg`}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <Input.Password
            className={`${
              passwordTab ? "hidden" : "p-2"
            } my-12 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg`}
            placeholder="Password"
            visibilityToggle={{
              visible: userPasswordVisible,
              onVisibleChange: setUserPasswordVisible,
            }}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            value={userPassword}
          />

          {passwordTab && (
            <Input.Password
              className={`mt-12 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg`}
              placeholder="Old Password"
              visibilityToggle={{
                visible: oldPasswordVisible,
                onVisibleChange: setOldPasswordVisible,
              }}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
              value={oldPassword}
            />
          )}
          {passwordTab && (
            <Input.Password
              className="mt-12 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg"
              placeholder="New Password"
              visibilityToggle={{
                visible: newPasswordVisible,
                onVisibleChange: setNewPasswordVisible,
              }}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              value={newPassword}
            />
          )}
          {passwordTab && (
            <Input.Password
              className="mt-12 mb-8 border-2 border-[#C2C8CB] text-xl font-inter font-medium rounded-lg"
              placeholder="Confirm Password"
              visibilityToggle={{
                visible: confirmPasswordVisible,
                onVisibleChange: setConfirmPasswordVisible,
              }}
              onChange={(e) => {
                setConfPassword(e.target.value);
              }}
              value={confPassword}
            />
          )}
          {passwordTab && errorBool && (
            <div
              className="error-message"
              style={{ textAlign: "center", color: "red" }}
            >
              {errorMessage}
            </div>
          )}
        </div>
      </div>
      <div className="max-w-5xl w-[90%] ml-auto mr-auto">
        <Button
          type="primary"
          className="mr-4 w-[8rem] h-10 rounded-lg font-inter font-medium text-lg text-center hover:border-green-300 shadow-md mb-8 hover:scale-105"
          onClick={() => {
            {
              passwordTab ? validatePasswords() : updateUser(); // when user is saving name and email
            }
          }}
        >
          Save
        </Button>
        <Button
          type="default"
          className="mr-8 w-[8rem] h-10 rounded-lg font-inter font-medium text-lg text-center border-1 border-[#7FB3A4] text-[#00694B] hover:border-green-300 shadow-md mb-8 hover:scale-105"
          onClick={() => {
            reset();
          }}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default Settings;
