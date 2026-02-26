import profile from "./assets/img/edit-1.png";
import HeroText from "./components/HeroText";
import "devicon/devicon.min.css";
import { SiPayloadcms } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import LeftMotion from "./components/FramerMotion/LeftMotion";
import RightMotion from "./components/FramerMotion/RightMotion";
import BottomMotion from "./components/FramerMotion/BottomMotion";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      {" "}
      <div className="flex">
        <ul
          className="flex justify-between justify-center w-full space-x-30 mx-25 py-6 rounded-br-lg rounded-bl-lg text-[#9C9C9C]"
          style={{ background: "#1B1B1B" }}
        >
          <li>Home</li>
          <li>Case Studies</li>
          <li>Testimonials</li>
          <li>Recent work</li>
          <li>Get In Touch</li>
        </ul>
      </div>
      <div className="flex flex-row">
        {/* left Content */}
        <div className="flex flex-col space-y-4 w-1/2 mt-40 relative left-40">
          <HeroText />
          <p className="w-100 text-[#9C9C9C] font-size-20">
            A passionate full-stack web developer from Pakistan who loves
            turning ideas into clean, fast, and user-friendly digital
            experiences.
          </p>
          <div className="relative">
            <button className="border-[#FD6F00] border-2 bg-black w-60 p-2 rounded font-semibold shadow-lg shadow-[#FD6F00]/50 hover:shadow-[#FD6F00]/40 transition duration-300 text-[#FD6F00] hover:bg-[#FD6F00] hover:text-white cursor-pointer">
              {" "}
              Hire Me
            </button>
            <button className="text-[#9C9C9C] left-70 border-[#9C9C9C] border-2 w-60 p-2 absolute rounded shadow-lg shadow-[#9C9C9C]/40 cursor-pointer">
              Download CV
            </button>
          </div>
        </div>
        {/*  Right Content */}
        <div className="relative left-30 mt-10 w-130 h-130 rounded-full">
          <img
            src={profile}
            alt="Profile"
            className="w-110 h-110 absolute bottom-14 left-8 rounded-bl-2xl rounded-br-2xl grayscale"
          />
        </div>
      </div>
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
      </div>
      <div className="w-screen min-h-screen  bg-black ">
        <div className="flex justify-center items-center text-white">
          <div className="flex justify-center items-center border-[#9C9C9C] border-2 w-60 h-16 mt-10 font-bold text-[#9C9C9C] rounded shadow-lg shadow-white/20 cursor-pointer">
            About Me
          </div>
        </div>
        <div className="bg-black text-white grid grid-cols-2 gap-6 p-10">
          <LeftMotion />
          <RightMotion />
          <div className="p-6 col-span-2 flex justify-center w-1/2 mx-auto">
            <BottomMotion />
          </div>
        </div>
        <div className="text-white flex justify-center items-center">
          <div className="flex border-[#9c9c9c] justify-center p-4 m-4 border-2 w-60 h-16">
          Projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
