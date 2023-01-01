import React, { useState, useEffect } from "react";
import { Typography, Col, Row, Button, Input } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import ProjectItem from "../../components/elements/ProjectItem";
import Avatar from "../../components/elements/Avatar";
export default function Dashboard() {
    const [projectNum, setProjectNum] = useState(0);
    //Function to get screen size as the component is rendered on server side but we need the screen size of the user
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            //To make the button appear on reload
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }
    const size = useWindowSize();
    return (
        <>

            <div
                className={`${
                    size.width <= 800 ? "h-[15rem]" : "h-[10rem]"
                }   w-[90%] rounded-lg bg-[#FFFEFE] mx-auto shadow-[0_4px_4px_0px_#00000040] border-[#E7EEEC] border-2`}
            >
                <Row>
                    <Col flex="none">
                        <div className="h-24 w-24 bg-[#B1FE04] my-7 rounded-full mx-8 ">
                            <Avatar seed={"Name"} />
                        </div>
                    </Col>
                    <Col flex="none">
                        <Col className="justify-start">
                            <Typography.Title
                                level={3}
                                className="mt-10 mb-0 text-4xl font-inter font-medium text-left"
                            >
                                Name
                            </Typography.Title>
                        </Col>
                        <Col className="justify-start">
                            <Typography.Title
                                level={5}
                                className="text-2xl font-light text-[#001E2B] text-left"
                            >
                                Email Address
                            </Typography.Title>
                        </Col>
                    </Col>
                    {size.width > 800 && (
                        <>
                            <Col flex="auto">
                                <Button className="absolute right-0 mx-4 h-14 w-[12rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-xl my-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                                    Settings
                                </Button>
                            </Col>
                        </>
                    )}
                </Row>
                {size.width <= 800 && (
                    <>
                        <Row>
                            <Col flex="auto">
                                <Button className="absolute ml-8  h-14 w-[12rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-xl  rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                                    Settings
                                </Button>
                            </Col>
                        </Row>
                    </>
                )}
            </div>
            <div className="w-[90%] h-[31.25rem] rounded-lg bg-[#FFFEFE] mx-auto shadow-[0_4px_4px_0px_#00000040] my-24 border-[#E7EEEC] border-2">
                <Row>
                    <Col flex="4" className="mt-3 mb-0">
                        <Typography.Text
                            level={3}
                            className="mb-0 text-4xl font-inter font-medium ml-8"
                        >
                            Projects {`(${projectNum})`}
                        </Typography.Text>

                        <a className="mx-5 mt-8 text-[#006DFB]">Docs</a>
                    </Col>
                    {size.width > 800 && (
                        <>
                            <Col flex="1">
                                <Button className="absolute right-0 h-12 w-12  border-[#00694B] border-2 text-[#00694B] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                                    <ReloadOutlined className="mb-[5px] ml-[-3px]" />
                                </Button>
                            </Col>
                            <Col flex="1">
                                <Button
                                    type="primary"
                                    className="ml-5 mr-8 h-12 w-[16.25rem]  border-[#00694B] border-2 text-[#FFFEFE] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300"
                                >
                                    Create Project
                                </Button>
                            </Col>{" "}
                        </>
                    )}
                </Row>
                {size.width <= 800 && (
                    <>
                        <Row>
                            <Col>
                                <Button className="ml-8 h-12 w-12  border-[#00694B] border-2 text-[#00694B] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
                                    <ReloadOutlined className="mb-[5px] ml-[-3px]" />
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    type="primary"
                                    className="ml-5 mr-8 h-12 w-[16.25rem]  border-[#00694B] border-2 text-[#FFFEFE] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300"
                                >
                                    Create Project
                                </Button>
                            </Col>
                        </Row>
                    </>
                )}
                <Row span={22}>
                    <Input
                        className="w-[95%] mx-auto mt-5 border-2 border-[#C2C8CB] text-[#C2CBCB] rounded-lg font-inter font-medium text-lg"
                        size="large"
                        placeholder="Find products by name"
                        prefix={<SearchOutlined className="mr-4" />}
                    />
                </Row>
                <div className="border-[#C@CBCB] border-[1px] mt-8"></div>
                <div className="width-[100%] overflow-x-auto">
                    <div className="min-w-[768px]">
                        <Row className="mt-3 mb-2">
                            <Col
                                span={6}
                                className="pl-10 pr-6 font-inter font-semibold text-base"
                            >
                                Name
                            </Col>
                            <Col
                                span={6}
                                className="px-6 font-inter font-semibold text-base"
                            >
                                Number of Forms
                            </Col>
                            <Col
                                span={6}
                                className="px-6 font-inter font-semibold text-base"
                            >
                                Allowed Origins
                            </Col>
                            <Col
                                span={6}
                                className="px-6 font-inter font-semibold text-base"
                            >
                                Date Created
                            </Col>
                        </Row>
                        <div className="border-[#C@CBCB] border-[1px]"></div>

                        {/* ProjectItem */}
                        <ProjectItem
                            name="Project 1 with no origin"
                            numberOfForms="5"
                            allowedOrigin="Public"
                            dateCreated="January 1, 1990, 00:00 UTC"
                        />
                        <ProjectItem
                            name="Project 2 with 2 origins"
                            numberOfForms="5"
                            allowedOrigin="Public"
                            dateCreated="January 1, 1990, 00:00 UTC"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
