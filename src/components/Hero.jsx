import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="h-4/6" id="Home">
      <div className="max-w-6xl mx-auto mt-2 md:mt-24 md:mb-28 flex  flex-col md:flex-row justify-around   items-center ">
        <div className="">
          <h3 className="text-xl md:text-2xl  text-center   md:text-left text-slate-500 ml-3">Hai, I'm, </h3>
          <h2 className="text-4xl md:text-5xl text-center  mt-3 text-slate-950 font-extrabold md:text-left">
            Jayakrishnan S
          </h2>
          <div className="text-2xl md:text-3xl mt-2 font-medium text-sky-700">
            <TypeAnimation
              sequence={[
                "A Full Stack Developer",
                1000,
                "Proficient In MERN Stack",
                1000,
                "A Passionate Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="flex mt-10 justify-center items-center">
          <img
            src="photo2.jpg"
            alt=""
            className=" w-fit md:w-72 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
