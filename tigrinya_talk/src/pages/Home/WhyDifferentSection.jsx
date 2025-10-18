import React from 'react';

const WhyDifferentSection = () => {
  const features = [
    {
      id: 1,
      icon: "/images/img_translate.svg",
      title: "Unmatched Precision",
      description: "Every word matters. Our interpreters deliver flawless accuracy, ensuring your message is conveyed exactly as intended with zero room for misunderstanding."
    },
    {
      id: 2,
      icon: "/images/img_translate.svg",
      title: "Cultural Intelligence",
      description: "Beyond language lies culture. We bridge cultural gaps with deep understanding of customs, context, and nuances that make communication truly meaningful."
    },
    {
      id: 3,
      icon: "/images/img_security.svg",
      title: "Absolute Confidentiality",
      description: "Your trust is our foundation. We maintain the highest standards of privacy and discretion, ensuring all communications remain completely confidential."
    }
  ];

  return (
    <section className="w-full bg-background-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="py-16 sm:py-20 lg:py-[106px]">
          <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1282px] mx-auto gap-8 lg:gap-[78px]">
            
            {/* Image */}
            <div className="w-full lg:w-[46%] order-2 lg:order-1">
              <img 
                src="/images/img_placeholder_image.png" 
                alt="Professional team meeting showcasing our interpretation services"
                className="w-full h-auto lg:w-[600px] lg:h-[640px] object-cover rounded-md lg:rounded-md"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-start items-end w-full lg:w-[46%] order-1 lg:order-2">
              
              {/* Section Header */}
              <div className="flex flex-row justify-start items-center w-full mb-8 lg:mb-10">
                <p className="text-sm sm:text-base font-semibold leading-sm text-center text-text-primary">
                  What Sets Us Apart
                </p>
              </div>

              {/* Features Stack */}
              <div className="relative w-full">
                <div className="flex flex-col gap-16 sm:gap-20 lg:gap-[86px] justify-start items-center w-full">
                  {features?.map((feature, index) => (
                    <div key={feature?.id} className="flex flex-col sm:flex-row justify-start items-start w-full gap-4 sm:gap-6">
                      
                      {/* Feature Content Row */}
                      <div className="flex flex-row justify-start items-start w-full gap-4 sm:gap-6">
                        <img 
                          src={feature?.icon} 
                          alt={`${feature?.title} icon`}
                          className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 self-center"
                        />
                        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 flex-1">
                          <h3 className="text-xl sm:text-2xl lg:text-xl font-normal leading-7 sm:leading-8 lg:leading-2xl text-left text-text-primary">
                            {feature?.title}
                          </h3>
                          <p className="text-sm sm:text-base font-normal leading-5 sm:leading-6 lg:leading-lg text-left text-text-primary">
                            {feature?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* All feature descriptions are now contained within their respective divs */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;