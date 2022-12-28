import React from "react"
import Image from "next/image"
import down from "../../assets/images/illustrations/Down.png"

export default function Footer(){
    return(
        <footer className="bg-[#061621] p-14 text-[#FFFFFF] leading-normal overflow-auto">
            <div className="md:text-center sm:text-left space-y-10">
                <h1 className="text-4xl font-serif">
                    <span className="text-[#FFFFFF]">Easy.</span>
                    <span className="text-[#01EC64]">Fast.</span>
                    <span className="text-[#FFFFFF]">Secured.</span>
                </h1>
                <h2 className="text-sm font-inter ">
                    <span className="text-[#FFFFFF] opacity-80">We're a diverse and passionate team that takes ownership of your design 
                    and empower you to execute the roadmap.<br></br> We stay light on our feet and truly enjoy delivering great work.</span>
                </h2>
            <div className="space-y-20">
                <h2 className="font-inter text-sm bg-white space-x-4">
                    <button className="border-2 rounded-lg bg-[#FFFFFF] border-[#12AB51] p-2">👀 Insights</button>
                    <button className="border-2 rounded-lg bg-[#FFFFFF] border-[#12AB51] p-2">👋 Contact</button>
                </h2>

                <div class="flex-grow h-px bg-[#12AB51] opacity-25"></div>

                <div className=" flex items-center justify-between ">
                    <div class="hidden md:block">
                        <svg width="87" height="67" viewBox="0 0 87 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M73.5527 62.781H15.5968C6.75038 62.781 4.821 54.9048 4.96211 50.9667C5.96524 43.0259 14.0658 40.8125 17.9907 40.6983C17.5669 33.8839 24.3035 29.1225 27.7248 27.5936C41.4982 20.4456 51.2985 30.294 54.477 36.1117C67.9855 32.8236 71.8041 40.8085 72.0248 45.2119H73.5527C82.8936 45.3647 83.5305 52.9779 82.6814 56.7655C80.2188 61.7307 75.5695 62.8447 73.5527 62.781Z" stroke="#12AB51" stroke-width="8"/>
                            <path d="M39.67 0.015625H61.8924C63.5511 0.385304 64.0784 1.54046 64.1346 2.07183V51.6406C64.0948 52.9798 62.9222 53.4655 62.3409 53.5409H25.8184C24.1841 52.8893 23.7755 52.0025 23.7755 51.6406V13.1368L39.67 0.015625Z" fill="#116148"/>
                            <g filter="url(#filter0_d_610_201)">
                            <path d="M39.563 11.1237V0.043457L23.7404 13.1732L37.4471 13.28C39.027 13.0067 39.516 11.7286 39.563 11.1237Z" fill="#12AB51"/>
                            </g>
                            <ellipse cx="45.1948" cy="29.6" rx="12.4494" ry="11.3212" fill="#FDFEFE"/>
                            <path d="M39.7032 35.2792C39.2348 35.2792 38.834 35.1168 38.5007 34.792C38.1669 34.4667 38 34.0757 38 33.6193V31.1294H39.7032V33.6193H49.9225V31.1294H51.6257V33.6193C51.6257 34.0757 51.459 34.4667 51.1258 34.792C50.792 35.1168 50.3908 35.2792 49.9225 35.2792H39.7032ZM44.8128 31.9594L40.5548 27.8096L41.7471 26.6062L43.9612 28.7641V22H45.6644V28.7641L47.8786 26.6062L49.0709 27.8096L44.8128 31.9594Z" fill="#116148"/>
                            <defs>
                            <filter id="filter0_d_610_201" x="23.7404" y="0.043457" width="23.8226" height="21.2363" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="4" dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_610_201"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_610_201" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="text-[#FFFFFF] md:text-center sm:text-left">
                    © 2022 <span className="text-[#01EC64]">SaveMyForm</span>. All Rights Reserved.
                    </div>
                    <div className="flex justify-between space-x-3">
                        <svg className="w-6 h-6 text-[#01EC64] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                            />
                        </svg>
                        <svg class="w-6 h-6 text-[#FFFFFF] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                            ></path>
                        </svg>                        
                        <svg class="w-6 h-6 text-[#01EC64] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}