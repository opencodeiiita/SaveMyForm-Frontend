import React, { useState, useEffect } from "react";
import { Input, Button, message } from "antd";
import { patch } from "../../components/utils/API";
import { UserContext } from "../../components/context";
import { useContext } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useQueryClient } from "@tanstack/react-query";
import Avatar from "../../components/elements/Avatar";
import SEO from "../../components/utils/SEO";
import Footer from "../../components/elements/Footer";
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
            <SEO
                title={`SaveMyForm | ${name?.toUpperCase()}`}
                desc={`Profile page of ${name}. SaveMyForm. SaveMyForm is a platform where yoy save your form data now
                easily and securely.No need to create a Backend for collecting
                form responses on your application`}
            />
            <div className="grid place-items-center w-screen relative">
                <div className="flex flex-col gap-8 lg:w-1/2 w-5/6 z-20 mt-16">
                    <div className="flex flex-col gap-2 ">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div className="h-32 w-32  rounded-full border-solid p-2 bg-[#fbeefc]">
                                <Avatar seed={name} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 shadow-[0_4px_4px_0px_fbeefc] rounded-lg p-8 bg-[#ffffff]">
                        <div className="flex flex-row items-center gap-4 bg-[#fbeefc]  rounded-lg px-4 pl-0">
                            <div
                                className="cursor-pointer text-lg font-semibold hover:bg-[#EEA5F4] hover:rounded-l-lg p-4 "
                                onClick={() => {
                                    setPasswordTab(false);
                                }}
                            >
                                Account
                            </div>

                            <div
                                className="cursor-pointer text-lg font-semibold hover:bg-[#EEA5F4] p-4 "
                                onClick={() => {
                                    setPasswordTab(true);
                                }}
                            >
                                Password
                            </div>
                        </div>
                        {!passwordTab && (
                            <div>
                                <Input
                                    placeholder="Name"
                                    className={`${
                                        passwordTab ? "hidden" : "block"
                                    } rounded-lg border-solid border-2 border-[#01684a]`}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    value={name}
                                    size="large"
                                />
                            </div>
                        )}
                        {!passwordTab && (
                            <div>
                                <Input
                                    placeholder="Email Address"
                                    className={`${
                                        passwordTab ? "hidden" : "block"
                                    } rounded-lg border-solid border-2 border-[#01684a]`}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    value={email}
                                    size="large"
                                />
                            </div>
                        )}

                        {passwordTab && (
                            <div>
                                <Input.Password
                                    className={`rounded-lg border-solid border-2 border-[#01684a]`}
                                    placeholder="Old Password"
                                    visibilityToggle={{
                                        visible: oldPasswordVisible,
                                        onVisibleChange: setOldPasswordVisible,
                                    }}
                                    onChange={(e) => {
                                        setOldPassword(e.target.value);
                                    }}
                                    value={oldPassword}
                                    size="large"
                                />
                            </div>
                        )}
                        {passwordTab && (
                            <div>
                                <Input.Password
                                    className="rounded-lg border-solid border-2 border-[#01684a]"
                                    placeholder="New Password"
                                    visibilityToggle={{
                                        visible: newPasswordVisible,
                                        onVisibleChange: setNewPasswordVisible,
                                    }}
                                    onChange={(e) => {
                                        setNewPassword(e.target.value);
                                    }}
                                    value={newPassword}
                                    size="large"
                                />
                            </div>
                        )}
                        {passwordTab && (
                            <div>
                                <Input.Password
                                    className="rounded-lg border-solid border-2 border-[#01684a]"
                                    placeholder="Confirm Password"
                                    visibilityToggle={{
                                        visible: confirmPasswordVisible,
                                        onVisibleChange:
                                            setConfirmPasswordVisible,
                                    }}
                                    onChange={(e) => {
                                        setConfPassword(e.target.value);
                                    }}
                                    value={confPassword}
                                    size="large"
                                />
                            </div>
                        )}
                        <div className="flex flex-row gap-2">
                            <button
                                className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-lg  rounded-lg bg-[#fbeefc] p-2 w-32"
                                onClick={() => {
                                    {
                                        passwordTab
                                            ? validatePasswords()
                                            : updateUser();
                                    }
                                }}
                            >
                                Save
                            </button>
                            <button
                                className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-lg  rounded-lg bg-white p-2 w-32"
                                onClick={() => {
                                    reset();
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Settings;
