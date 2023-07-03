import menu from "../../../assets/images/illustrations/menu.png";
import Image from "next/image";
import clock from "../../../assets/images/illustrations/clock.png";
import React from "react";
import moment from "moment";
import Link from "next/link";
export default function Form(props) {
  return (
    <Link href={`/dashboard/project/${props.projectId}/${props.id}`}>
      <div
        className="bg-[#FFFEFE] shadow-[0px_4px_8px_rgba(0,0,0,0.25)] h-[158px] w-full cursor-pointer
        flex justify-center flex-col items-center hover:bg-[#DEF7E5] transition-all duration-200 my-3 rounded-lg
        "
      >
        <div className="h-1/2 w-full p-5 pl-6 text-xs flex items-baseline justify-between">
          <div className="flex-row md:flex items-baseline">
            <div className="text-2xl font-bold ">{props.formName}</div>
          </div>
          <Image src={menu} className="float-right" alt="menu" />
        </div>
        <div className="w-full p-5 pl-6 text-2xs flex items-baseline text-[#116149] font-medium">
          <span>{moment(props.createdAt).fromNow()}</span>
          <button>
            <Image src={clock} className="w-3 h-3 ml-1" alt="clock" />
          </button>
        </div>
      </div>
    </Link>
  );
}
