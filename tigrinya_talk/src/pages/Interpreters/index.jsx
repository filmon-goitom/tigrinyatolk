import React from 'react';
import { Helmet } from 'react-helmet';

const Interpreters = () => {
  return (
    <>
      <Helmet>
        <title>Meet Our Professional Interpreters | TigrinyaTalk Language Services</title>
        <meta name="description" content="Meet our experienced Tigrinya language interpreters specializing in Dutch, French, and English interpretation services. Professional language experts dedicated to clear cross-cultural communication." />
        <meta property="og:title" content="Meet Our Professional Interpreters | TigrinyaTalk Language Services" />
        <meta property="og:description" content="Meet our experienced Tigrinya language interpreters specializing in Dutch, French, and English interpretation services. Professional language experts dedicated to clear cross-cultural communication." />
      </Helmet>

      <main className="w-full bg-[#d7e6fd]">
        <div className="w-full max-w-[1440px] mx-auto px-[28px] sm:px-[42px] md:px-[56px] py-[56px] sm:py-[84px] md:py-[112px]">
          <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-[24px] lg:gap-0">
            
            {/* Left Content Section */}
            <div className="flex flex-col justify-start items-center w-full lg:flex-1 lg:mr-[24px]">
              <div className="flex flex-col justify-start items-center w-full gap-[14px]">
                
                {/* Professional Badge */}
                <div className="flex flex-row justify-start items-center w-full lg:w-auto">
                  <span className="text-[16px] font-semibold leading-[20px] text-left text-[#060c01] font-['Inter']">
                    Professional
                  </span>
                </div>

                {/* Main Content */}
                <div className="flex flex-col justify-start items-start w-full gap-[12px]">
                  <h1 className="text-[26px] sm:text-[39px] md:text-[52px] font-normal leading-[32px] sm:text-[47px] md:leading-[63px] text-left text-[#060c01] font-['Inter'] w-full">
                    Meet the interpreter
                  </h1>
                  <p className="text-[18px] font-normal leading-[27px] text-left text-[#060c01] font-['Inter'] w-full lg:w-[88%]">
                    Experienced language professional dedicated to clear and precise communication across cultures.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Interpreters Section */}
            <div className="flex flex-col justify-center items-center w-full lg:w-[30%] gap-[48px] lg:mr-[318px]">
              
              {/* First Interpreter */}
              <div className="flex flex-row justify-start items-center w-full lg:mr-[8px]">
                <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-[16px] sm:gap-0">
                  
                  {/* Profile Image */}
                  <img 
                    src="/images/img_placeholder_image_80x80.png" 
                    alt="Shishay Tewen - Professional Interpreter"
                    className="w-[80px] h-[80px] rounded-[40px] flex-shrink-0"
                  />
                  
                  {/* Profile Info */}
                  <div className="flex flex-col justify-start items-start w-full sm:w-[60%] sm:self-end sm:mt-[8px]">
                    <h2 className="text-[22px] font-semibold leading-[27px] text-left text-[#060c01] font-['Inter'] w-auto">
                      Shishay Tewen
                    </h2>
                    <p className="text-[18px] font-normal leading-[22px] text-left text-[#060c01] font-['Inter'] w-auto">
                      Swarn interpreter
                    </p>
                    <p className="text-[16px] font-normal leading-[20px] text-left text-[#060c01] font-['Inter'] w-auto mt-[16px]">
                      Tigrinya, Dutch, French
                    </p>
                    
                    {/* Contact Icons */}
                    <div className="flex flex-row justify-start items-center w-full mt-[28px] gap-[14px]">
                      <img 
                        src="/images/img_phone.svg" 
                        alt="Phone contact"
                        className="w-[24px] h-[24px]"
                      />
                      <img 
                        src="/images/img_linkedin.svg" 
                        alt="LinkedIn profile"
                        className="w-[24px] h-[24px]"
                      />
                      <img 
                        src="/images/img_dribble.svg" 
                        alt="Dribbble profile"
                        className="w-[24px] h-[24px]"
                      />
                      <img 
                        src="/images/img_mail.svg" 
                        alt="Email contact"
                        className="w-[24px] h-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Interpreter */}
              <div className="flex flex-row justify-start items-center w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-[16px] sm:gap-0">
                  
                  {/* Profile Image */}
                  <img 
                    src="/images/img_placeholder_image_1.png" 
                    alt="Goitom Filmon - Social Interpreter"
                    className="w-[80px] h-[80px] rounded-[40px] flex-shrink-0"
                  />
                  
                  {/* Profile Info */}
                  <div className="flex flex-col justify-start items-start w-full sm:w-[62%] sm:self-end sm:mt-[6px]">
                    <h2 className="text-[22px] font-semibold leading-[27px] text-left text-[#060c01] font-['Inter'] w-auto">
                      Goitom Filmon
                    </h2>
                    <p className="text-[18px] font-normal leading-[22px] text-left text-[#060c01] font-['Inter'] w-auto">
                      Social Interprater
                    </p>
                    <p className="text-[16px] font-normal leading-[20px] text-left text-[#060c01] font-['Inter'] w-auto mt-[16px]">
                      Tigrinya, English, French
                    </p>
                    
                    {/* Contact Icons */}
                    <div className="flex flex-row justify-start items-center w-full mt-[28px] gap-[14px]">
                      <img 
                        src="/images/img_phone.svg" 
                        alt="Phone contact"
                        className="w-[24px] h-[24px]"
                      />
                      <img 
                        src="/images/img_linkedin.svg" 
                        alt="LinkedIn profile"
                        className="w-[24px] h-[24px]"
                      />
                      <img 
                        src="/images/img_dribble.svg" 
                        alt="Dribbble profile"
                        className="w-[24px] h-[24px]"
                      />
                      <img 
                        src="/images/img_mail.svg" 
                        alt="Email contact"
                        className="w-[24px] h-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Interpreters;