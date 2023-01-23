import HousesCarousel from "../HousesCarousel/HousesCarousel";
import ServicesProvided from "../ServicesProvided/ServicesProvided";
import "./PropertyServices.css";

const PropertyServices = () => {
  return (
    <div className="text-light bg-secondary bg-gradient">
      <ServicesProvided />

      <div className=" houses-carousel bg-primary rounded border-end border-start border-light ">
        <h1 className="bg-light pt-4 text-dark fw-semibold">
          Why pick Sweet Home Realtor?
        </h1>

        <HousesCarousel />
      </div>
    </div>
  );
};

export default PropertyServices;
