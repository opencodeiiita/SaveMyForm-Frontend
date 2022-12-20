import React, { useState } from 'react'
import 'antd/dist/antd'
import { Button, Typography, Form, Input, Radio, Checkbox, Collapse } from 'antd'
import { ArrowLeftOutlined, ExclamationCircleOutlined, PlusOutlined, UserAddOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph, Link } = Typography;
const {Panel}=Collapse;

const Recap = () => {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [state, setState] = useState(false)

  const onChange1 = (e) => {
    setValue1(e.target.value);
  };
  const onChange2 = (e) => {
    setValue2(e.target.value);
  };
  const text=""

  return (
    <div>
      <h2 className='bg-purple-100 px-20 font-semibold text-lg pt-5 pb-5 text-left'><ArrowLeftOutlined className='mr-2 ' /> Register new Site</h2>
      <h2 className='bg-yellow-300 px-20 pt-5 pb-5 text-2xl font-thin text-black brightness-95'  >Get unlimited assessments using <span className='text-sky-600' > reCAPTCHA Enterprise</span></h2>
      <Form className='mt-3 w-auto'>
        <h2 className='font-bold ml-24 text-lg tracking-wider'>Label<ExclamationCircleOutlined className='ml-10' /></h2>
        <Input className='ml-24  border-l-blue-300 text-lg underline-offset-auto w-1/2' maxLength={50} placeholder='e.g. example.com'></Input>
        <h2 className='font-bold ml-24 mt-8 mb-2 text-lg tracking-wider'>reCAPTCHA type<ExclamationCircleOutlined className='ml-10' /></h2>
        <div className='ml-24 '>
          <Radio.Group onChange={onChange1} className='flex flex-col mb-3' value={value1}>
            <Radio value={1} onClick={() => setState(false)} className='text-slate-400 tracking-wider p-2 '><span className='ml-2 mr-20  tracking-widest text-zinc-900 font-medium'>reCAPTCHA v3</span> Verify requests with a score</Radio>
            <Radio value={2} onClick={() => setState(true)} className='text-slate-400 tracking-wider p-2'><span className='ml-2 mr-20 tracking-widest text-zinc-900 font-medium'>reCAPTCHA v2</span> Verify requests with a challenge</Radio>
          </Radio.Group>
          {state && (
            <Radio.Group onChange={onChange2} className='flex flex-col ml-12' value={value2}>
              <Radio value={3} className='text-slate-400 tracking-wider  p-2'><span className='ml-2 mr-20 tracking-widest text-zinc-900 font-medium'>"I'm not a robot" Checkbox</span> Validate requests with "I'm not a robot"</Radio>
              <Radio value={4} className='text-slate-400 tracking-wider p-2'><span className='ml-2 mr-20 tracking-widest text-zinc-900 font-medium'>Invisible reCAPTCHA badge</span> Validate requests in the background</Radio>
              <Radio value={5} className='text-slate-400 tracking-wider p-2'><span className='ml-2 mr-20 tracking-widest text-zinc-900 font-medium'>reCAPTCHA Android</span> Validate requests in your android app</Radio>
            </Radio.Group>
          )}
        </div>
        <h2 className='font-bold ml-24 text-lg tracking-wider'>Domains<ExclamationCircleOutlined className='ml-10' /></h2>
        <div className='ml-24 mt-6 flex flex-row'>
          <PlusOutlined className='mr-5' /><Input className='  border-l-blue-300 text-lg underline-offset-auto w-1/2' placeholder='Add a domain, e.g. example.com'></Input>
        </div>
        <h2 className='font-bold ml-24 text-lg tracking-wider'>Owners</h2>
        <h3 className='ml-24 font-medium text-slate-400'>nandaaman1234@gmail.com</h3>
        <div className='ml-24 mt-6 flex flex-row'>
          <UserAddOutlined className='mr-5 ' /><Input className=' border-l-blue-300 text-lg underline-offset-auto w-1/2' placeholder='Enter email addresses'></Input>
        </div>
        <div className='ml-24 mt-6 h-auto'>
          <Checkbox className='font-bold tracking-widest'>Accept the reCAPTCHA Terms of Service</Checkbox>
          <Paragraph className='ml-10 mt-6 text-sm text-slate-400 w-1/2 '>By accessing or using the reCAPTCHA APIs, you agree to the Google APIs <span className='text-blue-900 brightness-200'>Terms of Use</span>,Google  <span className='text-blue-900 brightness-200'>Terms of Use</span>, and to the Additional Terms below. Please read and understand all applicable terms and policies before accessing the APIs.</Paragraph>
        </div>
        <div className='w-1/2'>
          <Collapse defaultActiveKey={['1']} ghost className='ml-24'>
            <Panel header="reCAPTCHA Terms Of Service" className='text-slate-900 font-semibold'>
              <p className='text-xs  text-slate-400'>You acknowledge and understand that the reCAPTCHA API works by collecting hardware and software information, such as device and application data, and sending these data to Google for analysis. The information collected in connection with your use of the service will be used for improving reCAPTCHA and for general security purposes. It will not be used for personalized advertising by Google. Pursuant to Section 3(d) of the Google APIs Terms of Service, you agree that if you use the APIs that it is your responsibility to provide any necessary notices or consents for the collection and sharing of this data with Google. For users in the European Union, you and your API Client(s) must comply with the <span className='text-blue-900 brightness-200'> EU User Consent Policy.</span> Your use of reCAPTCHA is subject to <span className='text-blue-900 brightness-200'>call limits</span>. Google may in its sole discretion enforce these limits through any of the means described at <span className='text-blue-900 brightness-200'>call limits</span> or in these terms of service.</p>
            </Panel>
           
          </Collapse>
        </div>
        <div className='ml-24 mt-24 '>
          <Checkbox className='font-bold tracking-wider'>Send alerts to owners</Checkbox>
          <ExclamationCircleOutlined className='ml-10' />
        </div>
        <div className='ml-24 mt-24 mb-28'>
          <Button className=' bg-transparent border-none text-blue-500 cursor-pointer font-semibold'>CANCEL</Button>
          <Button className='ml-16 bg-blue-500  text-white cursor-pointer font-semibold'>SUBMIT</Button>
        </div>
      </Form>
    </div>
  )
}

export default Recap