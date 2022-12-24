import Image from "next/image";
import React, { useState } from "react";
import backimage from '../../assets/images/illustrations/signin.png'
import {post} from '../../components/utils/API'
import {storeLS} from '../../components/utils/LocalStorage'
import {useRouter} from 'next/router'


export default function SignUp() {           
    
    const router = useRouter()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [recaptcha_token,setRecaptcha_token]=useState("")
    async function handleClick(e){
        e.preventDefault() 
        let result = await post('/signup',{
            name: name,
            email: email,
            password: password,
            recaptcha_token: recaptcha_token

        })
       
        if(result?.data?.data?.secret)
        {
        storeLS("secret",result?.data?.data?.secret )
        router.replace("/dashboard")
        }
        else
        {
            alert("Registration Failed")
        }
    }

    return (
        <>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
            <div className="hidden sm:flex overflow-auto">
                <Image src={backimage}
                className="object-contain"
            />   
            </div>
            <div className=" flex flex-col justify-center">
                <form className="max-w-[500px] w-full mx-auto rounded-lg p-10 ">
                    <h2 className="text-4xl text-center text- p-5 text-[#00694B] font-bold">
                        Sign up
                    </h2>
                    <div className="flex flex-col py-2 text-[#00694B] ">
                        <input
                            placeholder="Name"
                            className="border-2 font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-blue-500"
                            value ={name}
                            onChange={(e)=>setName(e.target.value)}
                            type="text"
                            required
                        ></input>
                    </div>
                    <div className="flex flex-col py-2 text-[#00694B] ">
                        <input
                            placeholder="Email"
                            className="border-2 font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-blue-500"
                            type="email"
                            value = {email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="flex flex-col py-2 text-[#00694B] ">
                        <input
                            placeholder="Password"
                            className="border-2 font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-blue-500"
                            type="password"
                            value = {password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="flex flex-col py-2 text-[#00694B] ">
                        <input
                            placeholder="Enter Anything "
                            className="border-2 font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-blue-500"
                            type="password"
                            value = {recaptcha_token}
                            onChange={(e)=>setRecaptcha_token(e.target.value)}
                            required
                        ></input>
                    </div>
                    <button
                        onClick = {(e)=>handleClick(e)}
                        type="submit"
                        className="border-2 border-[#00694B] border-opacity-70 w-full my-2 py-3 bg-[#00694B] shadow-lg shadow-black-500/50 rounded-lg text-[#FFFFFF] hover:border-[#12AB52]"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    
    </>
    );
}
