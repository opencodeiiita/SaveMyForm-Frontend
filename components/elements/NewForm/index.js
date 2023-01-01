import React, { useState } from "react";
import { Input, Checkbox } from "antd";
import { Select } from "antd";
const index = () => {
  const [formName, setFormName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const options = [
    { label: "button", value: "button" },
    { label: "checkbox", value: "checkbox" },
    { label: "color", value: "color" },
    { label: "date", value: "date" },
    { label: "datetime-local", value: "datetime-local" },
    { label: "email", value: "email" },
    { label: "file", value: "file" },
    { label: "hidden", value: "hidden" },
    { label: "image", value: "image" },
    { label: "month", value: "month" },
    { label: "number", value: "number" },
    { label: "password", value: "password" },
    { label: "radio", value: "radio" },
    { label: "range", value: "range" },
    { label: "reset", value: "reset" },
    { label: "search", value: "search" },
    { label: "submit", value: "submit" },
    { label: "tel", value: "tel" },
    { label: "text", value: "text" },
    { label: "time", value: "time" },
    { label: "url", value: "url" },
    { label: "week", value: "week" },
  ];
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <>
      <div className="mx-2 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-2 h-fit w-[calc(100%-16px)]">
        <Input
          placeholder="Name"
          className="inline-block w-[35%] border-2 border-r-[#FFFEFE] border-t-[#FFFEFE] border-l-[#FFFEFE] border-b-[#C2C8CB] font-normal text-xs rounded-md bg-[#FFFEFE]"
          type="text"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          required
        />
        <Select
          mode="single"
          allowClear
          className="mx-[5%] inline-block w-[35%] py-2"
          placeholder="type"
          options={options}
          showArrow={true}
          showSearch={false}
        />
        <Checkbox
          className="w-[20%]"
          onChange={handleChange}
          checked={isChecked}
        >
          Required
        </Checkbox>
      </div>
    </>
  );
};

export default index;
