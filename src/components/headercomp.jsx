import React, { useState } from 'react';
import NavDropdown from "./navdropdown";
import { useNavigate } from "react-router-dom";
import Sidebarcomp from './sidebarcomp';
import '../css/sidebar.css'

const Headercomp = () => {

   const navigate = useNavigate();

  const [isVenueDropdownOpen, setVenueDropdownOpen] = useState(false);
  const [isVendorsDropdownOpen, setVendorsDropdownOpen] = useState(false);
  const [isPhotosDropdownOpen, setPhotosDropdownOpen] = useState(false);
  const [isRealWeddingDropdownOpen, setRealWeddingDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [isInviteDropdownOpen, setInviteDropdownOpen] = useState(false);

  const handleVenueDropdownToggle = () => {
    setVenueDropdownOpen(!isVenueDropdownOpen);
  };

  const handleVendorsDropdownToggle = () => {
    setVendorsDropdownOpen(!isVendorsDropdownOpen);
  };

  const handlePhotosDropdownToggle = () => {
    setPhotosDropdownOpen(!isPhotosDropdownOpen);
  };

  const handleRealWeddingDropdownToggle = () => {
    setRealWeddingDropdownOpen(!isRealWeddingDropdownOpen);
  };

  const handleBlogDropdownToggle = () => {
    setBlogDropdownOpen(!isBlogDropdownOpen);
  };

  const handleShopDropdownToggle = () => {
    setShopDropdownOpen(!isShopDropdownOpen);
  };

  const handleInviteDropdownToggle = () => {
    setInviteDropdownOpen(!isInviteDropdownOpen);
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
    ],
    link: 'View All Bridal Wear',
  };

  const type5Data = {
    title: 'Jewellery & Accessories',
    options: [
    'Jewellery',
    'Flower Jewellery',
    'Bridal Jewellery on Rent',
    'Accessories',
    ],
    link: 'View All Jewellery & Accessories',
  };

  const type6Data = {
    title: 'Food',
    options: [
    'Catering Services',
    'Cake',
    'Chaat & Food Stalls',
    'Bartenders',
    'Home Catering',
    ],
    link: 'View All Food',
  };

  const type7Data = {
    title: 'Makeup',
    options: [
    'Bridal Makeup',
    'Family Makeup',
    ],
  };

  const type8Data = {
    title: 'Groom Wear',
    options: [
    'Sherwani',
    'Wedding Suits / Tuxes',
    'Sherwani On Rent',
    ],
    link: 'View All Groom Wear',
  };

  const type9Data = {
    title: 'Invites & Gifts',
    options: [
    'Invitations',
    'Favors',
    'Trousseau Packers',
    'Invitation Gifts',
    'Mehndi Favors',
    ],
    link: 'View All Invites & Gifts',
  };

  const type10Data = {
    title: 'Pandits',
    options: [
    'Wedding Pandits',
    ],
  };
  
  const type11Data = {
    title: 'Pre Wedding Shoot',
    options: [
      'Pre Wedding Shoot Locations',
      'Pre Wedding Photographers',
    ],
  };

  const type12Data = {
    title: 'Mehndi',
    options: [
    'Mehendi Artist',
    ],
  };

  const type13Data = {
    title: 'Music & Dance',
    options: [
    'DJs',
    'Sangeet Choreographer',
    'Wedding Entertainment',
    ],
  };

  const type14Data = {
    title: 'Bridal Grooming',
    options: [
    'Spa and Wellness',
    'Beauty and Wellness',
    ],
  };

  const type15Data = {
    title: 'Planning & Decor',
    options: [
    'Wedding Planners',
    'Decorators',
    'Small Function Decor',
    ],
  };

  const type16Data = {
    title: 'Honeymoon',
    options: [
    'Honeymoon Packages',
    ],
  };

  const type17Data = {
    title: 'Outfit',
    options: [
    'Bridal Lehenga',
    'Wedding Sarees',
    'Engagement',
    'Mehndi',
    'Blouse Designs',
    ],
    link: 'More',
  };

  const type18Data = {
    title: 'Decor & Ideas',
    options: [
    'Wedding Decor',
    'Bridal Entry',
    'Groom Entry',
    'Wedding Games',
    ],
    link: 'More',
  };

  const type19Data = {
    title: 'Groom Wear',
    options: [
    'Sherwani for Groom',
    'Wedding Suits for Groom',
    ],
    link: 'More',
  };

  const type20Data = {
    title: 'Jewellery & Accessories',
    options: [
    'Bridal Jewellery',
    'Engagement Rings',
    'Floral Jewellery',
    ],
    link: 'More',
  };

  const type21Data = {
    title: 'Wedding Card Designs',
    options: [
    'Designs',
    'Wedding Gifts',
    'Wedding Invitations',
    ],
    link: 'More',
  };

  const type22Data = {
    title: 'Bridal Makeup & Hair',
    options: [
    'Bridal Makeup',
    'Bridal Hairstyles',
    'Engagement',
    'Mehndi',
    ],
    link: 'More',
  };

  const type23Data = {
    title: 'Mehndi',
    options: [
    'Arabic',
    'Mehndi Designs',
    'Simple',
    'Unique',
    ],
    link: 'More',
  };

  const type24Data = {
    title: 'Wedding Photography',
    options: [
    'Pre Wedding Shoot',
    'Wedding',
    'Wedding Photoshoot & Poses',
    ],
    link: 'More',
  };

  const type25Data = {
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
    link: 'Others',
  };

  const type26Data = {
    title: 'By Culture',
    options: [
    'Maharashtrian',
    'Punjabi /Sikh',
    'Bengali',
    'Gujarati',
    'Marwari',
    'Telugu',
    ],
    link: 'Others',
  };

  const type27Data = {
    title: 'By Theme',
    options: [
    'Grand & Luxurious',
    'Pocket Friendly Stunners',
    'Intimate & Minimalist',
    'Modern & Stylish',
    'International',
    ],
    link: 'Others',
  };

  const type28Data = {
    title: 'Browse by Category',
    options: [
    'Bridal Makeup',
    'Honeymoon Travel',
    'Wedding Songs and Videos',
    'Bridal Hairstyles',
    'Wedding Decor Ideas',
    'Bridal Style Advice',
    'Wedding Gifts and Favors',
    'Budget Weddings',
    ],
    link: 'More',
  };

  const type29Data = {
    title: 'Popular Sections',
    options: [
    'South Indian wedding',
    'Real Brides Reveal',
    'Bridal Buys',
    'Real Wedding',
    'Mehendi Ideas',
    'Bridal Style Advice',
    'Indian Wedding Ideas',
    ],
  };

  const type30Data = {
    title: 'Most Searched Blogs',
    options: [
    'Wedding Songs',
    'Best Bridal Entry Songs',
    'Chandni Chowk Lehengas',
    'Best Groom Entry Songs',
    'Wedding Decor Ideas',
    'Bridal Mehendi Designs',
    '2023 Marriage Dates',
    'Wittiest Wedding Hashtags',
    'Best Bridal Hairstyles',
    'Latest Sabyasachi Lehengas',
    'Bridal Blouse Designs',
    ],
  };

  const type31Data = {
    title: 'By Type',
    options: [
    'Bridal Lehenga',
    'Lehenga',
    'Sarees',
    'Gowns',
    'Sharara',
    'Anarkali',
    'Drape Sarees',
    'Wittiest Wedding Hashtags',
    'Indo Western',
    ],
    link: 'View More'
  };

  const type32Data = {
    title: 'By Occasion',
    options: [
    'Engagement',
    'Haldi',
    'Mehendi',
    'Cocktail',
    'Wedding',
    'Reception',
    'Sangeet',
    ],
    link: 'View More'
  };

  const type33Data = {
    title: 'Most Popular',
    options: [
    'Engagement lehenga',
    'Cocktail Gowns',
    'Wedding Sarees',
    'Lehenga Drape Sarees',
    'Silk Sarees',
    'Banarasi Lehenga',
    ],
    link: 'View More'
  };

  const type34Data = {
    title: 'Wedding Invitation Maker',
    options: [
    'Wedding Card Designs',
    'Invitation Video Templates',
    'Save the Date Templates',
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

  const realWeddingData = [
    { name: 'Shimul and Rahul (Goa)', imageSrc: 'Images/shimul-rahul-goa.webp', altText: 'Shimul and Rahul (Goa)' },
    { name: 'Monica and Maninder (Greece)', imageSrc: 'Images/monica-maninder-greece.webp', altText: 'Monica and Maninder (Greece)' },
  ];

  const blogData = [
    { name: 'Bridal Mehendi Design', imageSrc: 'Images/bridal-mehendi-design.webp', altText: 'Shimul and Rahul (Goa)' },
    { name: 'Honeymoon Hotels', imageSrc: 'Images/honeymoon-hotels.webp', altText: 'Monica and Maninder (Greece)' },
  ];

  const shopData = [
    { name: 'Bridal Mehendi Design', imageSrc: 'Images/bridal-mehendi-design.webp', altText: 'Shimul and Rahul (Goa)' },
    { name: 'Honeymoon Hotels', imageSrc: 'Images/honeymoon-hotels.webp', altText: 'Monica and Maninder (Greece)' },
  ];

  return (
    <>
      <div className="navbar">

        <input type="checkbox" id='check'/>

        {<Sidebarcomp/>}

        <div className="nav-left">
            <label id="open-menu" htmlFor='check'>
              <i class="fa-solid fa-bars"></i>
            </label>
            <h1 onClick={() => {navigate('/')}}>MakeMy<span>Wedding</span> </h1>
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
                    <NavDropdown 
                      typelist3={type3Data} 
                      typelist4={type4Data} 
                      typelist5={type5Data} 
                      typelist6={type6Data} 
                      typelist7={type7Data} 
                      typelist8={type8Data} 
                      typelist9={type9Data} 
                      typelist10={type10Data} 
                      typelist11={type11Data} 
                      typelist12={type12Data} 
                      typelist13={type13Data} 
                      typelist14={type14Data} 
                      typelist15={type15Data} 
                      typelist16={type16Data} 
                      weddingDestination={destinationData} 
                      isDestinationDropdown={false} />
                  )}
                </li>
                <li onMouseEnter={handlePhotosDropdownToggle} onMouseLeave={handlePhotosDropdownToggle}>
                  <h3>Photos</h3>
                  {isPhotosDropdownOpen && (
                    <NavDropdown 
                      typelist17={type17Data}
                      typelist18={type18Data}
                      typelist19={type19Data}
                      typelist20={type20Data}
                      typelist21={type21Data}
                      typelist22={type22Data}
                      typelist23={type23Data}
                      typelist24={type24Data}
                      weddingDestination={destinationData} 
                      isDestinationDropdown={false} />
                  )}
                </li>
                <li onMouseEnter={handleRealWeddingDropdownToggle} onMouseLeave={handleRealWeddingDropdownToggle}>
                  <h3>Real Weddings</h3>
                  {isRealWeddingDropdownOpen && (
                    <NavDropdown 
                      typelist25={type25Data}
                      typelist26={type26Data}
                      typelist27={type27Data}
                      realWeddingDestination={realWeddingData} 
                      isRealWeddingDropdown={true} />
                  )}
                </li>
                <li onMouseEnter={handleBlogDropdownToggle} onMouseLeave={handleBlogDropdownToggle}>
                  <h3>Blog</h3>
                  {isBlogDropdownOpen && (
                    <NavDropdown 
                      typelist28={type28Data}
                      typelist29={type29Data}
                      typelist30={type30Data}
                      blogDestination={blogData} 
                      isBlogDropdown={true} />
                  )}
                </li>
                <li onMouseEnter={handleShopDropdownToggle} onMouseLeave={handleShopDropdownToggle}>
                  <h3>Shop</h3>
                  {isShopDropdownOpen && (
                    <NavDropdown 
                      typelist31={type31Data}
                      typelist32={type32Data}
                      typelist33={type33Data}
                      shopDestination={shopData} 
                      isShopDropdown={true} />
                  )}
                </li>
                <li onMouseEnter={handleInviteDropdownToggle} onMouseLeave={handleInviteDropdownToggle}>
                  <h3>E-Invites</h3>
                  {isInviteDropdownOpen && (
                    <NavDropdown 
                      typelist34={type34Data}
                      inviteDestination={shopData} 
                      isInviteDropdown={false} />
                  )}
                </li>
            </ul>
        </div>
        <div className="nav-right">
            <i className="fa-solid fa-magnifying-glass"></i>
            <button onClick={() => {navigate('/login')}}>Log In</button>
        </div>

        <div className="search-page">
          
        </div>
      </div>
    </>
  )
}

export default Headercomp;
