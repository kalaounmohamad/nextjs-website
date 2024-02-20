"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { ProjectsDetails } from "../constants/projects_details";
import FaqAccordion from "../components/FaqAccordion";

export default function Projects() {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 640); // Set the threshold for small screen width
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <h1>Projects</h1>
      <div className="flex flex-col gap-5 mt-4">
        {ProjectsDetails.map((item, index) => (
          <div
            key={index}
            id={item.id}
            className={`flex flex-col sm:flex-row items-stretch sm:gap-5  rounded-lg`}
          >
            {index % 2 === 0 || smallScreen ? (
              <>
                <div className="w-full sm:w-1/2  flex justify-center items-center">
                  <div className="relative w-full pt-[56.25%] sm:pt-[100%] lg:pt-[56.25%]">
                    {/*Here I specified at some cases 16:9 aspect ratio */}

                    <div className="absolute inset-0">
                      <Image
                        src={item.backgroundImage}
                        alt="Project Image"
                        layout="fill"
                        objectFit="cover"
                        className="sm:rounded-xl  rounded-t-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full sm:w-1/2 justify-center   rounded-xl px-6 py-8">
                  <div className="mb-3 flex gap-5">
                    <item.icon className="text-green-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-3" />
                    <h1 className="text-xl lg:text-2xl mb-3">{item.title}</h1>
                  </div>
                  <p className="lg:text-lg">{item.content}</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col w-full sm:w-1/2 justify-center  rounded-xl px-6 py-8">
                  <div className="mb-3 flex gap-5">
                    <item.icon className="text-green-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-3" />
                    <h1 className="text-xl lg:text-2xl mb-3">{item.title}</h1>
                  </div>
                  <p className="lg:text-lg">{item.content}</p>
                </div>
                <div className="w-full sm:w-1/2 relative ">
                  <div className="w-full pt-[56.25%] sm:pt-[100%] lg:pt-[56.25%] ">
                    <div className="absolute inset-0">
                      <Image
                        src={item.backgroundImage}
                        alt="Project Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <FaqAccordion />
    </main>
  );
}
