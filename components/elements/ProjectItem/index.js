import React from "react";
import { Row, Col } from "antd";

const index = ({ name, numberOfForms, allowedOrigin, dateCreated }) => {
  return (
    <div>
      <Row>
        <Col
          span={5}
          className="ml-10 mr-6 font-inter font-normal text-base text-[#006DFB] my-1"
        >
          {name}
        </Col>
        <Col span={5} className="mx-6 font-inter font-normal text-base my-1">
          {numberOfForms}
        </Col>
        <Col span={5} className="mx-6 font-inter font-normal text-base my-1">
          {allowedOrigin}
        </Col>
        <Col span={5} className="mx-6 font-inter font-normal text-base my-1">
          {dateCreated}
        </Col>
      </Row>
      <div className="border-[#C@CBCB] border-[1px]"></div>
    </div>
  );
};

export default index;
