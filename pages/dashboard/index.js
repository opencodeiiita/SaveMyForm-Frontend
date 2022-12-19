import React, { useState } from "react";
import { Typography, Col, Row, Button, Input } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import ProjectItem from "../../components/elements/ProjectItem";

export default function Dashboard() {
  const [projectNum, setProjectNum] = useState(0);

  return (
    <>
      <div className="py-5 text-center bg-slate-600 mb-8">Navbar</div>
      <div className="w-[90%] h-[10rem] rounded-lg bg-[#FFFEFE] mx-auto shadow-[0_4px_4px_0px_#00000040] border-[#E7EEEC] border-2">
        <Row>
          <Col>
            <div className="h-24 w-24 bg-[#B1FE04] my-7 rounded-full mx-8 "></div>
          </Col>
          <Col>
            <Col>
              <Typography.Title
                level={3}
                className="mt-10 mb-0 text-4xl font-inter font-medium"
              >
                Name
              </Typography.Title>
            </Col>
            <Col>
              <Typography.Title
                level={5}
                className="text-2xl font-light text-[#001E2B]"
              >
                Email Address
              </Typography.Title>
            </Col>
          </Col>
          <Col offset={14}>
            <Button className=" h-14 w-[12rem]  border-[#00694B] text-[#00694B] font-medium font-inter text-xl my-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
              Settings
            </Button>
          </Col>
        </Row>
      </div>
      <div className="w-[90%] h-[31.25rem] rounded-lg bg-[#FFFEFE] mx-auto shadow-[0_4px_4px_0px_#00000040] my-24 border-[#E7EEEC] border-2">
        <Row>
          <Col>
            <Typography.Title
              level={3}
              className="mt-3 mb-0 text-4xl font-inter font-medium ml-8"
            >
              Projects {`(${projectNum})`}
            </Typography.Title>
          </Col>
          <Col className="mt-8 ml-6 text-[#006DFB]">
            <a>Docs</a>
          </Col>
          <Col offset={13}>
            <Button className=" h-12 w-12  border-[#00694B] border-2 text-[#00694B] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300">
              <ReloadOutlined className="mb-[5px] ml-[-3px]" />
            </Button>
          </Col>
          <Col>
            <Button
              type="primary"
              className="ml-5 mr-2 h-12 w-[16.25rem]  border-[#00694B] border-2 text-[#FFFEFE] font-medium font-inter text-xl mt-4 rounded-lg hover:border-green-300] shadow-md hover:shadow-green-300"
            >
              Create Project
            </Button>
          </Col>
        </Row>
        <Row span={22}>
          <Input
            className="w-[95%] mx-auto mt-5 border-2 border-[#C2C8CB] text-[#C2CBCB] rounded-lg font-inter font-medium text-lg"
            size="large"
            placeholder="Find products by name"
            prefix={<SearchOutlined className="mr-4" />}
          />
        </Row>
        <div className="border-[#C@CBCB] border-[1px] mt-8"></div>

        <Row className="mt-3 mb-2">
          <Col
            span={5}
            className="ml-10 mr-6 font-inter font-semibold text-base"
          >
            Name
          </Col>
          <Col span={5} className="mx-6 font-inter font-semibold text-base">
            Number of Forms
          </Col>
          <Col span={5} className="mx-6 font-inter font-semibold text-base">
            Allowed Origins
          </Col>
          <Col span={5} className="mx-6 font-inter font-semibold text-base">
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
    </>
  );
}
