import HeroSection from "../../components/elements/HeroSection";
import Feature from "../../components/sections/feature.js";
import Footer from "../../components/sections/footer";
import Responses from "../../components/sections/responses.js";
import DownloadFormResponses from "../../components/sections/FormResponsesSection";
import SingleFileUpload from "../../components/sections/SingleFileUpload";
import ReCaptcha from "../../components/sections/reCaptcha";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Feature />
      <DownloadFormResponses />
      <Responses />
      <SingleFileUpload />
      <ReCaptcha />
      <Footer />
    </>
  );
}
