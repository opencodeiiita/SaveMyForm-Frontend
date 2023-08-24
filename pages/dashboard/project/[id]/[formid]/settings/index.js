import React, { useState, useRef, useContext, useEffect, useMemo } from "react";
import Image from "next/image";
import { Input, Checkbox, message, Modal, Button, Space } from "antd";
import { useQuery, dehydrate, QueryClient } from "@tanstack/react-query";

import DashboardVector from "../../../../../../assets/svgs/dashboardsVector.svg";
import FormInput from "../../../../../../components/elements/FormInput";
import Footer from "../../../../../../components/elements/Footer";
import {
    createJSONSchema,
    schemaToInputsConverter,
} from "../../../../../../components/utils/JSONSchema";
import { useRouter } from "next/router";
import {
    AppbarContext,
    UserContext,
} from "../../../../../../components/context";
import {
    get,
    patch,
    remove,
    API_URL,
} from "../../../../../../components/utils/API";
import Loader from "../../../../../../components/elements/Loader";
import SEO from "../../../../../../components/utils/SEO";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { MdOutlineContentCopy } from "react-icons/md";

async function getProjectData(id) {
    if (id)
        return await get(`/project/dashboard/${id}`).then((data) => {
            data?.data?.data?.forms?.forEach((form) => {
                let iostr = form.date_created;
                let iostr2 = form.last_updated;
                let tempDate = new Date(iostr).toDateString().slice(4);
                let tempDate2 = new Date(iostr2).toDateString().slice(4);
                form.date_created =
                    tempDate.slice(0, 6) + "," + tempDate.slice(6);
                form.last_updated =
                    tempDate2.slice(0, 6) + "," + tempDate2.slice(6);
            });
            return data?.data?.data;
        });
    return null;
}

async function getFormData(id) {
    if (id)
        return await get(`/form/dashboard/${id}`).then((data) => {
            return data?.data?.data;
        });
    return null;
}

