import {PlusOutlined} from "@ant-design/icons";
export default (props)=>{
    return (
        <div className="bg-[#FFFEFE] shadow-[0px_4px_8px_rgba(0,0,0,0.25)] h-[180px] w-[230px] cursor-pointer rounded-[12px]
        flex justify-center flex-col items-center hover:bg-[#DEF7E5] transition-all duration-200
        "
        >
                <div>
                <PlusOutlined  className="text-[30px]"/>
                </div>
                <div className="select-none text-base text-[#023430] font-semibold">
                    Create a Project
                </div>
        </div>
    )
}