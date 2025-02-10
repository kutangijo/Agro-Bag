import { IoIosArrowForward } from "react-icons/io";
const Hero = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-20 sm:px-20 px-2 flex-wrap sm:flex-nowrap">
        <div className="max-w-2xl sm:pt-40 pt-20">
          <h1 className="sm:text-7xl text-4xl font-bold text-[#004B24]">
            Planter Bag
          </h1>
          <h1 className="sm:text-7xl text-4xl font-bold text-[#70E000] sm:mt-1">
            Kualitas Terbaik
          </h1>
          <h2 className="text-2xl font-semibold text-[#004B24] sm:my-4 my-2 ">
            Dengan Agro Bag, Tanaman Tumbuh Lebih Baik, Panen Lebih Maksimal!
          </h2>
          <p className=" text-[#004B24] pb-10">
            Inovasi planter bag berkualitas untuk pertumbuhan tanaman yang lebih
            sehat dan kuat. Dibuat dari bahan premium, tahan lama, dan
            breathable untuk hasil maksimal.Cocok untuk petani, pegiat budidaya,
            hingga pecinta tanaman hias.Saatnya tanam lebih mudah, panen lebih
            melimpah!
          </p>

          <a
            className="flex items-center pl-8  py-2 rounded-3xl bg-[#004B24] text-white font-semibold hover:text-[#70E000] hover:scale-105 transition-all w-42"
            href="#"
          >
            <h1 className="text-center">Read More</h1>
            <span>
              <IoIosArrowForward size={20} />
            </span>
          </a>
        </div>
        <div className="h-1/2 rounded-xl sm:pt-20 relative ">
          <img
            className=" rounded-xl object-cover w-full"
            src="/img/hero.png"
            alt=""
          />
          <span className="border-b-2 w-full absolute bottom-0"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
