import {PlusOutlined} from "@ant-design/icons";
export default (props)=>{
    return (
        <div className="bg-[#FFFEFE] shadow-[0px_4px_8px_rgba(0,0,0,0.25)] h-[180px] w-[230px] cursor-pointer rounded-[12px]
        flex justify-center flex-col items-center hover:bg-[#DEF7E5] transition-all duration-200
        "
        >
                <div className="h-1/2 w-full p-5 pl-6 text-xs">
                    <div className="text-xl font-bold mb-1">
                        {props.formName}
                    </div>
                    <div className="text-sm font-medium mb-1 text-[#116149]">
                        {props.totalForms} Forms
                    </div>
                    <div className="text-[#970606] mb-1 "
                    >
                        {props.allowedOrigins}
                    </div>
                </div>
                <div className="h-1/2 w-full p-5 pl-6 text-2xs flex items-end text-[#116149] font-medium">
                    <div>
                        Created : {props.creationDate}
                    </div>
                </div>
        </div>
    )
}