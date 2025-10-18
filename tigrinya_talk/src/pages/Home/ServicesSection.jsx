import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "/images/img_vector.svg",
      title: "Web-Cam",
      description: "Video interpreting for remote meetings, legal, and social intakes. Screen sharing support and multi-platform compatibility.",
      iconBg: "bg-purple-100"
    },
    {
      id: 2,
      icon: "/images/img_frame.svg",
      title: "On Place",
      description: "Professional on-site interpretation for meetings, court sessions, and medical appointments. Belgium-wide coverage with certified interpreters.",
      iconBg: "bg-blue-100"
    },
    {
      id: 3,
      icon: "/images/img_vector_white_a700.svg",
      title: "Telephone",
      description: "Instant phone interpretation services available 24/7 for urgent communication needs. No appointment needed, pay per minute.",
      iconBg: "bg-green-100"
    },
    {
      id: 4,
      icon: "/images/img_vector_gray_50.svg",
      title: "Document",
      description: "Accurate translation of legal, medical, and business documents with certification. Legal document expertise guaranteed.",
      iconBg: "bg-orange-100"
    }
  ];

  return (
    <section id="services" className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm px-3 py-1 sm:text-base font-semibold leading-sm text-text-primary mb-4">
            Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Language Solutions
          </h2>
          <p className="ext-sm sm:text-base font-light leading-sm  text-text-primary mt-5 sm:mt-6 lg:mt-[26px]">
            Professional interpretation services tailored to your specific communication needs across multiple platforms and formats.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services?.map((service) => (
            <div 
              key={service?.id}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className={`flex items-center justify-center w-16 h-16 ${service?.iconBg} rounded-2xl mb-6`}>
                <img 
                  src={service?.icon} 
                  alt={`${service?.title} service icon`}
                  className="w-8 h-8"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service?.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;