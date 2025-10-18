import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
          <div className="py-32 sm:py-40 md:py-48 lg:py-[244px]">
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[22px] justify-center items-start w-full sm:w-3/4 md:w-2/3 lg:w-[42%]">
              <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-normal leading-[43px] sm:leading-[58px] md:leading-[72px] lg:leading-[86px] text-left text-white mt-2 sm:mt-2.5 lg:mt-[10px]">
                Breaking language barriers in Belgium
              </h1>
              <p className="text-base sm:text-lg md:text-lg lg:text-md font-normal leading-6 sm:leading-7 lg:leading-xl text-left text-white w-full opacity-90">
                Certified Tigrinya interpreters anywhere in Belgium book on-site, phone or video for the time you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;