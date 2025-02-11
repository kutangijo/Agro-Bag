const Produk = () => {
  return (
    <div id="products" className=" sm:px-20 px-5 my-20">
      <div>
        <h1 className="text-center text-2xl font-bold text-[#004B24]">
          PRODUK KAMI
        </h1>
      </div>

      <div className="flex justify-center items-center gap-3 mt-10 flex-wrap sm:flex-nowrap">
        <div className="sm:basis-3xl overflow-hidden rounded-xl">
          <img
            src="/img/plant1.jpg"
            alt=""
            className="w-full sm:h-64 object-fill  hover:scale-110 transition-all duration-700"
          />
        </div>
        <div className="sm:basis-4xl overflow-hidden rounded-xl">
          <img
            src="/img/plant.jpg"
            alt=""
            className="w-full sm:h-64 object-cover hover:scale-110 transition-all duration-700 "
          />
        </div>
        <div className="basis-6xl overflow-hidden rounded-xl">
          <img
            src="/img/plant6.jpg"
            alt=""
            className="min-w-72 h-64 object-cover hover:scale-110 transition-all duration-700"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mt-3">
        <div className="basis-6xl overflow-hidden rounded-xl">
          <img
            src="/img/plant3.jpg"
            alt=""
            className="w-full h-64 object-cover hover:scale-110 transition-all duration-700"
          />
        </div>
        <div className="basis-2xl overflow-hidden rounded-xl">
          <img
            src="/img/plant5.jpg"
            alt=""
            className="w-full h-64 object-cover hover:scale-110 transition-all duration-700"
          />
        </div>
        <div className="basis-3xl overflow-hidden rounded-xl">
          <img
            src="/img/plant4.jpg"
            alt=""
            className="w-full h-64 object-cover hover:scale-110 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Produk;
