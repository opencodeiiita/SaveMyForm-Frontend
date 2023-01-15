import Accordion from "../../components/elements/accordion";
import faqs from "./faqs.json";
import { Collapse, Text } from "@nextui-org/react";
export default function FAQ() {
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
  //   console.log(faqs);
  return (
    <>
      <div className="flex justify-center">
        <Collapse
          className="mt-8 mb-2 font-bold text-xl w-full max-w-2xl text-[#00694B] rounded-lg shadow-[0_2px_2px_rgba(0,0,0,0.25)] px-4"
          title="What is SaveMyForm?"
        >
          <Text className="font-normal">
            For frontend-only applications if the developer wants to collect
            form submissions from his/her users, he/she requires to create a
            complete backend application for it. It Solves the problem by
            providing the developers a url which they can use for form
            submissions by sending a POST request to the url.
          </Text>
        </Collapse>
      </div>

      {faqs.map((faq) => (
        <div className="flex justify-center my-2">
          <Collapse
            className="font-bold text-xl w-full max-w-2xl text-[#00694B] rounded-lg shadow-[0_2px_2px_rgba(0,0,0,0.25)] px-4"
            title={faq.Question}
          >
            <Text className="font-normal">{faq.Answer}</Text>
          </Collapse>
        </div>
      ))}
    </>
  );
}
