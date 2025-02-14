import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-[#004B24] text-white py-6">
      <a
        href="https://wa.me/628982934819"
        target="_blank"
        className="fixed bottom-10 right-10 bg-[#25D366] p-4 rounded-full cursor-pointer hover:bg-[#128C7E] transition-all"
      >
        <IoLogoWhatsapp size={30} color="#fff" />
      </a>
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Agro Bag. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-[#70E000]"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("whyus")}
            className="hover:text-[#70E000]"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection("whyus")}
            className="hover:text-[#70E000]"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("whyus")}
            className="hover:text-[#70E000]"
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