export default function NewForm() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const { setActive } = useContext(AppbarContext);
    let { isLoggedIn, user } = useContext(UserContext);
    const [newFormSubmissionLinkModalOpen, setNewFormSubmissionLinkModalOpen] =
        useState(false);
    let [fields, setFields] = useState([]);
    const [formName, setFormName] = useState("");
    const [hasRecaptcha, setHasRecaptcha] = useState(false);
    const [password, setPassword] = useState("");
    const [enterPasswordModalOpen, setEnterPasswordModalOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const router = useRouter();
    const { id, formid } = router.query;

    const hasFileField = useMemo(
        () =>
            fields.some(
                (field) => field.type === "image" || field.type === "file"
            ),
        [fields]
    );
    async function getNewSubmissionLink() {
        const data = await get(`/form/submissionLink/${formid}`, {
            hostUrl: API_URL,
        });
        console.log(data);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isDelete) {
                const response = await remove(`/form/${formid}`, { password });
                if (response.status === "OK") {
                    message.success("Form deleted successfully");
                    setIsDelete((prev) => !prev);
                    router.push(`/dashboard/project/${id}`);
                } else {
                    message.error(response.data.error);
                }
                setPassword("");
                setIsDelete((prev) => false);
                return;
            }
            if (!executeRecaptcha) return message.error("Recaptcha not loaded");
            const token = await executeRecaptcha("form");
            if (!token) return message.error("Recaptcha not verified");

            const name = formName;

            const schema = createJSONSchema(fields);
            const body = {
                name,
                schema,
                hasRecaptcha,
                password,
                recaptcha_token: token,
                hasFileField,
                hostUrl: API_URL,
            };
            const response = await patch(`/form/update/${formid}`, body);
            if (response.status === "OK") {
                message.success("Form updated successfully");
                router.push({
                    pathname: `/dashboard/project/${id}/${response.data._doc.formId}`,
                    query: {
                        submissionLink: response.data.submissionLink,
                    },
                });
            } else message.error(response.data.error);
        } catch (err) {
            console.log(err);
            message.error("Error in updating form");
        }
    };

    const handleCancel = async () => {
        router.back();
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

    const projectQuery = useQuery({
        queryKey: ["projectData", id],
        queryFn: () => {
            return getProjectData(id);
        },
        staleTime: 10 * 60 * 1000,
    });
    const formQuery = useQuery({
        queryKey: ["formData", formid],
        queryFn: () => {
            return getFormData(formid);
        },
        staleTime: 10 * 60 * 1000,
        enabled: !!formid,
    });
    const copySubmissionLink = () => {
        navigator.clipboard.writeText(submissionLink);
    };
    useEffect(() => {
        if (formQuery?.data) {
            const data = formQuery?.data;
            const fields = schemaToInputsConverter(data.schema);
            setFields((prev) => {
                const data = JSON.parse(JSON.stringify(fields));
                return data;
            });
            setFormName(data.name);
            setHasRecaptcha(data.hasRecaptchaVerification);
        }
    }, [formQuery?.data]);

    if (projectQuery?.isLoading) return <Loader />;

    if (projectQuery?.isSuccess)
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
                                <div className=" text-[#DEF7E5] font-base text-xl">
                                    {projectQuery.data?.name}
                                </div>
                            </div>
                        </div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setEnterPasswordModalOpen(true);
                            }}
                        >
                            <div className="flex flex-col gap-8 shadow-[0_4px_4px_0px_#00000040] rounded-lg p-8 bg-[#ffffff]">
                                <div>
                                    <Input
                                        placeholder="Form Name"
                                        className="rounded-lg border-solid border-2 border-[#01684a]"
                                        // ref={formName}
                                        value={formName}
                                        onChange={(e) =>
                                            setFormName(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <FormInput
                                    fields={fields}
                                    setFields={setFields}
                                    hasFileField={hasFileField}
                                />
                                <div className="flex flex-row gap-2">
                                    <Checkbox
                                        value={hasRecaptcha}
                                        onChange={(e) =>
                                            setHasRecaptcha(e.target.checked)
                                        }
                                    />
                                    <div className="text-lg text-[#01684a] font-bold">
                                        has reCAPTCHA Validation ?
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="text-lg text-[#01684a] font-bold">
                                        Regenerate Link ?
                                    </div>
                                    <Button
                                        className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-md rounded-lg bg-[#DEF7E5] w- h-fit pt-2 hover:border-[#01684a] hover:text-[#01684a]"
                                        onClick={async () => {
                                            await getNewSubmissionLink();
                                            setNewFormSubmissionLinkModalOpen(
                                                true
                                            );
                                        }}
                                    >
                                        Regenerate
                                    </Button>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <Button
                                        className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-md rounded-lg bg-[#DEF7E5] w-32 h-fit pt-2 hover:border-[#01684a] hover:text-[#01684a]"
                                        onClick={() => {
                                            setEnterPasswordModalOpen(true);
                                        }}
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-md rounded-lg bg-white w-32 h-fit pt-2 hover:border-[#01684a] hover:text-[#01684a]"
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-md rounded-lg bg-white w-32 text-red-500 h-fit pt-2 hover:border-red-500 hover:text-red-500"
                                        onClick={() => {
                                            setIsDelete((prev) => true);
                                            setEnterPasswordModalOpen(true);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
                <Modal
                    open={enterPasswordModalOpen}
                    centered
                    closable={false}
                    footer={[
                        <Button
                            type="primary"
                            className={
                                isDelete
                                    ? "text-red-500 bg-white hover:bg-white border-red-500 hover:border-red-500 hover:shadow-[0px_4px_8px_rgba(0,0,0,0.25)]"
                                    : "bg-[#01684a] hover:bg-[#01684a]"
                            }
                            onClick={(e) => {
                                setEnterPasswordModalOpen(false);
                                handleSubmit(e);
                            }}
                        >
                            {isDelete ? "Delete" : "Submit"}
                        </Button>,
                        <Button
                            type="primary"
                            onClick={(e) => {
                                setPassword("");
                                setIsDelete(false);
                                setEnterPasswordModalOpen(false);
                            }}
                        >
                            Cancel
                        </Button>,
                    ]}
                >
                    <h3 className="font-semibold text-xl">Enter Password</h3>
                    <p className="leading-5 ">
                        We need your password to verify that you are the owner
                        of this form.
                    </p>
                    <Space.Compact style={{ width: "100%", marginTop: 16 }}>
                        <Input
                            type="password"
                            value={password}
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className=" border-gray-300 rounded-lg"
                        />
                        {/* <Button onClick={copySubmissionLink}> */}
                        {/* <MdOutlineContentCopy /> */}
                        {/* </Button> */}
                    </Space.Compact>
                </Modal>
                <Modal
                    open={newFormSubmissionLinkModalOpen}
                    centered
                    closable={false}
                    footer={[
                        <Button
                            type="primary"
                            onClick={() => {
                                setNewFormSubmissionLinkModalOpen(false);
                                router.replace(
                                    router.asPath.split("?")[0],
                                    undefined,
                                    {
                                        shallow: true,
                                    }
                                );
                            }}
                        >
                            Ok
                        </Button>,
                    ]}
                >
                    <h3 className="font-semibold text-xl">Submission Link</h3>
                    <p className="leading-5">
                        Here is your form submission link, send POST request to
                        this link to store your form submission
                    </p>
                    <Space.Compact style={{ width: "100%", marginTop: 16 }}>
                        <Input
                            // defaultValue={submissionLink}
                            disabled
                            className="h-8 border-gray-300 rounded-l-lg"
                        />
                        <Button onClick={copySubmissionLink}>
                            <MdOutlineContentCopy />
                        </Button>
                    </Space.Compact>
                </Modal>
            </>
        );
}
