import profile from "./assets/img/edit-1.png";
import HeroText from "./components/HeroText";
import "devicon/devicon.min.css";
import { SiPayloadcms, SiNextdotjs } from "react-icons/si";
import LeftMotion from "./components/FramerMotion/LeftMotion";
import RightMotion from "./components/FramerMotion/RightMotion";
import BottomMotion from "./components/FramerMotion/BottomMotion";
import restoApp from "./assets/img/restoApp.png";
import foodDelivery from "./assets/img/foodDelivery.png";
import payloadcms from "./assets/img/payloadcms.png";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      {/* ================= NAVBAR ================= */}
      <div className="bg-[#1B1B1B] py-6 mx-20 rounded-b-xl">
        <ul className="flex flex-wrap justify-between max-w-7xl mx-auto px-10 text-[#9C9C9C] text-sm md:text-base">
          <li className="cursor-pointer hover:text-white">Home</li>
          <li className="cursor-pointer hover:text-white">Case Studies</li>
          <li className="cursor-pointer hover:text-white">Testimonials</li>
          <li className="cursor-pointer hover:text-white">Recent work</li>
          <li className="cursor-pointer hover:text-white">Get In Touch</li>
        </ul>
      </div>

      {/* ================= HERO ================= */}
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 py-20 gap-12">
        {/* LEFT */}
        <div className="flex flex-col space-y-4 w-full md:w-1/2 text-center md:text-left">
          <HeroText />

          <p className="text-[#9C9C9C] text-base md:text-lg">
            A passionate full-stack web developer from Pakistan who loves
            turning ideas into clean, fast, and user-friendly digital
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="border-[#FD6F00] border-2 text-white bg-black w-full sm:w-60 p-2 rounded font-semibold shadow-lg shadow-[#FD6F00]/50 hover:bg-[#FD6F00] hover:text-white transition">
              Hire Me
            </button>

            <button className="border-[#9C9C9C] border-2 w-full sm:w-60 p-2 rounded text-[#9C9C9C] shadow-lg shadow-[#9C9C9C]/40 hover:bg-[#9C9C9C] hover:text-black transition">
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-64 h-64 md:w-96 md:h-96 rounded-2xl grayscale object-cover"
          />
        </div>
      </div>

      {/* ================= EXPERIENCE ================= */}
      <div className="text-white py-20">
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          Experience With
        </h1>

        <div className="flex flex-wrap gap-8 justify-center mt-12 text-7xl">
          <i className="devicon-html5-plain-wordmark text-orange-500"></i>
          <i className="devicon-css3-plain-wordmark text-blue-500"></i>
          <i className="devicon-javascript-plain text-yellow-400"></i>
          <i className="devicon-react-original text-sky-400"></i>
          <i className="devicon-nextjs-original text-white"></i>
          <i className="devicon-php-plain text-indigo-600"></i>
          <i className="devicon-laravel-plain-wordmark text-red-600"></i>
          <i className="devicon-tailwindcss-plain text-teal-400"></i>
          <SiNextdotjs />
          <SiPayloadcms className="w-16 h-16" />
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <div className="min-h-screen bg-black py-20">
        <div className="flex justify-center mb-12">
          <div className="border-[#9C9C9C] border-2 w-60 h-16 flex items-center justify-center font-bold text-[#9C9C9C] rounded">
            About Me
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 text-white">
          <LeftMotion />
          <RightMotion />
          <div className="md:col-span-2 flex justify-center items-center">
            <BottomMotion />
          </div>
        </div>
        {/* Project Section */}
        <div className="flex justify-center mt-16">
          <div className="border-[#9c9c9c] border-2 w-60 h-16 flex items-center justify-center font-bold text-[#9C9C9C] rounded">
            Projects
          </div>
        </div>
        <div className="flex flex-tcol md:flex-row gap-8 mt-12 px-6 md:px-20">
          <div className="md:w-1/2">
            <img src={restoApp} alt="restoApp" className="w-full rounded-2xl" />
          </div>
          <div className="text-white md:w-1/2 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Resto App</h1>
            <p className="text-[#9C9C9C]">
              A modern, full-stack restaurant discovery and management platform
              built with Next.js. It allows users to browse local restaurants,
              view menus, and make reservations, while providing restaurant
              owners with a dedicated dashboard to manage their table
              availability and online presence. The app leverages the power of
              server-side rendering for fast load times and improved SEO. With a
              clean, responsive interface and real-time updates, the platform
              ensures a seamless experience for both diners and restaurant
              owners. Whether you're planning a dinner outing or managing your
              busy restaurant, this app brings everything together in one place.
            </p>
            <a href="https://github.com/Sobanamjad/resto-app" target="_blank" rel="noopener noreferrer">
            <button className="text-[#9C9C9C] border-2 border-[#9C9C9C] w-40 h-12 rounded mt-4 cursor-pointer hover:text-black hover:bg-[#9C9C9C] shadow-lg shadow-[#9C9C9C]/40 ">Source Code</button>
            </a>
          </div>
        </div>
        <div className="flex flex-tcol md:flex-row gap-8 mt-30 px-6 md:px-20">
          <div className="text-white md:w-1/2 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Food Delivery Project</h1>
            <p className="text-[#9C9C9C]">
              Food Delivery Project is a modern, full-stack food delivery platform built with Laravel on the backend and Vue.js on the frontend. This application creates a seamless ecosystem connecting hungry customers, restaurants, and delivery partners, all through an intuitive and responsive interface. The platform combines the robustness of Laravel's backend architecture with the dynamic, reactive user experience of Vue.js to deliver a fast, scalable, and feature-rich food ordering solution. Customers can easily browse restaurant menus, place orders, and track deliveries in real-time, while restaurant owners can manage their offerings and view analytics. Delivery partners can efficiently handle their deliveries with route optimization and real-time updates. This project exemplifies the power of modern web technologies to create a comprehensive and user-friendly food delivery service. 
            </p>
            <a href="https://github.com/Sobanamjad/course-food-delivery" target="_blank" rel="noopener noreferrer">
            <button className="text-[#9C9C9C] border-2 border-[#9C9C9C] w-40 h-12 rounded mt-4 cursor-pointer hover:text-black hover:bg-[#9C9C9C] shadow-lg shadow-[#9C9C9C]/40 ">Source Code</button>
            </a>
          </div>
          <div className="md:w-1/2">
            <img src={foodDelivery} alt="restoApp" className="w-full rounded-2xl" />
          </div>
        </div>
        <div className="flex flex-tcol md:flex-row gap-8 mt-12 px-6 md:px-20">
          <div className="md:w-1/2">
            <img src={payloadcms} alt="restoApp" className="w-full rounded-2xl" />
          </div>
          <div className="text-white md:w-1/2 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Multi Tenant</h1>
            <p className="text-[#9C9C9C]">
              Multi Tenant is a sophisticated, multi-tenant food delivery platform built on Payload CMS that serves as a complete ecosystem connecting multiple restaurant vendors, their customers, and delivery partners—all from a single codebase and infrastructure. The platform leverages Payload's powerful multi-tenancy capabilities to create isolated environments for each restaurant tenant while maintaining centralized control for platform administrators . Customers can easily browse menus, place orders, and track deliveries in real-time, while restaurant owners can manage their offerings, view analytics, and customize their storefronts. Delivery partners can efficiently handle their deliveries with route optimization and real-time updates. This project exemplifies the power of modern web technologies to create a comprehensive and user-friendly food delivery service that scales effortlessly across multiple tenants.
            </p>
            <a href="https://github.com/Sobanamjad/plugin-multi-tenancy" target="_blank" rel="noopener noreferrer">
            <button className="text-[#9C9C9C] border-2 border-[#9C9C9C] w-40 h-12 rounded mt-4 cursor-pointer hover:text-black hover:bg-[#9C9C9C] shadow-lg shadow-[#9C9C9C]/40 ">Source Code</button>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default App;
