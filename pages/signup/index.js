import Image from 'next/image';
import React, { useState } from 'react';
import backimage from '../../assets/images/illustrations/signin.png';
import { post } from '../../components/utils/API';
import { storeLS } from '../../components/utils/LocalStorage';
import { useRouter } from 'next/router';
import { message } from 'antd';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { UserContext } from '../../components/context';
import GoogleOAuth from '../../components/elements/GoogleOAuth';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function SignUp() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const { setIsLoggedIn, setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
  async function handleClick(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      message.error('Passwords does not match');
      return;
    }
    if (!executeRecaptcha) {
      message.error('reCaptcha failed');
      return;
    }
    try {
      const token = await executeRecaptcha();
      if (!token) {
        message.error('reCaptcha failed');
        return;
      }

      let result = await post('/signup', {
        name: name,
        email: email,
        password: password,
        recaptcha_token: token,
      });

      if (result?.data?.data?.secret) {
        storeLS('secret', result.data.data.secret);
        message.success('Sign up succesful!');
        setIsLoggedIn(true);
        setUser(res.data.data);
        if (!res.data.data.verified) {
          router.push('/verify');
        } else {
          router.push('/dashboard');
        }
      } else {
        alert('Registration Failed');
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-[calc(100vh-76px)] w-full ">
        <div className="hidden sm:flex overflow-auto">
          <Image
            src={backimage}
            className="object-contain"
            alt={'backkImage'}
          />
        </div>
        <div className=" flex flex-col justify-center">
          <form className="max-w-[500px] w-full mx-auto rounded-lg p-10 ">
            <h2 className="text-4xl text-center text- p-5 text-[#00694B] font-bold">Sign up</h2>
            <div className="flex flex-col py-2 text-[#00694B] ">
              <input
                placeholder="Name"
                className="border-2 font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              ></input>
            </div>
            <div className="flex flex-col py-2 text-[#00694B] ">
              <input
                placeholder="Email"
                className="border-2 font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-blue-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div className="flex flex-col py-2 text-[#00694B] relative">
              <input
                placeholder="Password"
                className="border-2 font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-blue-500"
                type={passwordToggle === false ? 'password' : 'text'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              <div className="text-2xl absolute top-5 right-3 cursor-[pointer] select-none">
                {passwordToggle === false ? (
                  <AiFillEyeInvisible onClick={() => setPasswordToggle((prev) => !prev)} />
                ) : (
                  <AiFillEye onClick={() => setPasswordToggle((prev) => !prev)} />
                )}
              </div>
            </div>
            <div className="flex flex-col py-2 text-[#00694B] relative">
              <input
                placeholder="Confirm Password"
                className="border-2 font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-blue-500"
                type={confirmPasswordToggle === false ? 'password' : 'text'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              ></input>
              <div className="text-2xl absolute top-5 right-3 cursor-[pointer] select-none">
                {confirmPasswordToggle === false ? (
                  <AiFillEyeInvisible onClick={() => setConfirmPasswordToggle((prev) => !prev)} />
                ) : (
                  <AiFillEye onClick={() => setConfirmPasswordToggle((prev) => !prev)} />
                )}
              </div>
            </div>
            <button
              onClick={(e) => handleClick(e)}
              type="submit"
              className="border-2 border-[#00694B] border-opacity-70 w-full my-2 py-3 bg-[#00694B] shadow-lg shadow-black-500/50 rounded-lg text-[#FFFFFF] hover:border-[#12AB52]"
            >
              Submit
            </button>
            <GoogleOAuth />
          </form>
        </div>
      </div>
    </>
  );
}
