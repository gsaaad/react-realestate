import React from "react";
import b_s_i_img from "../../assets/img/photo_5.jpeg";
import landlordlease from "../../assets/img/photo_6.jpeg";
import ServiceItem from "../ServiceItem/ServiceItem.js";
import "./ServicesProvided.css";

const ServicesProvided = () => {
  const SERVICES = [
    {
      id: 1,
      service: "BUY SELL INVEST",
      serviceDescription:
        "Have one of our agents go over our BUY SELL INVEST services. This includes finding the right buyer for your sweet home, finding your future home sweet home, and investing in real estate properties*",
      serviceImage: b_s_i_img,
    },
    {
      id: 2,
      service: "LANDLORD LEASING",
      serviceDescription:
        "Capitalize on tailored, comprehensive marketing and Landlord leasing strategies that create value across all commerical real estate asset classes. Our relationship with our partners give our prefessionals proprietary insight and a knowledge base that's unique in the marketplace.",
      serviceImage: landlordlease,
    },
    {
      id: 3,
      service: "PROPERTY MANAGEMENT",
      serviceDescription:
        "Our professional team provide expert property management services and solutions across 4 pillars: residential, commerical, association and short term rental management.",
      serviceImage: b_s_i_img,
    },
    {
      id: 3,
      service: "INVESTMENT STRATEGY CONSULTING",
      serviceDescription:
        "Get a free consultation session when you connect with one of our top tier investment strategies consultants.",
      serviceImage: b_s_i_img,
    },
    {
      id: 4,
      service: "RENOVATION EXPERTS",
      serviceDescription:
        "Connect with a trusted expert renovational team to remodel and transform your sweet home into an even sweeter home.",
      serviceImage: b_s_i_img,
    },
  ];

  return (
    <div>
      <div>
        <h1 className="border-bottom border-4 mx-5 services-title">Services</h1>
      </div>
      {/* <div className="grid services-provided">
        <div className="col border-start border-bottom border-1 bg-gradient ">
          BUY SELL INVEST
        </div>
        <div className="col border-start border-bottom border-1 bg-gradient">
          LANDLORD LEASING
        </div>
        <div className="col border-start border-bottom border-1 bg-gradient">
          PROPERTY MANAGEMENT
        </div>
        <div className="col border-start border-bottom border-1 bg-gradient">
          RENOVATION EXPERTS
        </div>
        <div className="col border-start border-bottom border-1 bg-gradient">
          INVESTMENT STRATEGY CONSULTING
        </div>
      </div> */}
      <div>
        {SERVICES.map((service) => {
          return <ServiceItem {...service} key={SERVICES.id} />;
        })}
      </div>
    </div>
  );
};
export default ServicesProvided;
