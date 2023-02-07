import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./ServiceItem.css";
const ServiceItem = ({ id, service, serviceDescription, serviceImage }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article key={id} className="bg-dark p-1">
      <div className="service-item">
        <header>
          <button
            onClick={() => {
              setShowInfo(!showInfo);
            }}
            className="p-2 bg-light rounded service-btn"
          >
            {service}{" "}
            {showInfo ? (
              <FontAwesomeIcon icon={faArrowCircleDown} />
            ) : (
              <FontAwesomeIcon icon={faArrowCircleLeft} />
            )}
          </button>
        </header>
        {showInfo && (
          <div>
            <p className="service-desp">{serviceDescription}</p>
            <img
              src={serviceImage}
              alt="buying-selling-investing"
              className="service-image"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default ServiceItem;
