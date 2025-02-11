import { useState } from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 sm:px-20 px-2 shadow-sm fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-[#004B24] text-lg font-bold">Agro Bag</div>
        <div className="hidden md:flex space-x-12">
          <button
            onClick={() => scrollToSection("home")}
            className="text-[#004B24] font-semibold hover:text-[#70E000] hover:scale-105 transition-all cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("whyus")}
            className="text-[#004B24] font-semibold hover:text-[#70E000] hover:scale-105 transition-all cursor-pointer"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-[#004B24] font-semibold hover:text-[#70E000] hover:scale-105 transition-all cursor-pointer"
          >
            Products
          </button>
        </div>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-[#004B24] font-semibold hover:text-[#70E000] hover:scale-105 transition-all cursor-pointer border-[#004B24] border-2 px-4 py-2 rounded-full hover:border-[#70E000] hidden sm:block"
        >
          Contact Us
        </button>
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
          <button
            onClick={() => scrollToSection("home")}
            className="block text-[#004B24] hover:text-gray-400 p-2"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("whyus")}
            className="block text-[#004B24] hover:text-gray-400 p-2"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="block text-[#004B24] hover:text-gray-400 p-2"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block text-[#004B24] hover:text-gray-400 p-2"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
