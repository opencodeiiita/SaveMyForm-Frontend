import React from "react";
import Link from "next/link";
export default (props) => {
    return (
        <Link href={`/dashboard/project/${props.id}`}>
            <div
                className="bg-[#FFFEFE] shadow-[0px_4px_8px_rgba(0,0,0,0.25)] h-full w-full cursor-pointer rounded-[12px]
        flex justify-center flex-col items-center hover:bg-[#DEF7E5] transition-all duration-200"
            >
                <div className="h-1/2 w-full p-5 pl-6 text-xs">
                    <div className="text-xl font-bold mb-1">
                        {props.formName}
                    </div>
                    <div className="text-sm font-medium mb-1 text-[#116149]">
                        {props.totalForms} Forms
                    </div>
                    <div className="flex flex-row flex-wrap mb-1">
                        {props.allowedOrigins.map((origin, i) => (
                            <div className="text-[#970606]" key={i}>
                                {origin}
                                {i !== props.allowedOrigins.length - 1
                                    ? ","
                                    : ""}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-1/2 w-full p-5 pl-6 text-2xs flex items-end text-[#116149] font-medium">
                    <div>Created : {props.creationDate}</div>
                </div>
            </div>
        </Link>
    );
};
