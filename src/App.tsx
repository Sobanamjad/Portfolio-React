import Navbar from "./components/Navbar/Navbar"
import MainContent from "./components/MainContent/MainContent"
import "devicon/devicon.min.css";
import { SiPayloadcms } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const App = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <Navbar />
      <MainContent />
      <div className="text-white">
        <h1 className="flex items-center justify-center text-4xl font-bold bg-gradient-to-r  from-white to-gray-400 text-transparent bg-clip-text">
          Experience With
        </h1>
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          <i className="devicon-html5-plain-wordmark text-8xl text-orange-500"></i>
          <i className="devicon-css3-plain-wordmark text-8xl text-blue-500"></i>
          <i className="devicon-javascript-plain text-8xl text-yellow-400"></i>
          <i className="devicon-react-original text-8xl text-sky-400"></i>
          <i className="devicon-nextjs-original text-8xl text-gray-800"></i>
          <i className="devicon-php-plain text-8xl text-indigo-600"></i>
          <i className="devicon-laravel-plain-wordmark text-8xl text-red-600"></i>
          <i className="devicon-tailwindcss-plain text-8xl text-teal-400"></i>
          <SiNextdotjs className="text-6xl text-white mt-4" />
          <SiPayloadcms className="text-white-600 w-16 h-16 mt-4" />
        </div>
        {/* <div className="flex justify-between gap-4 mt-10 bg-black">
          <div className="w-1/4 p-6 rounded text-white text-center">
            <i className="devicon-html5-plain-wordmark text-7xl mt-80"></i>
          </div>
          <div className="w-1/4 rounded text-white text-center">
            <i className="devicon-tailwindcss-plain-wordmark mb-300"
            style={{ fontSize: "180px" }}
            ></i>
          </div>
          <div className="w-1/4 p-6 rounded text-white text-center">
            Block 3
          </div>
          <div className="w-1/4 p-6 rounded text-white text-center">
            Block 4
          </div>
        </div> */}
        <div className="w-screen h-screen bg-black ">
          <div className="flex justify-center items-center text-white mt-10">
            <div className="flex justify-center items-center border-[#9C9C9C] border-2 w-60 h-16 mt-10 font-bold text-[#9C9C9C] rounded shadow-lg shadow-white/20 cursor-pointer">
              About Me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
