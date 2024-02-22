import React from 'react';
import TypeList from './typelist';
import DestinationList from './destinationlist';

const NavDropdown = ({ typelist1, typelist2, typelist3, typelist4, weddingDestination, isDestinationDropdown }) => {
  return (
    <div className="dropdown">
      <div className="drop-content-section">
        {typelist1 && <TypeList title={typelist1.title} options={typelist1.options} link={typelist1.link}/>}
        {typelist2 && <TypeList title={typelist2.title} options={typelist2.options} link={typelist2.link}/>}
        {typelist3 && <TypeList title={typelist3.title} options={typelist3.options} />}
        {typelist4 && <TypeList title={typelist4.title} options={typelist4.options} />}
      </div>
      {isDestinationDropdown && <DestinationList title="Destination Wedding Venues" destinations={weddingDestination}/>}
    </div>
  );
};

export default NavDropdown;