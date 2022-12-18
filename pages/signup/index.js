import React from "react"
import { Typography } from "antd"


export default function SignUp() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="bg-[#FFFEEF] hover:bg-[#FFFFFF]">
                
            </div>
            <div className="bg-[#00694B] flex flex-col justify-center font-sans">
                <form className="max-w-[500px] w-full mx-auto rounded-lg bg-[#0c5e46f6] p-10 ">
                    <h2 className="text-4xl text-center text- p-5 text-[#FFFEFE] font-bold">
                        SIGN UP
                    </h2>
                    <div className="flex flex-col py-2 text-[#FFFEFE] ">
                        <input placeholder="Name" className="font-normal rounded-lg bg-[#00694B] p-3" type="text"></input>
                    </div>
                    <div className="flex flex-col py-2 text-[#FFFEFE] ">
                        <input placeholder="Email" className="font-normal rounded-lg bg-[#00694B] p-3"  type="text"></input>
                    </div>
                    <div className="flex flex-col py-2 text-[#FFFEFE] ">
                        <input placeholder="Password" className="font-normal rounded-lg bg-[#00694B] p-3"  type="text"></input>
                    </div>
                    <div className="flex flex-col py-2 text-[#FFFEFE] ">
                        <input placeholder="Confirm Password" className="font-normal rounded-lg bg-[#00694B] p-3"  type="text"></input>
                    </div>
                    <button className="w-full my-2 py-3 bg-[#FFFFFF] shadow-lg shadow-white-500/50 rounded-lg text-[#00694B] hover:bg-[#FFFEEE]">Submit</button>
                </form>
            </div>
        </div>
          
      );
}
