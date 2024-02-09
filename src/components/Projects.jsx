import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <div className="max-w-6xl mx-auto mb-14">
      <div>
        <h1 className="text-center font-bold text-3xl text-black underline">
          Projects
        </h1>
      </div>

      <div className="flex flex-col md:flex-row mt-20 justify-between ">
        <div className="w-full md:w-6/12  p-6">
          <img
            src="Algo Xpert.png"
            alt=""
            className="object-cover hover:scale-90  rounded-md transition ease-in "
          />
        </div>
        <div className="w-full md:w-6/12 flex flex-col mx-8 md:ml-11 ">
          <h2 className="text-left text-2xl font-semibold text-black ">
            Algo Xpert
          </h2>
          <p className="mt-10 text-left md:text-justify text-lg ">
            A Web App where users can solve DSA questions with the language of
            their preferance.
          </p>
          <div className="flex flex-wrap gap-4 mt-5 ">
            <div className="p-3 shadow-lg rounded-md cursor-pointer">
              <p>React</p>
            </div>
            <div className="p-3 shadow-lg rounded-md cursor-pointer">
              <p>Node js</p>
            </div>
            <div className="p-3 shadow-lg rounded-md cursor-pointer">
              <p>Express js</p>
            </div>
            <div className="p-3 shadow-lg rounded-md cursor-pointer">
              <p>Mongo DB</p>
            </div>
            <div className="p-3 shadow-lg rounded-md cursor-pointer">
              <p>Judege0</p>
            </div>
          </div>
          <div className="ml-3 mt-5">
            <button className="p-3 bg-sky-900 rounded-lg hover:bg-sky-600">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#f6f4f4" }}
                size="xl"
              />
              <span className="ml-3 text-white">Github</span>
            </button>
            <button className="ml-5 p-3 bg-sky-900 rounded-lg hover:bg-sky-600">
              <FontAwesomeIcon
                icon={faLink}
                size="xl"
                style={{ color: "#ffffff" }}
              />
              <span className="ml-3 text-white">Live Demo</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-20 justify-between  ">
        <div className="w-full md:w-6/12  p-6">
          <img
            src="VillaVista.png"
            alt=""
            className="object-cover  hover:scale-90  rounded-md transition ease-in"
          />
        </div>
        <div className="w-full md:w-6/12 flex flex-col mx-8 md:ml-11 ">
          <h2 className="text-left text-2xl font-semibold text-black ">
            VillaVista
          </h2>
          <p className="mt-10 text-left md:text-justify text-lg  ">
            A Web App where users list out their properites for sale and rent.
          </p>
          <div className="flex flex-wrap gap-4 mt-5 ">
            <div className="p-3 shadow-lg rounded-md cursor-pointer">
              <p>React</p>
            </div>
            <div className="p-3 shadow-lg rounded-md cursor-pointer">
              <p>Node js</p>
            </div>
            <div className="p-3 shadow-lg rounded-md cursor-pointer">
              <p>Express js</p>
            </div>
            <div className="p-3 shadow-lg rounded-md cursor-pointer">
              <p>Mongo DB</p>
            </div>
            <div className="p-3 shadow-lg rounded-md cursor-pointer">
              <p>Firebase</p>
            </div>
          </div>
          <div className="ml-3 mt-5">
            <a href="http://">
              <button className="p-3 bg-sky-900 rounded-lg hover:bg-sky-600">
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "#f6f4f4" }}
                  size="xl"
                />
                <span className="ml-3 text-white">Github</span>
              </button>
            </a>

            <button className="ml-5 p-3 bg-sky-900 rounded-lg hover:bg-sky-600">
              <FontAwesomeIcon
                icon={faLink}
                size="xl"
                style={{ color: "#ffffff" }}
              />
              <span className="ml-3 text-white">Live Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
