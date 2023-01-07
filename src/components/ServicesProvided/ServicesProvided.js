import "./ServicesProvided.css";
const ServicesProvided = () => {
  return (
    <div>
      <div>
        <h1 className="border-bottom border-4 mx-5 services-title">Services</h1>
      </div>
      <div className="grid services-provided">
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
      </div>
    </div>
  );
};
export default ServicesProvided;
