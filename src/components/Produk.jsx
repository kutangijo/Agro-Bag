const Produk = () => {
  return (
    <div className=" px-20 my-20">
      <div>
        <h1 className="text-center text-2xl font-bold text-[#004B24]">
          PRODUK KAMI
        </h1>
      </div>

      <div className="flex justify-center items-center gap-3 mt-10 ">
        <div className="basis-3xl">
          <img
            src="/img/plant1.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
        <div className="basis-4xl">
          <img
            src="/img/plant.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-xl "
          />
        </div>
        <div className="basis-6xl">
          <img
            src="/img/plant6.jpg"
            alt=""
            className="min-w-72 h-64 object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mt-3">
        <div className="basis-6xl">
          <img
            src="/img/plant3.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
        <div className="basis-2xl">
          <img
            src="/img/plant5.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
        <div className="basis-3xl">
          <img
            src="/img/plant4.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Produk;
