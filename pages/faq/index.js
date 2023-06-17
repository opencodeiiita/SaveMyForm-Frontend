import faqs from "./faqs.json";
import { Collapse, Text } from "@nextui-org/react";
import { AppbarContext } from "../../components/context";
import { useContext, useEffect } from "react";
import Footer from "../../components/sections/footer";
import React from "react";
import SEO from "../../components/utils/SEO";
export default function FAQ() {
    const { setActive } = useContext(AppbarContext);
    useEffect(() => {
        setActive({
            home: false,
            dashboard: false,
            documentation: false,
            faq: true,
        });
    }, []);
    if (process.browser) {
        let check = true;
        let a = document.getElementsByClassName("faq_header");
        let b = document.getElementsByClassName("faq_details");
        for (let i = 0; i < a.length; i++) {
            a[i].addEventListener("click", () => {
                if (check) {
                    b[i].style.paddingBottom = "20px";
                    b[i].style.maxHeight = "200px";
                    a[i].style.setProperty("--angle", "45deg");
                } else {
                    b[i].style.paddingBottom = "0px";
                    b[i].style.maxHeight = "0px";
                    a[i].style.setProperty("--angle", "0deg");
                }
                check = !check;
            });
        }
    }
    return (
        <>
            <SEO
                title="SaveMyForm | FAQs"
                desc="FAQs SaveMyForm. SaveMyForm is a platform where yoy save your form data now
                easily and securely.No need to create a Backend for collecting
                form responses on your application"
            />
            <div className="flex justify-center">
                <Collapse
                    className="mt-8 mb-2 font-bold text-xl w-full max-w-2xl text-[#00694B] rounded-lg shadow-[0_2px_2px_rgba(0,0,0,0.25)] px-4"
                    title="What is SaveMyForm?"
                >
                    <Text className="font-normal">
                        For frontend - only applications if the developer wants
                        to collect form submissions from his / her users, he /
                        she requires to create a complete backend application
                        for it.It Solves the problem by providing the developers
                        a url which they can use for form submissions by sending
                        a POST request to the url.{" "}
                    </Text>{" "}
                </Collapse>{" "}
            </div>
            {faqs.map((faq, i) => (
                <div className="flex justify-center my-2" key={i}>
                    <Collapse
                        className="font-bold text-xl w-full max-w-2xl text-[#00694B] rounded-lg shadow-[0_2px_2px_rgba(0,0,0,0.25)] px-4"
                        title={faq.Question}
                    >
                        <Text className="font-normal"> {faq.Answer} </Text>{" "}
                    </Collapse>{" "}
                </div>
            ))}{" "}
            <Footer />
        </>
    );
}
