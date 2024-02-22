import React, { useState } from 'react';
import NavDropdown from "./navdropdown";

const Headercomp = () => {

  const [isVenueDropdownOpen, setVenueDropdownOpen] = useState(false);
  const [isVendorsDropdownOpen, setVendorsDropdownOpen] = useState(false);

  const handleVenueDropdownToggle = () => {
    setVenueDropdownOpen(!isVenueDropdownOpen);
  };

  const handleVendorsDropdownToggle = () => {
    setVendorsDropdownOpen(!isVendorsDropdownOpen);
  };

  const type1Data = {
    title: 'By Type',
    options: [
    'Banquet Halls',
    'Lawns / Farmhouses',
    'Resorts',
    'Small Function / Party Halls',
    'Destination Wedding',
    'Kalyana Mandapam',
    '4 Star & Above Hotels',
    ],
    link:'View All Venues',
  };

  const type2Data = {
    title: 'By City',
    options: [
    'Mumbai',
    'Pune',
    'Banglore',
    'Kolkata',
    'Jaipur',
    'Lucknow Mandapam',
    'Hyderabad',
    ],
    link: 'More'
  };

  const type3Data = {
    title: 'Photographers',
    options: [
    'Photographers',
    ],
  };

  const type4Data = {
    title: 'Bridal Wear',
    options: [
    'Bridal Lehengas',
    'Kanjeevaram / Silk Sarees',
    'Cocktail Gowns',
    'Trousseau Sarees',
    'Bridal Lehenga on Rent',
    'View All Bridal Wear',
    'Groom Wear',
    ],
  };

   const destinationData = [
    { name: 'Goa', imageSrc: 'Images/goa.webp', altText: 'Goa' },
    { name: 'Jaipur', imageSrc: 'Images/jaipur.webp', altText: 'Jaipur' },
    { name: 'Udaipur', imageSrc: 'Images/udaipur.webp', altText: 'Udaipur' },
    { name: 'Jodhpur', imageSrc: 'Images/jodhpur.webp', altText: 'Jodhpur' },
    { name: 'Thailand', imageSrc: 'Images/thailand.webp', altText: 'Thailand' },
    { name: 'Jim-Corbett', imageSrc: 'Images/jim-corbett.webp', altText: 'Jim-Corbett' },
  ];

  return (
    <>
      <div className="navbar">
        <div className="nav-left">
            <h1>MakeMy<span>Wedding</span> </h1>
        </div>

        <div className="nav-center">
            <ul>
                <li onMouseEnter={handleVenueDropdownToggle} onMouseLeave={handleVenueDropdownToggle}>
                  <h3>Venues</h3>
                  {isVenueDropdownOpen && (
                    <NavDropdown typelist1={type1Data} typelist2={type2Data} weddingDestination={destinationData} isDestinationDropdown={true}/>
                  )}
                </li>
                <li onMouseEnter={handleVendorsDropdownToggle} onMouseLeave={handleVendorsDropdownToggle}>
                  <h3>Vendors</h3>
                  {isVendorsDropdownOpen && (
                    <NavDropdown typelist3={type3Data} typelist4={type4Data} weddingDestination={destinationData} isDestinationDropdown={false} />
                  )}
                </li>
                <li>Photos</li>
                <li>Real Weddings</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>E-Invites</li>
            </ul>
        </div>
        <div className="nav-right">
            <i className="fa-solid fa-magnifying-glass"></i>
            <button>Log In</button>
        </div>
      </div>
    </>
  )
}

export default Headercomp;
