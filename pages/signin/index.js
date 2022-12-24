import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState, useEffect } from "react";
import Image from "next/image";
import backimage from "../../assets/images/illustrations/signin.png";
import { post } from "../../components/utils/API";
import { storeLS, getLS } from "../../components/utils/LocalStorage";
import { message } from "antd";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();
  useEffect(() => {
    if (getLS("secret")) {
      router.replace("/dashboard");
    }
  }, []);
  let [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Sign in was Successful",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Sign in Failed",
    });
  };
  let toggle = () => {
    setOpen(!open);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/login", {
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
      recaptcha_token: "breh",
    })
      .then((res) => {
        storeLS("secret", res.data.data.secret);
        success();
        router.replace("/dashboard");
      })
      .catch((err) => error());
  };

  return (
    <>
      {contextHolder}
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:flex overflow-auto">
          <Image src={backimage} className="object-contain" />
        </div>
        <div className=" flex flex-col justify-center">
          <form
            onSubmit={handleSubmit}
            className="max-w-[500px] w-full mx-auto rounded-lg p-10 "
          >
            <h2 className="text-4xl text-center text- p-5 text-[#00694B] font-bold">
              Log In
            </h2>
            <div className="flex flex-col py-2 text-[#00694B] ">
              <input
                placeholder="Email"
                className="border-[1px] font-normal rounded-lg bg-[#FFFFFF] p-3 focus:valid:border-green-500 focus:invalid:border-red-500 transition-all"
                type="email"
                id="email"
                required
              ></input>
            </div>
            <div className="flex flex-col py-2 text-[#00694B] relative">
              <input
                placeholder="Password"
                className="border-[1px] font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-green-500 pass_type transition-all"
                type={open === false ? "password" : "text"}
                id="password"
                required
              ></input>
              <div className="text-2xl absolute top-5 right-3 cursor-[pointer] select-none">
                {open === false ? (
                  <AiFillEyeInvisible onClick={toggle} />
                ) : (
                  <AiFillEye onClick={toggle} />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="border-2 border-[#00694B] border-opacity-70 w-full my-2 py-3 bg-[#00694B]  rounded-lg text-[#FFFFFF] shadow-[0_0_0px_0_rgba(100,100,111,0.2)] transition-shadow duration-300   hover:shadow-[0_0px_10px_0px_rgba(100,100,111,0.8)] "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
