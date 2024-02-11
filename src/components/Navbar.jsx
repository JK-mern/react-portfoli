import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div className="border shadow-md">
      <nav className="max-w-6xl mx-auto p-3  ">
        <div className="flex flex-row justify-between ">
          <div className="my-5 md:my-7 text-center">
            <h3 className="font-bold  text-2xl md:text-4xl text-blue-600  cursor-pointer hover:scale-90 ">Jayakrishnan S</h3>
          </div>

          <ul className="flex gap-6  text-center text-xl cursor-pointer ">
            <ol className="hidden md:inline hover:underline my-7 hover:scale-95"><a href="#Home">Home</a></ol>
            <ol className="hidden md:inline hover:underline my-7 hover:scale-95"><a href="#About">About</a></ol>
            <ol className="hidden md:inline hover:underline my-7 hover:scale-95"><a href="#Skills">Skills</a></ol>
            <ol className="hidden md:inline hover:underline my-7 hover:scale-95"><a href="#Project">Projects</a></ol>
            <ol className="hidden md:inline hover:underline my-7 hover:scale-95"><a href="#Contact">Contact</a></ol>
            <ol className=" my-2 md:my-4 hover:scale-95">
              <button className="bg-sky-600  p-2  md:px-3 rounded-full  md:py-3 text-center  text-white  hover:bg-cyan-950 hover:scale-95">
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
