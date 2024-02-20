import React, { useState } from "react";
import { faqs } from "../constants/faqs";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main>
      <h1>FAQs</h1>
      <div className="divide-y-2 divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {activeIndex === index ? (
                <BsChevronUp className="w-6 h-6" />
              ) : (
                <BsChevronDown className="w-6 h-6" />
              )}
            </div>
            {activeIndex === index && <p className="mt-2 ">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
