import React, { useState, useRef, useContext, useEffect, useMemo } from "react";
import Image from "next/image";
import DashboardVector from "../../../../../assets/svgs/dashboardsVector.svg";
import { Input, Space, Checkbox, message } from "antd";
import FormInput from "../../../../../components/elements/FormInput";
import Footer from "../../../../../components/elements/Footer";
import createJSONSchema from "../../../../../components/utils/JSONSchema";
import { useRouter } from "next/router";
import { AppbarContext, UserContext } from "../../../../../components/context";
import { post, API_URL } from "../../../../../components/utils/API";
import SEO from "../../../../../components/utils/SEO";
export default function NewForm() {
    const { setActive } = useContext(AppbarContext);
    let { isLoggedIn, user } = useContext(UserContext);

    let [fields, setFields] = useState([{ name: "", isRequired: false }]);

    const router = useRouter();
    const { id } = router.query;
    const formName = useRef(null),
        reCAPTCHA = useRef(null);

    const hasFileField = useMemo(
        () =>
            fields.some(
                (field) => field.type === "image" || field.type === "file"
            ),
        [fields]
    );
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const name = formName.current.input.value;
            const hasRecaptcha = reCAPTCHA.current.input.checked;
            const schema = createJSONSchema(fields);
            const body = {
                name,
                schema,
                hasRecaptcha,
                hasFileField,
                hostUrl: API_URL,
            };
            const response = await post(`/form/new/${id}`, body);
            if (response.status === "Inserted") {
                message.success("Form Created Successfully");
                router.replace(`/dashboard/project/${id}/${response.data.id}`);
            }
        } catch (err) {
            message.error("Error in creating form");
        }
    };

    useEffect(() => {
        if (!isLoggedIn) {
            setActive({
                home: false,
                dashboard: false,
                documentation: false,
                faq: false,
            });
            router.push("/signin");
        }
        setActive({
            home: false,
            dashboard: true,
            documentation: false,
            faq: false,
        });
    }, [user]);

    return (
        <>
            <SEO
                title="SaveMyForm | NewForm"
                desc={`Create New Form on SaveMyForm. SaveMyForm is a platform where yoy save your form data now
                easily and securely.No need to create a Backend for collecting
                form responses on your application`}
            />
            <div className="grid place-items-center w-screen relative">
                <div className="absolute w-full h-96 bg-[#023430] top-0 z-0">
                    <Image
                        src={DashboardVector.src}
                        height={384}
                        width={786}
                        alt="Dashboard Vector"
                        className="ml-auto object-cover h-full"
                    />
                </div>
                <div className="flex flex-col gap-8 lg:w-1/2 w-5/6 z-20 mt-16">
                    <div className="flex flex-col gap-2 ">
                        <div className="flex flex-row gap-2 items-center">
                            <h1 className=" text-[#DEF7E5] font-bold text-5xl">
                                {"New Form"}
                            </h1>
                        </div>
                        <div>
                            {/* <div className=" text-[#DEF7E5] font-base text-xl">
                                {"Project1"}
                            </div> */}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-8 shadow-[0_4px_4px_0px_#00000040] rounded-lg p-8 bg-[#ffffff]">
                            <div>
                                <Input
                                    placeholder="Form Name"
                                    className="rounded-lg border-solid border-2 border-[#01684a]"
                                    ref={formName}
                                />
                            </div>
                            <FormInput
                                fields={fields}
                                setFields={setFields}
                                hasFileField={hasFileField}
                            />
                            <div className="flex flex-row gap-2">
                                <Checkbox ref={reCAPTCHA} />
                                <div className="text-lg text-[#01684a] font-bold">
                                    has reCAPTCHA Validation ?
                                </div>
                            </div>
                            <div className="flex flex-row gap-2">
                                <button className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-lg  rounded-lg bg-green-300 p-2 w-32">
                                    Submit
                                </button>
                                <button className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-lg  rounded-lg bg-white p-2 w-32">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
