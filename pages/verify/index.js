import Image from 'next/image';
import letter from '../../assets/images/illustrations/letterbox.png';

import { UserContext } from '../../components/context';
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { get } from '../../components/utils/API';
import React from 'react';
export default function Verify() {
  const router = useRouter();
  let { isLoggedIn, user } = useContext(UserContext);
  let [loading, setLoading] = useState(true);
  let [disabled, setDisabled] = useState(true);

  async function raiseVerification() {
    setLoading(true);
    setDisabled(true);
    const response = await get('/user/raiseverification');
    if (response.status === 200) {
      setLoading(false);
    }
    setTimeout(() => {
      setDisabled(false);
    }, 5000);
  }

  useEffect(() => {
    if (router.isReady) {
      if (!isLoggedIn) {
        router.replace('/signin');
      }
      if (user?.verified) {
        router.replace('/dashboard');
      } else {
        raiseVerification();
      }
    }
  }, [router, user]);
  if (loading) {
    return (
      <div className="grid h-screen place-content-center">
        <div className="flex items-center gap-2">
          <span className="h-10 w-10 block rounded-full border-4 border-t-blue-700 animate-spin"></span>
          Loading...
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen overflow-auto">
      <div className="hidden sm:block h-full">
        <div className="bg-[#FFFEFE] flex flex-col justify-center items-center h-full ">
          <div className="py-5 object-contain flex overflow-auto">
            <svg
              width="187"
              height="200"
              viewBox="0 0 87 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.5527 62.781H15.5968C6.75038 62.781 4.821 54.9048 4.96211 50.9667C5.96524 43.0259 14.0658 40.8125 17.9907 40.6983C17.5669 33.8839 24.3035 29.1225 27.7248 27.5936C41.4982 20.4456 51.2985 30.294 54.477 36.1117C67.9855 32.8236 71.8041 40.8085 72.0248 45.2119H73.5527C82.8936 45.3647 83.5305 52.9779 82.6814 56.7655C80.2188 61.7307 75.5695 62.8447 73.5527 62.781Z"
                stroke="#12AB51"
                strokeWidth="8"
              />
              <path
                d="M39.67 0.015625H61.8924C63.5511 0.385304 64.0784 1.54046 64.1346 2.07183V51.6406C64.0948 52.9798 62.9222 53.4655 62.3409 53.5409H25.8184C24.1841 52.8893 23.7755 52.0025 23.7755 51.6406V13.1368L39.67 0.015625Z"
                fill="#116148"
              />
              <g filter="url(#filter0_d_610_201)">
                <path
                  d="M39.563 11.1237V0.043457L23.7404 13.1732L37.4471 13.28C39.027 13.0067 39.516 11.7286 39.563 11.1237Z"
                  fill="#12AB51"
                />
              </g>
              <ellipse
                cx="45.1948"
                cy="29.6"
                rx="12.4494"
                ry="11.3212"
                fill="#FDFEFE"
              />
              <path
                d="M39.7032 35.2792C39.2348 35.2792 38.834 35.1168 38.5007 34.792C38.1669 34.4667 38 34.0757 38 33.6193V31.1294H39.7032V33.6193H49.9225V31.1294H51.6257V33.6193C51.6257 34.0757 51.459 34.4667 51.1258 34.792C50.792 35.1168 50.3908 35.2792 49.9225 35.2792H39.7032ZM44.8128 31.9594L40.5548 27.8096L41.7471 26.6062L43.9612 28.7641V22H45.6644V28.7641L47.8786 26.6062L49.0709 27.8096L44.8128 31.9594Z"
                fill="#116148"
              />
              <defs>
                <filter
                  id="filter0_d_610_201"
                  x="23.7404"
                  y="0.043457"
                  width="23.8226"
                  height="21.2363"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="4" dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_610_201"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_610_201"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="text-5xl font-inter text-[#001E2B] font-semibold">
            SaveMyForm
          </div>
        </div>
      </div>

      <div className="bg-[#001E2B] flex flex-col justify-center items-center">
        <div className="flex overflow-auto">
          <Image src={letter} className="h-44 w-36" alt={'letter'} />
        </div>
        <div className="text-[#FFFFFF] text-4xl p-5 text-center font-semibold ">
          Verify your account
        </div>
        <div className="w-2/3 p-5">
          <div className="text-[#FFFFFF] text-1xl opacity-80 text-center">
            A verification link has been sent to your email: <u>{user.email}</u>
            . Please verify to complete your registration.
          </div>
        </div>
        <button
          className="bg-[#12AB52] p-2 rounded-md text-[#FFFFFF] font-inter cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
          disabled={disabled}
          onClick={raiseVerification}
        >
          Resend Link
        </button>
      </div>
    </div>
  );
}
