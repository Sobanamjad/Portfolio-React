import HeroText from "../../HeroText"

const LeftContent = () => {
  return (
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
  )
}

export default LeftContent
