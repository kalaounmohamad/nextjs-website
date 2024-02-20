"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ProjectsDetails } from "../constants/projects_details";
import FaqAccordion from "../components/FaqAccordion";

export default function Projects() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 640); // Set the threshold for small screen width
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter projects based on selected type
  const filteredProjects =
    selectedType === "all"
      ? ProjectsDetails
      : ProjectsDetails.filter((project) => project.type === selectedType);

  return (
    <main>
      <h1 className="text-3xl text-center mb-7">Projects</h1>
      {/* Filter dropdown */}
      <div className="mb-5 text-right">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="all">All</option>
          <option value="mobile app">Mobile App</option>
          <option value="web app">Web App</option>
        </select>
      </div>
      <div className="flex flex-col gap-5 mt-4">
        {filteredProjects.map((item, index) => (
          <div
            key={index}
            id={item.id}
            className={`flex flex-col sm:flex-row items-stretch sm:gap-5  rounded-lg`}
          >
            {index % 2 === 0 || smallScreen ? (
              <>
                <div className="w-full sm:w-1/2 flex justify-center items-center ">
                  <img
                    src={item.backgroundImage}
                    alt="Project Image"
                    className="rounded-xl w-full h-80 sm:h-96"
                  />
                </div>

                <div className="flex flex-col w-full sm:w-1/2 justify-center py-4 sm:px-6 sm:py-8">
                  <div className="mb-3 flex gap-5">
                    <item.icon className="text-green-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-3" />
                    <h1 className="text-xl lg:text-2xl mb-3">{item.title}</h1>
                  </div>
                  <p className="lg:text-lg">{item.content}</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col w-full sm:w-1/2 justify-center  py-4 sm:px-6 sm:py-8">
                  <div className="mb-3 flex gap-5">
                    <item.icon className="text-green-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-3" />
                    <h1 className="text-xl lg:text-2xl mb-3">{item.title}</h1>
                  </div>
                  <p className="lg:text-lg">{item.content}</p>
                </div>
                <div className="w-full sm:w-1/2 flex justify-center items-center ">
                  <img
                    src={item.backgroundImage}
                    alt="Project Image"
                    className="rounded-xl w-full h-80 sm:h-96"
                  />
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
