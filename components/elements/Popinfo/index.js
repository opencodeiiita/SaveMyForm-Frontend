import React from 'react';
import { Popover, Button } from 'antd';
import infopopover from '../../../assets/images/illustrations/info-popover.png';
import Image from 'next/image';
export default function Pop(props) {
  return (
    <Popover content={props.content} title={props.title}>
      <Image src={infopopover} alt="info" className="h-6 w-6" />
    </Popover>
  );
}
