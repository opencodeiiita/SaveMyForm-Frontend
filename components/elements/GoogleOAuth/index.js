import React from "react"
import { FcGoogle } from "react-icons/fc";
import {get} from "../../utils/API"

export default function GoogleOAuth(){

    const click = async () => {
        console.log("clicked");
        const response = await get("/auth/google")
        console.log(response.data.data.url)
        window.open(response.data.data.url,"_self")
    }

    return(
        <div>
            <button 
            type="submit" 
            className="flex justify-between items-center border-2 rounded-lg border-[#555656] border-opacity-30 w-full my-2 py-3"
            onClick={click}
            >
            <div className="w-1/2">
            
            </div>
            <div className="px-1">
                <FcGoogle/>
            </div>
            <div className="w-full text-left opacity-80 font-inter font-semibold">
                Sign in with Google
            </div>
            </button>
        </div>
    )
}