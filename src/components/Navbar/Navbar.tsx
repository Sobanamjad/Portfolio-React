
const Navbar = () => {
  return (
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
  )
}

export default Navbar
