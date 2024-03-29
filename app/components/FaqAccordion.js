import React, { useState } from "react";
import { faqs } from "../constants/faqs";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main>
      <h1 className="text-3xl py-4 text-center">FAQs</h1>
      <div className="flex flex-col border-2 border-gray-300 divide-y-2 divide-gray-300">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-4 cursor-pointer  ${
              activeIndex === index ? "bg-white" : ""
            } hover:bg-white transition duration-300`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center  transition-all duration-300 ">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              {activeIndex === index ? (
                <BsChevronUp className="w-6 h-6" />
              ) : (
                <BsChevronDown className="w-6 h-6" />
              )}
            </div>
            <div
              className={` ${
                activeIndex === index ? "mt-2 opacity-100" : "max-h-0 opacity-0"
              }  transition-all duration-300`}
            >
              <p className="text-lg">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
