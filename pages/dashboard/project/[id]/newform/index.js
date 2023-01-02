import { Input, Checkbox, Label } from "antd";
export default function NewForm() {
  return (
    <>
      <div className=" mt-4">
        <div className="mx-2 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-fit w-1/1 p-5">
          <div className="flex flex-col">
            <label htmlFor="project_name" className="mx-2">
              Project Name
            </label>
            <Input
              className="inline-block w-[100%] border-2 border-r-[#FFFEFE] border-t-[#FFFEFE] border-l-[#FFFEFE] border-b-[#C2C8CB] font-normal text-xs rounded-md mt-2 bg-[#FFFEFE]"
              type="text"
              placeholder="Project Name"
              required
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="captcha" className="">
              reCAPTCHA v3
            </label>
            <Checkbox className="w-[60%] mt-2">
              Do You Want reCaptcha Support
            </Checkbox>
          </div>
        </div>
      </div>
    </>
  );
}
