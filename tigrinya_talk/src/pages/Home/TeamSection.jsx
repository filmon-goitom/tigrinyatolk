import React from 'react';

const TeamSection = () => {
  const teamMembers = [
  {
    id: 1,
    name: "Shishay Tewen",
    role: "Swarn interpreter",
    languages: "Tigrinya, Dutch, French",
    image: "/images/img_placeholder_image_80x80.png",
    socialLinks: [
    { icon: "/images/img_phone.svg", alt: "Phone", href: "tel:+32490193708" },
    { icon: "/images/img_linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/in/tewen-shishay-35b74a30a/" },
    { icon: "/images/img_mail.svg", alt: "Email", href: "mailto:tewenshishay540@gmail.com" }]

  },
  {
    id: 2,
    name: "Goitom Filmon",
    role: "Social Interprater",
    languages: "Tigrinya, English, French",
    image: "/images/img_placeholder_image_1.png",
    socialLinks: [
    { icon: "/images/img_phone.svg", alt: "Phone", href: "tel:+32486068723"  },
    { icon: "/images/img_linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/in/filmon-goitom-1b43a5194/" },
    { icon: "/images/img_mail.svg", alt: "Email", href: "mailto:philipmilio9@gmail.com" }]

  }];


  return (
    <section id="team" className="w-full bg-background-lightBlue">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="py-16 sm:py-20 lg:py-[112px]">
          <div className="flex flex-col lg:flex-row justify-start items-start w-full max-w-[1282px] mx-auto gap-8 lg:gap-0">
            
            {/* Section Header */}
            <div className="flex flex-col gap-3 sm:gap-3.5 lg:gap-[14px] justify-start items-center w-full lg:flex-1">
              <div className="flex flex-row justify-start items-center w-full">
                <p className="text-sm sm:text-base font-semibold leading-sm text-left text-text-primary">
                  Professional
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:gap-2.5 lg:gap-3 justify-start items-start w-full">
                <h2 className="text-[32px] sm:text-[42px] lg:text-2xl font-normal leading-[38px] sm:leading-[50px] lg:leading-4xl text-left text-text-primary">
                  Meet the interpreter
                </h2>
                <p className="text-base sm:text-lg md:text-md font-normal leading-6 sm:leading-7 lg:leading-xl text-left text-text-primary w-full lg:w-[88%]">
                  Experienced language professional dedicated to clear and precise communication across cultures.
                </p>
              </div>
            </div>

            {/* Team Members */}
            <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 w-full lg:w-[30%] lg:mr-[318px]">
              {teamMembers?.map((member, index) =>
                <div key={member?.id} className="flex flex-col gap-6 sm:gap-7 lg:gap-7 w-full">
                  
                  {/* Two Column Layout: Photo + Details */}
                  <div className="flex flex-row items-start w-full gap-6 lg:gap-8">
                    
                    {/* Column 1: Profile Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={member?.image}
                        alt={`${member?.name} profile`}
                        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
                      />
                    </div>

                    {/* Column 2: Member Details with Padding */}
                    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 flex-1 pl-2 pr-1">
                      {/* Name and Role */}
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg sm:text-xl lg:text-xl font-semibold leading-6 sm:leading-7 lg:leading-xl text-left text-text-primary">
                          {member?.name}
                        </h3>
                        <p className="text-base sm:text-lg md:text-md font-medium leading-5 sm:leading-6 lg:leading-md text-left text-white-600  px-2 py-1 rounded-md inline-block mb-2">
                          {member?.role}
                        </p>
                        <div className="flex flex-col gap-1">
                          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-500">
                            Languages:
                          </span>
                          <p className="text-sm sm:text-base font-normal leading-sm text-left text-gray-700 italic">
                            {member?.languages}
                          </p>
                        </div>
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex flex-row gap-3 sm:gap-4 lg:gap-4 items-center pt-2">
                        {member?.socialLinks?.map((link, linkIndex) =>
                          <img
                            key={linkIndex}
                            src={link?.icon}
                            alt={link?.alt}
                            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:opacity-70 transition-opacity duration-200"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TeamSection;