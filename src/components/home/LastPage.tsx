function LastPage() {
  return (
    <div className="relative mx-10 md:mx-20 lg:mx-30">
      <div>
        <img className="w-full rounded-2xl " src="/home/nature.jpg" alt="" />
      </div>
      <div className="absolute w-full inset-0  top-4 sm:top-10 lg:top-16 flex  justify-center  ">
        <div className="flex flex-col px-2 sm:px-12 md:px-16  items-center backdrop-blur-lg rounded-2xl h-fit">
          <div className="w-full py-2 sm:py-9 flex flex-col gap-1 sm:gap-3 md:gap-4 lg:gap-6 items-center ">
            <h2 className="sm:text-3xl text-center md:text-4xl lg:text-6xl font-semibold">
              Every Inspiration from nature
            </h2>
            <p className="text-center w-40 sm:w-full text-xs sm:text-lg md:text-xl lg:text-3xl  sm:tracking-wider">
              Get started using our services with a 30 day free trail
            </p>
          </div>
          <button className="bg-black transition-all duration-500 ease-in-out hover:scale-110 text-white text-xs sm:text-lg px-4 py-1 sm:px-12 sm:py-2 lg:px-16 lg:py-3 lg:text-xl cursor-pointer font-semibold rounded-md my-2 sm:my-16 lg:my-22">
            Try it now
          </button>
        </div>
      </div>
    </div>
  );
}

export default LastPage;
