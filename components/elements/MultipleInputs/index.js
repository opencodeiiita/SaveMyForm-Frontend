import React, { useState } from "react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
const MultipleInputs = ({
  addIcon,
  deleteIcon,
  placeholder,
  type,
  inputs,
  setInputs,
}) => {
  const addInput = () => {
    const size = inputs.length;
    if (inputs[size - 1].value == "") return;
    setInputs([...inputs, { value: "" }]);
  };
  const removeInput = (index, e) => {
    const temp = [...inputs];
    temp.splice(index, 1);
    setInputs(temp);
  };
  const inputChange = (index, e) => {
    const inputName = e.target.value;
    const list = [...inputs];
    list[index].value = inputName;
    setInputs(list);
  };

  return (
    <>
      {inputs.map((input, index) => {
        return (
          <>
            <Input.Group compact>
              {index !== inputs.length - 1 ? (
                <>
                  <Button
                    type="primary"
                    className="transition-all bg-red-500 border-red-500"
                    icon={deleteIcon}
                    onClick={(e) => removeInput(index, e)}
                  ></Button>
                  <Input
                    placeholder={placeholder}
                    value={input.value}
                    onChange={(e) => inputChange(index, e)}
                    className="mb-2 ml-1 text-slate-500 font-medium h-8 transition-none w-[calc(100%-35px)] border-2 border-r-[#FFFEFE] border-t-[#FFFEFE] border-l-[#FFFEFE] border-b-[#C2C8CB] bg-[#FFFEFE] focus:valid:border-b-green-500 focus:invalid:border-b-red-500 transition-all"
                    type={type}
                    // disabled
                  />
                </>
              ) : (
                <>
                  <Button
                    type="primary"
                    className="transition-all"
                    icon={addIcon}
                    onClick={addInput}
                  ></Button>
                  <Input
                    placeholder={placeholder}
                    value={input.value}
                    className=" ml-1 w-[calc(100%-35px)] border-2 h-8 border-r-[#FFFEFE] border-t-[#FFFEFE] border-l-[#FFFEFE] border-b-[#C2C8CB] bg-[#FFFEFE] focus:valid:border-b-green-500 focus:invalid:border-b-red-500 transition-all"
                    onChange={(e) => inputChange(index, e)}
                    type={type}
                  />
                </>
              )}
            </Input.Group>
          </>
        );
      })}
    </>
  );
};

export default MultipleInputs;
