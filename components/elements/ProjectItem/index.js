import React from "react";
import { Row, Col } from "antd";
import { useRouter } from "next/router";
import { DeleteOutlined, DeleteFilled, DeleteTwoTone } from "@ant-design/icons";
import { Popconfirm } from "antd";
import { remove } from "../../utils/API";

const index = ({ name, numberOfForms, allowedOrigin, dateCreated, id , baseurl }) => {
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
        <Col span={6} className="text-center pr-28 font-inter font-normal text-base my-1">
          {numberOfForms}
        </Col>
        <Col span={6} className="px-8 font-inter font-normal text-base my-1">
          {allowedOrigin}
        </Col>
        <Col span={6} className="px-8 font-inter font-normal text-base my-1">
          {dateCreated}
        </Col>
        {/* <Popconfirm
          placement="leftTop"
          title="Are you sure you want to Delete this project?"
          // description="Are you sure? You want to delete this task"
          onConfirm={async () => {
            const res = await remove(`/project/delete/${id}`);
            //need to use reactQuery here somehow
            console.log(res);
          }}
          okText="Yes"
          cancelText="No"
        >
          <Col span={1} className="pr-6 font-inter my-1">
            <DeleteOutlined className="hover:text-red-500 text-xl font-extralight opacity-50 hover:opacity-100" />
          </Col>
        </Popconfirm> */}
      </Row>
      <div className="border-[#C@CBCB] border-[1px]"></div>
    </div>
  );
};

export default index;
