import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div className="border shadow-md">
      <nav className="max-w-6xl mx-auto p-3  ">
        <div className="flex flex-row justify-between ">
          <div className="my-7 text-center">
            <h3 className="font-bold text-3xl md:text-4xl text-blue-600  cursor-pointer hover:scale-90 ">Jayakrishnan S</h3>
          </div>

          <ul className="flex gap-6  text-center text-xl cursor-pointer ">
            <ol className="hidden md:inline hover:underline my-7 hover:scale-95">Home</ol>
            <ol className="hidden md:inline hover:underline my-7 hover:scale-95">About</ol>
            <ol className="hidden md:inline hover:underline my-7 hover:scale-95">Skills</ol>
            <ol className="hidden md:inline hover:underline my-7 hover:scale-95">Contact</ol>
            <ol className=" my-4 hover:scale-95">
              <button className="bg-sky-600   px-3 rounded-full  py-3 text-center  text-white  hover:bg-cyan-950 hover:scale-95">
                <span>
                  {/* <FontAwesomeIcon icon={faArrowDown} className="mr-1" /> */}
                  Resume
                </span>
              </button>
            </ol>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
