import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div
      id="contact"
      className="sm:mx-20 mx-0 bg-green-300 rounded-t-4xl pb-10"
    >
      <div className="sm:p-10 p-5 flex justify-center items-center gap-10 flex-wrap sm:flex-nowrap">
        <div>
          <h1 className="sm:text-5xl text-xl font-bold text-[#004B24]">
            Hubungi Kami Sekarang
          </h1>
          <p className="sm:mt-5 mt-2 sm:w-2xl">
            Butuh informasi lengkap, dukungan, atau tertarik menjalin kemitraan?
            Jangan ragu untuk menghubungi kami! Tim kami siap membantu dengan
            sepenuh hati. Kami percaya bahwa setiap pertanyaan adalah langkah
            awal menuju solusi terbaik.{" "}
          </p>
        </div>
        <div className="basis-5xl ">
          <img
            src="/img/globe.png"
            alt=""
            className="w-full hover:-translate-y-5 transition-all"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 flex-col sm:flex-row">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=lahirbaru.wng@gmail.com"
          target="_blank"
          className="border-2 border-[#004B24] rounded-md p-3 w-sm hover:bg-green-500 transition-all"
        >
          <div className="flex gap-5 items-center ">
            <div className="p-3 rounded-full bg-[#004B24] ">
              <IoMdMail size={40} color="#fff" />
            </div>
            <div className="flex-row font-semibold  ">
              <h1 className="text-[#004B24]">Email</h1>
              <p className="text-[#004B24] ">lahirbaru.wng@gmail.com</p>
            </div>
          </div>
        </a>
        <a
          href="https://wa.me/628982934819"
          target="_blank"
          className="border-2 border-[#004B24] rounded-md p-3 w-sm   hover:bg-green-500 transition-all"
        >
          <div className="flex gap-5 items-center  ">
            <div className="p-3 rounded-full bg-[#004B24] ">
              <FaWhatsapp size={40} color="#fff" />
            </div>
            <div className="flex-row font-semibold  ">
              <h1 className="text-[#004B24]">Whatsapp</h1>
              <p className="text-[#004B24] ">+62 898-2934-819</p>
            </div>
          </div>
        </a>
        {/* <a
          href="https://maps.app.goo.gl/ABoFhDJ9iGiyu46s8"
          target="_blank"
          className="border-2 border-[#004B24] rounded-md p-3 w-sm   hover:bg-green-500 transition-all"
        >
          <div className="flex gap-2 items-center ">
            <div className="p-3 rounded-full bg-[#004B24] ">
              <FaLocationDot size={40} color="#fff" />
            </div>
            <div className="flex-row font-semibold  ">
              <h1 className="text-[#004B24]">Lokasi</h1>
              <p className="text-[#004B24] ">
                Jl. Solo-Wonogiri Km. 9 Sukoharjo
              </p>
            </div>
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default Contact;
