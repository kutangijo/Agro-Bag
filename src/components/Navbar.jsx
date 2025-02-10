import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 sm:px-20 px-2 shadow-sm fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-[#004B24] text-lg font-bold">Agro Bag</div>
        <div className="hidden md:flex space-x-12">
          <a
            href="#home"
            className="text-[#004B24] font-semibold hover:text-[#70E000] hover:scale-105 transition-all"
          >
            Home
          </a>
          <a
            href="#product"
            className="text-[#004B24] font-semibold hover:text-[#70E000] hover:scale-105 transition-all"
          >
            Products
          </a>
        </div>
        <a
          href="#contact"
          className="text-[#004B24] font-semibold hover:text-[#70E000] hover:scale-105 transition-all  border rounded-2xl py-2 px-8 hidden md:flex"
        >
          Contact Us
        </a>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#004B24] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#home"
            className="block text-[#004B24] hover:text-gray-400 p-2"
          >
            Home
          </a>
          <a
            href="#product"
            className="block text-[#004B24] hover:text-gray-400 p-2"
          >
            Products
          </a>
          <a
            href="#about"
            className="block text-[#004B24] hover:text-gray-400 p-2"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block text-[#004B24] hover:text-gray-400 p-2"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
