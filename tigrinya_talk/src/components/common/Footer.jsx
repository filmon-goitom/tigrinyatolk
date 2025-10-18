import React from 'react';

const Footer = () => {
  const handleSmoothScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer id="contact" className="w-full bg-footer-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[52px] justify-start items-center w-full">
            
            {/* Main Footer Content */}
            <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1282px] gap-8 lg:gap-0">
              
              {/* Company Info Section */}
              <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[28px] justify-start items-start w-full lg:w-[64%]">
                
                {/* Company Logo/Name */}
                <div className="flex flex-row justify-start items-center w-auto">
                  <h2 className="text-md font-bold leading-md text-text-accent">
                    TigrinyaTolk.
                  </h2>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 justify-start items-center w-full">
                  
                  {/* Address */}
                  <div className="flex flex-col gap-1 sm:gap-1.5 lg:gap-[6px] justify-center items-start w-full">
                    <p className="text-xs font-semibold leading-xs text-text-primary">
                      Address
                    </p>
                    <p className="text-xs font-normal leading-xs text-text-primary ml-2">
                      Rue des deux ponts 2, 1050 Brussels
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="flex flex-col gap-1 lg:gap-[4px] justify-center items-start w-full">
                    <p className="text-xs font-semibold leading-xs text-text-primary">
                      Contact
                    </p>
                    <div className="flex flex-col gap-2 sm:gap-2.5 lg:gap-3 justify-start items-start w-full">
                      <p className="text-xs font-normal leading-xs  text-text-primary ml-1">
                        Phone: +32486068723 | +32490193708
                      </p>
                      <div className="flex items-center justify-start ml-1 mb-1.5">
                        <p className="text-xs font-normal leading-xs text-text-primary mr-1">
                          Email:
                        </p>
                        <a 
                          href="mailto:info@tigrinyatolk.com"
                          className="text-xs font-normal leading-xs  text-text-accent hover:text-black transition-colors duration-200"
                        >
                          info@tigrinyatolk.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Links Section */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-6 justify-center items-center w-full lg:w-[30%]">
                
                {/* Services Column */}
                <div className="flex flex-col justify-start items-center w-full">
                  <div className="flex flex-row justify-start items-center w-full py-2">
                    <button
                      onClick={() => handleSmoothScroll('services')}
                      className="text-xs font-semibold leading-xs text-text-primary hover:text-text-accent transition-colors duration-200 cursor-pointer"
                    >
                      Services
                    </button>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full py-2">
                    <button
                      onClick={() => handleSmoothScroll('about')}
                      className="text-xs font-semibold leading-xs text-text-primary hover:text-text-accent transition-colors duration-200 cursor-pointer"
                    >
                      About Us
                    </button>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full py-2">
                    <p className="text-xs font-semibold leading-xs text-text-primary">
                      Rates
                    </p>
                  </div>
                </div>

                {/* Additional Links Column */}
                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-4 justify-center items-start w-full py-2">
                  <p className="text-xs font-semibold leading-xs text-text-primary">
                    Languages
                  </p>
                  <p className="text-xs font-semibold leading-xs text-text-primary">
                    FAQ
                  </p>
                  <p className="text-xs font-semibold leading-xs text-text-primary">
                    Contact
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[30px] justify-start items-center w-full max-w-[1282px]">
              
              {/* Divider Line */}
              <div className="w-full h-[1px] bg-line-background"></div>

              {/* Copyright and Legal Links */}
              <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0">
                
                {/* Copyright */}
                <p className="text-xs font-normal leading-xs text-text-primary text-center sm:text-left">
                  © 2024 TigrinyaTolk Interpreting Services
                </p>

                {/* Legal Links */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center">
                  <a 
                    href="#" 
                    className="text-xs font-normal leading-xs underline text-link-text hover:text-text-accent transition-colors duration-200"
                  >
                    Privacy policy
                  </a>
                  <a 
                    href="#" 
                    className="text-xs font-normal leading-xs underline text-link-text hover:text-text-accent transition-colors duration-200"
                  >
                    Terms of service
                  </a>
                  <a 
                    href="#" 
                    className="text-xs font-normal leading-xs underline text-link-text hover:text-text-accent transition-colors duration-200"
                  >
                    Cookies settings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;