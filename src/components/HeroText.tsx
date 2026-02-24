import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <h1 className="text-4xl text-[#FD6F00] font-bold">
      Hi, I'm{" "}
      <span className="text-white">
        <Typewriter
          words={["SOBAN AMJAD"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={80}
        />
      </span>
    </h1>
  );
}

export default Hero;