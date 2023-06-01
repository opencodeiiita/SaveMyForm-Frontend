import { Popover,Button } from 'antd';
import infopopover from "../../assets/images/illustrations/info-popover.png"
import  Image  from 'next/Image';
export default function Pop(props){
    return (
      <Popover content={props.content} title={props.title}>
        <Image src={infopopover} alt="info" className='h-6 w-6' />
      </Popover>
    );
}