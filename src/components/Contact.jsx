import {
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Contact() {
  const email = "jkmerndev@gmail.com";
  const [copied, setcopied] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard.writeText(email);
    setcopied(true);
    setTimeout(() => {
      setcopied(false);
    }, 2000);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <h1 className="text-center font-bold text-3xl text-black underline">
          Contact
        </h1>
        <div className="flex flex-col my-12">
          <div className="flex flex-col md:flex-row  gap-4 justify-center items-center text-center">
            <p className="text-2xl text-slate-800 ">{email}</p>
            <button onClick={handleCopyClick} className="flex flex-col ">
              <FontAwesomeIcon
                icon={faCopy}
                style={{ color: "#0957dc" }}
                size="xl" 
                className="mt-4"
              />
            </button>
            <a href={`mailto:${email}`}>
              <button className="py-3 px-5  bg-sky-900  hover:bg-sky-600 text-white rounded-lg mt-6 md:mt-0">
                Send Email
              </button>
            </a>
          </div>
          {copied && <p className="fixed top-[72%] md:top-[80%] right-[42%]  md:right-[44%] text-center">Copied!!</p>}
          <div className="flex  gap-4  justify-center items-center mt-10 mx-6  ">
            <a href="http://">
              <button className="p-3   bg-teal-900  hover:bg-sky-600  text-white  rounded-xl ">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#ffffff" }}
                  size="xl"
                  className="rounded-xl mb-1"
                  
                />
                <span className="ml-2 "> Linkedin</span>
              </button>
            </a>
            <a href="http://">
              <button className="p-3  bg-teal-900  hover:bg-sky-600  text-white  rounded-xl">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="xl"
                  style={{ color: "#f0f2f4" }}
                  className="rounded-xl mb-1"
                />
                <span className="ml-2">Twitter</span>
              </button>
            </a>

            <a href="http://">
              <button className="p-3  bg-teal-900  hover:bg-sky-600  text-white  rounded-xl ">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="xl"
                  style={{ color: "#fafafa" }}
                  className="rounded-xl mb-1"
                />
                <span className="ml-3">Instagram</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
