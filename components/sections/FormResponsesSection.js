import Bgimg from "../../assets/svgs/DYFR_Background.svg"
import Image from "next/image";
import Ellips from "../../assets/svgs/DYFR_Ellip.svg"
import Vector from "../../assets/svgs/DYFR_Vector.svg";
import React from "react";
import { useInView } from "react-intersection-observer";
export default ()=>{
    const { ref: circle1, inView: circle1Visible } = useInView({
        triggerOnce: true,
      });
      const { ref: circle2, inView: circle2Visible } = useInView({
        triggerOnce: true,
      });
      const { ref: vectorImg, inView: vectorImgVisible } = useInView({
        triggerOnce: true,
      });
      const { ref: text, inView: textVisible } = useInView({
        triggerOnce: true,
      });
    return (
      <div className="relative">
        <div className="dyfr_background">
        <svg 
        className=" z-0 h-[100vh] max-600:hidden -mt-2"
        preserveAspectRatio="none"
        fill="none"
        width="100%" height="100%" viewBox="0 0 1728 1036" xmlns="http://www.w3.org/2000/svg">
<path d="M960.074 688.551C858.148 767.972 830.548 955.339 830.548 1035.7H-18V698.964L-13.3544 0H1735V161.129C1725.62 201.145 1698.3 214.616 1644.69 222.996C1591.59 235.171 1473.16 252.812 1414.83 390.708C1356.49 528.604 1162.89 584.011 1043.81 635.353C1018.8 647.82 977.564 676.013 960.074 688.551Z" fill="url(#paint0_linear_698_142)"/>
<defs>
<linearGradient id="paint0_linear_698_142" x1="-366.923" y1="71.6319" x2="1520.64" y2="809.363" gradientUnits="userSpaceOnUse">
<stop stop-color="#001823"/>
<stop offset="0.20714" stop-color="#001823"/>
<stop offset="0.903042"/>
</linearGradient>
</defs>
</svg>

            <Image ref={circle1} src={Ellips} className={`figma_ellipse reveal-bottom ${
            circle1Visible ? "active-reveal" : ""
          }`}/>
            <Image ref={vectorImg} src={Vector} className={`figma_vector reveal-bottom ${
            vectorImgVisible ? "active-reveal" : ""
          }`}/>
            <Image ref={circle2} src={Ellips} className={`figma_ellipse2 reveal-bottom ${
            circle2Visible ? "active-reveal" : ""
          }`}/>
            <div ref={text} className={`text_container reveal-bottom ${
            textVisible ? "active-reveal" : ""
          }`}>
                <div className="dyfr_text1">
                Download your form Response!
                </div>
                <div className="dyfr_text2">
                We save your form easily and securely that no other platform can
                </div>
                <div className="dyfr_text3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                </div>
            </div>
        </div>
      </div>
        
    );

}