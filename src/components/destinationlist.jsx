import React from 'react';

const DestinationList = ({ title, destinations }) => {
  return (
    <div className="drop-img-section">
      <h5>{title}</h5>
      <div className="drop-img-list">
        {destinations.map((destination, index) => (
          <div key={index} className="drop-image">
            <img src={destination.imageSrc} alt={destination.altText} />
            <p>{destination.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationList;
