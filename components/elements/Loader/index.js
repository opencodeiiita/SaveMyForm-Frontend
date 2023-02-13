import React from "react";
import { Loading } from "@nextui-org/react";

const Loader = () => {
  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <Loading color="success" size="lg" />;
    </div>
  );
};

export default Loader;
