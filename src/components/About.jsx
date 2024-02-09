import React from "react";

function About() {
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="mt-7">
        <h1 className="text-center font-bold text-3xl text-black underline">
          ABOUT ME
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center"> {/* Center the content horizontally and vertically */}
          <div className=" md:w-6/12 mt-4">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5769fc401b631bab1addb2ab/1541580611624-TE64QGKRJG8SWAIUS7NS/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI6FXy8c9PWtBlqAVlUS5izpdcIXDZqDYvprRqZ29Pw0o/coding-freak.gif"
              alt=""
              className=""
            />
          </div>
          <div className=" md:w-6/12 mt-1 md:mt-4 p-3 flex justify-center items-center"> {/* Center the content horizontally and vertically */}
            <p className="text-justify text-lg">
              Welcome! I'm Jayakrishnan S, a MERN stack developer passionate about
              crafting dynamic web experiences. With expertise in MongoDB,
              Express.js, React.js, and Node.js, I specialize in building robust
              and scalable applications. I thrive on continuous learning and
              collaboration, delivering innovative solutions that exceed
              expectations. Let's bring your ideas to life together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
