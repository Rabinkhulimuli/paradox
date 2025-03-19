function WorkCulture() {
  return (
    <div className="flex flex-col gap-3 sm:gap-6 md:gap-10 lg:gap-18 px-12 md:px-24 lg:px-32">
      <div className="flex gap-3 sm:gap-6 md:gap-10 lg:gap-18">
        <div className="w-full relative lg h-[150px] sm:h-[250px] md:h-[300px] lg:h-[400px] max-w-[600px]">
          <img
            className="w-full h-full object-cover  rounded-2xl"
            src="/home/work culture.png"
            alt="Work Culture"
          />
        </div>
        <div className="w-full  h-full">
          <h2 className="text-2xl  sm:text-[4rem]  lg:text-[5.4rem] xl:text-[7rem]  sm:leading-18 md:leading-[1] tracking-tight font-bold">
            Features <span className="text-nowrap"><span className="text-red-500">Ought</span> to</span> Partake
          </h2>
        </div>
      </div>
      <div className="w-full flex gap-6 md:gap-10 lg:gap-18">
        <div className="w-full  max-w-[600px] h-[150px] sm:h-[250px] md:h-[300px]  lg:h-[400px]">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="/home/ladder.jpg"
            alt="Ladder"
          />
        </div>
        <div className="w-full  max-w-[600px] h-[150px] sm:h-[250px] md:h-[300px]  lg:h-[400px]">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="/home/earth.png"
            alt="Earth"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkCulture;
