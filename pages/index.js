import HeroSection from "../components/elements/HeroSection";
import Feature from "../components/sections/feature.js";
import Footer from "../components/sections/footer";
import Responses from "../components/sections/responses.js";
import DownloadFormResponses from "../components/sections/FormResponsesSection";
import SingleFileUpload from "../components/sections/SingleFileUpload";
import ReCaptcha from "../components/sections/reCaptcha";
import React, { useContext, useEffect } from "react";
import { AppbarContext } from "../components/context";
import SEO from "../components/utils/SEO";
export default function Home() {
    const { setActive } = useContext(AppbarContext);
    useEffect(() => {
        setActive({
            home: true,
            dashboard: false,
            documentation: false,
            faq: false,
        });
    }, []);
    return (
        <>
            <SEO
                title="SaveMyForm | Home"
                desc="SaveMyForm is a platform where yoy save your form data now
                easily and securely.No need to create a Backend for collecting
                form responses on your application"
            />
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
