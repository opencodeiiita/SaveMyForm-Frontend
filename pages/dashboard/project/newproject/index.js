import React, { useState } from 'react'
import 'antd/dist/antd'
import { Button, Form, Input, Radio } from 'antd'
import {  ExclamationCircleOutlined, PlusOutlined, UserAddOutlined, CloseOutlined } from '@ant-design/icons'

const NewProject = () => {
  const [value1, setValue1] = useState(1);
  const [state, setState] = useState(false);
  const [mdomain, setdomain] = useState([{ domain: '' }])
  const [memail, setMail] = useState([{ email: '' }])
  const [check1,setCheck1]=useState(false);
  const [check2,setCheck2]=useState(false);


  const onChange1 = (e) => {
    setValue1(e.target.value);
  };


  const handleClick = () => {
    setdomain([...mdomain, { domain: '' }])
    

  }
  const handleClickEmail = () => {
    setMail([...memail, { email: '' }])
  }

  const handleChnageEmail = (e, index) => {
    const { name, value } = e.target;
    let str=e.target.value
    if(!str.trim())
    setCheck2(false);
    else
    setCheck2(true);
    const list = [...memail];
    list[index][name] = value;
    setMail(list);
    
   
  }

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    let str=e.target.value
    if(!str.trim())
    setCheck1(false);
    else
    setCheck1(true);
    const list = [...mdomain];
    list[index][name] = value;
    setdomain(list);
    
    
    
  }
  const handleRemove = (index) => {
    const list = [...mdomain];
    list.splice(index, 1);
    setdomain(list);
    
  }
  const handleRemoveEmail = (index) => {
    const list = [...memail];
    list.splice(index, 1);
    setMail(list);

  }








  return (
    <div>
      {/* <h2 className='bg-purple-100 px-20 font-semibold text-lg pt-5 pb-5 text-left'><ArrowLeftOutlined className='mr-2 ' /> Register new Site</h2> */}
      <h2 className='bg-yellow-300 px-20 pt-5 pb-5 text-2xl sm:text-4xl font-bold text-black brightness-95 '  >SaveMyForm-Frontend </h2>
      <Form className='mt-3 w-auto'>
        <h2 className='font-bold ml-24 text-lg tracking-wider'>Project Name:<ExclamationCircleOutlined className='ml-10' /></h2>
        <Input className='ml-24  border-l-blue-300 text-lg underline-offset-auto w-1/2' maxLength={50} placeholder='e.g. example.com'></Input>
        <h2 className='font-bold ml-24 mt-8 mb-2 text-lg sm:text-2xl tracking-wider'>reCAPTCHA type<ExclamationCircleOutlined className='ml-10' /></h2>
        <div className='ml-24 '>
          <Radio.Group onChange={onChange1} className='flex flex-col mb-3 ' value={value1}>
            <Radio value={1} onClick={() => setState(false)} className='text-slate-400 tracking-wider p-2 sm:text-2xl sm:text-slate-60000 sm:flex '><span className='ml-2 mr-20  tracking-widest text-zinc-900 font-medium'>reCAPTCHA v3</span> Verify requests with a score</Radio>
            <Radio value={2} onClick={() => setState(true)} className='text-slate-400 tracking-wider p-2'><span className='ml-2 mr-20 tracking-widest text-zinc-900 font-medium'>reCAPTCHA v2</span> Verify requests with a challenge</Radio>
          </Radio.Group>
          {state && (
            <div  className='flex flex-col ml-12 '>
              <div className='w-auto'>
              <Input className='ml-24  border-l-blue-300 text-lg underline-offset-auto w-1/2'  placeholder='reCAPTCHA key'></Input>
              </div>
              <div className='w-auto'>
              <Input className='ml-24  border-l-blue-300 text-lg underline-offset-auto w-1/2' placeholder='reCAPTCHA SECRET'></Input>
              </div>       
            </div>
          )}
        </div>
        <h2 className='font-bold ml-24 text-lg tracking-wider'>Domains<ExclamationCircleOutlined className='ml-10' /></h2>
        {
          mdomain.map((x, i) => {
            return (
              <div className='ml-24 mt-6 flex flex-row h-auto'>
             {  
              check1 && <PlusOutlined className='mr-5' onClick={handleClick} />
             }  
                <Input className='  border-l-blue-300 text-lg underline-offset-auto w-1/2' placeholder='Add a domain, e.g. example.com' name='domain'  onChange={e => handleChange(e, i)}></Input>
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
              {

           check2&&     <UserAddOutlined className='mr-5' onClick={handleClickEmail} />
              }
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
