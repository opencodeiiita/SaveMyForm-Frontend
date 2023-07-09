import React from "react";
import moment from "moment";

export default function FormResponse({ response }) {
    return (
        <>
            <div className="border-2 rounded-lg">
                <div className="p-4 flex flex-col">
                    {Object.entries(response.data).map((el) => (
                        <div className="flex flex-row gap-1">
                            <div className="text-[#001e2b] font-semibold text-sm">
                                {el[0]}:
                            </div>
                            <div className="text-[#006bfb] font-base text-sm">
                                {el[1]}
                            </div>
                        </div>
                    ))}
                    <div className="self-end text-[#001e2b] italic text-xs">
                        {moment(response.createdAt).fromNow()}
                    </div>
                </div>
            </div>
        </>
    );
}
