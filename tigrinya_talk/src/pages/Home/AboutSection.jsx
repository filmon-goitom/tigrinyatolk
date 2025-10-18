import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-background-white">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="py-16 sm:py-20 lg:py-[112px]">
          <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-8 lg:gap-0">
            
            {/* Text Content */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 justify-start items-start w-full lg:flex-1">
              <div className="flex flex-col justify-start items-start w-full">
                <div className="flex flex-row justify-start items-center w-full">
                  <p className="text-sm sm:text-base font-semibold leading-sm text-text-primary ">
                    About
                  </p>
                </div>
                <h2 className="text-[32px] sm:text-[42px] lg:text-2xl font-normal leading-[38px] sm:leading-[50px] lg:leading-4xl text-left text-text-primary mt-3 sm:mt-3.5 lg:mt-[14px]">
                  About TigrinyaTolk.
                </h2>
                <p className="text-sm sm:text-base font-light leading-sm text-left text-text-primary mt-5 sm:mt-6 lg:mt-[26px]">
                  Your trusted partner for professional Tigrinya interpreting services in Belgium
                </p>
                <h3 className="text-lg sm:text-xl lg:text-lg font-medium leading-6 sm:leading-7 lg:leading-xl text-left text-text-primary mt-7 sm:mt-8 lg:mt-[36px]">
                  Professional Interpreting Services in Belgium
                </h3>
              </div>
              <p className="text-sm sm:text-base font-light leading-5 sm:leading-6 lg:leading-lg text-left text-text-primary w-full lg:w-[76%]">
                TigrinyaTolk provides expert interpreting services for the Tigrinya-speaking community in Belgium. With years of experience and deep cultural understanding, we ensure accurate and sensitive communication across language barriers.
                <br /><br />
                Our certified interpreters serve businesses, legal institutions, healthcare facilities, and individuals requiring professional Tigrinya interpretation services.
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-[36%] flex justify-center lg:justify-end">
              <img 
                src="/images/img_placeholder_lightbox.png" 
                alt="Professional interpreter providing services"
                className="w-full max-w-[400px] lg:w-[494px] h-auto lg:h-[526px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;