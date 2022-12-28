import HeroSection from "../../components/elements/HeroSection";
import Feature from "../../components/sections/feature.js";
import Footer from "../../components/sections/footer";
import Responses from "../../components/sections/responses.js";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Feature />
      {/* <div className="h-[100vh] w-[100vw] bg-red-500"></div> */}
      <Responses />
      <Footer />
    </>
  );
}
