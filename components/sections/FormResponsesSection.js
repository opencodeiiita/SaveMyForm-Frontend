import Bgimg from "../../assets/svgs/DYFR_Background.svg"
import Image from "next/image";
import Ellips from "../../assets/svgs/DYFR_Ellip.svg"
import Vector from "../../assets/svgs/DYFR_Vector.svg"
export default ()=>{
    return (
        // <Image src={Bgimg} className="try"/>
        <div className="dyfr_background">
            <Image src={Ellips} className="figma_ellipse"/>
            <Image src={Vector} className="figma_vector"/>
            <Image src={Ellips} className="figma_ellipse2"/>
            <div className="text_container">
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
    );

}