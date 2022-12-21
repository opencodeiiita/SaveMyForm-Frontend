import React, { useState } from 'react'
import 'antd/dist/antd'
import { Button, Form, Input, Radio } from 'antd'
import {  ExclamationCircleOutlined, PlusOutlined, UserAddOutlined, CloseOutlined } from '@ant-design/icons'

const NewProject = () => {
    const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [state, setState] = useState(false);
  const [mdomain, setdomain] = useState([{ domain: '' }])
  const [memail, setMail] = useState([{ email: '' }])

  const onChange1 = (e) => {
    setValue1(e.target.value);
  };
  const onChange2 = (e) => {
    setValue2(e.target.value);
  };

  const handleClick = () => {
    setdomain([...mdomain, { domain: '' }])
  }
  const handleClickEmail = () => {
    setMail([...memail, { email: '' }])
  }

  const handleChnageEmail = (e, index) => {
    const { name, value } = e.target;
    const list = [...memail];
    list[index][name] = value;
    setMail(list);
  }

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...mdomain];
    list[index][name] = value;
    setdomain(list);
  }
  const handleRemove = (index) => {
    const list = [...mdomain];
    list.splice(index, 1);
    setdomain(list);
    //  console.log('clkjl')
  }
  const handleRemoveEmail = (index) => {
    const list = [...memail];
    list.splice(index, 1);
    setMail(list);
    //  console.log('clkjl')
  }








  return (
    <div>
      {/* <h2 className='bg-purple-100 px-20 font-semibold text-lg pt-5 pb-5 text-left'><ArrowLeftOutlined className='mr-2 ' /> Register new Site</h2> */}
      <h2 className='bg-green-400 px-20 pt-5 pb-5 text-2xl sm:text-4xl font-bold text-black brightness-95 '  >SaveMyForm-Frontend </h2>
      <Form className='mt-3 w-auto'>
        
        <h2 className='font-bold ml-24 mt-8 mb-2 text-lg sm:text-2xl tracking-wider'>reCAPTCHA type<ExclamationCircleOutlined className='ml-10' /></h2>
        <div className='ml-24 '>
          <Radio.Group onChange={onChange1} className='flex flex-col mb-3 ' value={value1}>
            <Radio value={1} onClick={() => setState(false)} className='text-slate-400 tracking-wider p-2 sm:text-2xl sm:text-slate-60000 sm:flex '><span className='ml-2 mr-20  tracking-widest text-zinc-900 font-medium'>reCAPTCHA v3</span> Verify requests with a score</Radio>
            <Radio value={2} onClick={() => setState(true)} className='text-slate-400 tracking-wider p-2'><span className='ml-2 mr-20 tracking-widest text-zinc-900 font-medium'>reCAPTCHA v2</span> Verify requests with a challenge</Radio>
          </Radio.Group>
          {state && (
            <Radio.Group onChange={onChange2} className='flex flex-col ml-12 ' value={value2}>
              <div className='w-auto'>
              <Radio value={3}   className='ml-2 mr-20 tracking-widest text-zinc-900 font-medium pb-2'>"I'm not a robot" Checkbox</Radio>
              {/* <span className='text-slate-400 tracking-wider  p-2'>Validate requests with "I'm not a robot"</span>  */}
              </div>
              <div>
              <Radio value={4}  className='ml-2 mr-20 tracking-widest text-zinc-900 font-medium pb-2'>Invisible reCAPTCHA badge </Radio>
              {/* <span className='text-slate-400 tracking-wider p-2 w-1/2 ' >Validate requests in the background</span> */}
              </div>
              <div  className='flex flex-row'>
              <Radio value={5} className='ml-2 mr-20 tracking-widest text-zinc-900 font-medium pb-2' >Validate requests in your android app</Radio>
              {/* <span className='text-slate-400 tracking-wider p-2' >reCAPTCHA Android</span>  */}
              </div>
              
            </Radio.Group>
          )}
        </div>
        <h2 className='font-bold ml-24 text-lg tracking-wider'>Domains<ExclamationCircleOutlined className='ml-10' /></h2>

        {

          mdomain.map((x, i) => {
            return (
              <div className='ml-24 mt-6 flex flex-row h-auto'>
                <PlusOutlined className='mr-5' onClick={handleClick} />
                <Input className='  border-l-blue-300 text-lg underline-offset-auto w-1/2' placeholder='Add a domain, e.g. example.com' name='domain' onChange={e => handleChange(e, i)}></Input>

                {
                  mdomain.length > 1 && <CloseOutlined className='ml-5' onClick={() => handleRemove(i)} />
                }
              </div>
            );
          })
        }


        <h2 className='font-bold ml-24 text-lg tracking-wider'>Owners</h2>
        <h3 className='ml-24 font-medium text-slate-400'>nandaaman1234@gmail.com</h3>


        {

          memail.map((x, i) => {
            return (
              <div className='ml-24 mt-6 flex flex-row h-auto'>
                <UserAddOutlined className='mr-5' onClick={handleClickEmail} />
                <Input className='  border-l-blue-300 text-lg underline-offset-auto w-1/2' placeholder='Enter email adresses' name='email' onChange={e => handleChnageEmail(e, i)}></Input>

                {
                  memail.length > 1 && <CloseOutlined className='ml-5' onClick={() => handleRemoveEmail(i)} />
                }
              </div>
            );
          })
        }

        <div className='ml-24 mt-24 mb-28'>
          <Button className=' bg-transparent border-none text-blue-500 cursor-pointer font-semibold' >CANCEL</Button>
          <Button className='ml-16 bg-blue-500  text-white cursor-pointer font-semibold'>SUBMIT</Button>
        </div>
      </Form>
    </div>
  )
}

export default NewProject
