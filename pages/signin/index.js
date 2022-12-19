import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';
import { useState } from 'react';
export default function SignIn() {
    let [open,setOpen]=useState(true);
    let toggle=()=>{
        setOpen(!open);
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="bg-gray-200"></div>
            <div className=" flex flex-col justify-center">
                <form className="max-w-[500px] w-full mx-auto rounded-lg p-10 ">
                    <h2 className="text-4xl text-center text- p-5 text-[#00694B] font-bold">
                        Log In
                    </h2>
                    <div className="flex flex-col py-2 text-[#00694B] ">
                        <input
                            placeholder="Email"
                            className="border-[1px] font-normal rounded-lg bg-[#FFFFFF] p-3 focus:valid:border-green-500 focus:invalid:border-red-500 transition-all"
                            type="email"
                            required
                        ></input>
                    </div>
                    <div className="flex flex-col py-2 text-[#00694B] relative">
                        <input
                            placeholder="Password"
                            className="border-[1px] font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-green-500 pass_type transition-all"
                            type={(open===false)?"text":"password"}
                            required
                        ></input>
                        <div className='text-2xl absolute top-5 right-3 cursor-[pointer] select-none'>
                            {
                                (open===false)?<AiFillEyeInvisible onClick={toggle}/>:<AiFillEye onClick={toggle}/>
                            }
                    
                    </div>
                    </div>
                    
                    <button
                        type="submit"
                        className="border-2 border-[#00694B] border-opacity-70 w-full my-2 py-3 bg-[#00694B] shadow-lg shadow-black-500/50 rounded-lg text-[#FFFFFF] hover:transition-all hover:scale-105 "
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
