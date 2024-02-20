"use client";
import React, { useEffect, useState } from "react";
import { ProjectsDetails } from "../constants/projects_details";
import FaqAccordion from "../components/FaqAccordion";

export default function Projects() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setVisibleProjects(2);
  }, [selectedType]);

  const filteredProjects =
    selectedType === "all"
      ? ProjectsDetails
      : ProjectsDetails.filter((project) => project.type === selectedType);

  const handleLoadMore = () => {
    setVisibleProjects(filteredProjects.length);
  };

  return (
    <main>
      <h1 className="text-3xl text-center mb-7">Projects</h1>

      <div className="flex flex-wrap gap-5  my-4">
        <button
          className={`btn-filter hover:opacity-75  ${
            selectedType === "all" ? "btn-primary" : "btn-secondary"
          } `}
          onClick={() => setSelectedType("all")}
        >
          All
        </button>
        <button
          className={`btn-filter hover:opacity-75 ${
            selectedType === "mobile app" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setSelectedType("mobile app")}
        >
          Mobile App
        </button>
        <button
          className={`btn-filter hover:opacity-75 ${
            selectedType === "web app" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setSelectedType("web app")}
        >
          Web App
        </button>
      </div>
      <div className="flex flex-col gap-5 mt-4">
        {filteredProjects.slice(0, visibleProjects).map((item, index) => (
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
      {visibleProjects < filteredProjects.length && (
        <button
          className="btn-primary text-lg mx-auto mt-6 sm:mt-12 sm:py-2 px-7"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
      <FaqAccordion />
    </main>
  );
}
