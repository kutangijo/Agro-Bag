import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiMedalFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const images = [
  "/img/slider/plantbag1.png",
  "/img/slider/plantbag2.png",
  "/img/slider/plantbag3.png",
  "/img/slider/plantbag4.png",
  "/img/slider/plantbag5.png",
  "/img/slider/plantbag6.png",
  "/img/slider/plantbag7.png",
  "/img/slider/plantbag8.png",
  "/img/slider/plantbag9.png",
];

const PlantBagSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="whyus" className="">
      <div className="bg-[#004B24] flex sm:flex-row flex-col justify-center sm:gap-40 gap-10 sm:py-5 py-5">
        <div className="flex flex-col items-center ">
          <RiMedalFill size={80} color="#fff" />
          <h1 className="text-white text-xl font-bold">Best Quality</h1>
        </div>
        <div className="flex flex-col items-center">
          <RiMoneyDollarCircleFill size={80} color="#fff" />
          <h1 className="text-white text-xl font-bold">Harga Bersaing</h1>
        </div>
        <div className="flex flex-col items-center">
          <TbTruckDelivery size={80} color="#fff" />
          <h1 className="text-white text-xl font-bold">Pengiriman Cepat</h1>
        </div>
        <div className="flex flex-col items-center">
          <IoShieldCheckmarkSharp size={80} color="#fff" />
          <h1 className="text-white text-xl font-bold">Garansi 100%</h1>
        </div>
      </div>
      <div className="mt-20 sm:px-40">
        <h1 className="text-center text-2xl font-bold text-[#004B24]">
          MENGAPA HARUS AGRO BAG ?
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-20 sm:mt-10 mx-10">
          <div className="w-full sm:w-72 ">
            <Slider className="text-black" {...settings}>
              {images.map((src, index) => (
                <div
                  key={index}
                  className="w-full h-full flex justify-center items-center"
                >
                  <img
                    src={src}
                    alt={`PlantBag ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col sm:gap-5 gap-2 font-semibold  text-[#004B24] w-full">
            {[
              "Kualitas Bahan Terbaik",
              "Dapat Dipakai Kembali",
              "Bisa Custom Ukuran",
              "Tidak Mudah Rusak",
              "Praktis",
              "Hemat Pupuk",
              "Mudah Dibawa",
              "Awet dan Tahan Lama",
            ].map((text, index) => (
              <div
                key={index}
                className="px-4 py-2 border-2 border-[#004B24]  rounded-xl sm:hover:scale-105 transition-all"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantBagSlider;
