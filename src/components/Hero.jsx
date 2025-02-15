import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div id="home" className="pb-20">
      <div className="flex justify-center items-center gap-20 sm:px-20 px-2 flex-wrap sm:flex-nowrap">
        <div className="max-w-2xl sm:pt-40 pt-20">
          <h1 className="sm:text-7xl text-4xl font-bold text-[#004B24]">
            Planter Bag
          </h1>
          <h1 className="sm:text-7xl text-4xl font-bold text-[#70E000] sm:mt-1">
            Best Quality
          </h1>
          <h2 className="text-2xl font-semibold text-[#004B24] sm:my-4 my-2">
            With Agro Bag, Plants Grow Better, Harvest More!
          </h2>
          <p className="text-[#004B24] pb-10">
            Innovative planter bags for healthier and stronger plant growth.
            Made from premium, durable, and breathable materials for maximum
            results. Perfect for farmers, cultivators, and plant enthusiasts.
            Grow easier, harvest more!
          </p>

          <a
            className="flex items-center pl-8 py-2 rounded-3xl bg-[#004B24] text-white font-semibold hover:text-[#70E000] hover:scale-105 transition-all w-42"
            href="#"
          >
            <h1 className="text-center">Read More</h1>
            <span>
              <IoIosArrowForward size={20} />
            </span>
          </a>
        </div>
        <div className="h-xl rounded-xl sm:pt-20 relative max-w-xl">
          <img
            className="rounded-xl object-cover h-full"
            src="/img/plant1.jpg"
            alt="Plant"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
