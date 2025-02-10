import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#004B24] text-white py-6">
      <a
        href="https://wa.me/6281234567890"
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
          <a href="#" className="hover:text-gray-400">
            Home
          </a>

          <a href="#" className="hover:text-gray-400">
            Products
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
