import Card from '../../components/card'
import PCard from '../../components/P_Card'
import Icon from '../../assets/svgs/iconDash.svg'
import Image from 'next/image'
import Footer from '../../components/elements/Footer'
export default ()=>{
    return (
        <div className="flex-col flex items-center border-0 border-yellow-500 font-[Poppins]">
            
            <svg  width="100%" height="300" viewBox="0 0 1728 461" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="1727" height="460" fill="#023430" stroke="black"/>
            {/* <path  d="M843 0C898.229 0 943 44.7715 943 100V324.686C943 381.743 888.726 423.166 833.691 408.114C811.616 402.076 788.049 405.034 768.15 416.338L730 438.01L691.202 453.704C679.288 458.523 666.557 461 653.705 461H63.1044C32.6848 461 6.59467 439.298 1.05515 409.387C0.353192 405.597 0 401.75 0 397.896V394.527C0 339.415 44.6773 294.738 99.7895 294.738H313.517H379.217C455.118 294.738 498.432 208.075 452.873 147.369C407.314 86.6627 450.628 0 526.528 0H843Z" fill="#00684A"/> */}
            </svg>
            <div className=" w-[clamp(200px,60%,900px)] project_cards relative top-[-150px] outline-[black]
             flex flex-col 
            ">
                <div className="text-xl font-bold md:m-2 mb-2 text-[#DEF7E5] text-center md:pl-8 md:text-start">
                    Your Projects
                </div>
                <div className="flex flex-wrap justify-center md:justify-start  gap-16 md:pl-8">
                    <Card/>
                    <PCard formName="Project 1" totalForms="10" allowedOrigins={"Public"} creationDate="25 Feb 2025"/>
                    <PCard formName="Project 1" totalForms="10" allowedOrigins={"google"} creationDate="25 Feb 2025"/>
                </div>
            </div>
            <div className='mb-5 mt-[-100px] md:w-[clamp(0px,65%,900px)] w-[70%] flex flex-col md:flex-row'>
                <div className='border-[#001E2B] border-[1px] rounded-[12px] flex md:w-[65%] flex-col md:flex-row'>
                    <div className=' md:w-[85%] flex flex-col justify-center p-2'>
                    <div className='m-2 text-xl font-bold'>
                        Projects represent your website
                    </div>
                    <div className='m-1 ml-2 text-sm text-[#001E2B99]'>
                    A project may contain multiple forms and those forms share the same domain name and reCaptcha details.
                    </div>
                    <div className='ml-2 m-2'>
                        Learn More
                    </div>
                    </div>
                    <div className='md:w-[70%] md:flex justify-center items-center hidden mb-[-20px]'>
                        <Image  src={Icon}/>
                    </div>
                </div>
                <div className='border-[#001E2B] p-3 border-[1px] mt-5 md:mt-0 rounded-[12px] flex flex-col items-center justify-between md:w-[30%] md:ml-auto '>
                    <div className='text-xl mb-[80px] font-bold'>
                        You can create upto 6 Projects.
                    </div>
                    <div className='text-[#001E2B99]'>
                        We are working to provide you more
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}