import React from "react";
import { Row, Col } from "antd";
import { useRouter } from "next/router";
import { DeleteOutlined, DeleteFilled, DeleteTwoTone } from "@ant-design/icons";
import { Popconfirm } from "antd";
import { remove } from "../../utils/API";

const index = ({
  name,
  numberOfForms,
  allowedOrigin,
  dateCreated,
  id,
  baseurl,
}) => {
  const router = useRouter();
  return (
    <div
      className="hover:bg-slate-100 cursor-pointer"
      onClick={() => router.push(`${baseurl}/${id}`)}
    >
      <Row>
        <Col
          span={6}
          className="pl-10 pr-8 font-inter font-normal text-base text-[#006DFB] my-1"
        >
          {name}
        </Col>
        <Col
          span={6}
          className="text-center pr-28 font-inter font-normal text-base my-1"
        >
          {numberOfForms}
        </Col>
        <Col span={6} className="px-8 font-inter font-normal text-base my-1">
          {allowedOrigin}
        </Col>
        <Col span={6} className="px-8 font-inter font-normal text-base my-1">
          {dateCreated}
        </Col>
      </Row>
      <div className="border-[#C@CBCB] border-[1px]"></div>
    </div>
  );
};

export default index;
