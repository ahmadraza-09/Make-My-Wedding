import React from 'react';
import TypeList from './typelist';
import DestinationList from './destinationlist';

const NavDropdown = ({ 
  typelist1, 
  typelist2, 
  typelist3, 
  typelist4, 
  typelist5, 
  typelist6, 
  typelist7, 
  typelist8, 
  typelist9, 
  typelist10, 
  typelist11, 
  typelist12, 
  typelist13, 
  typelist14, 
  typelist15, 
  typelist16, 
  typelist17, 
  typelist18, 
  typelist19, 
  typelist20, 
  typelist21, 
  typelist22, 
  typelist23, 
  typelist24, 
  typelist25, 
  typelist26, 
  typelist27, 
  typelist28, 
  typelist29, 
  typelist30, 
  typelist31, 
  typelist32, 
  typelist33, 
  typelist34, 
  weddingDestination, 
  isDestinationDropdown,
  realWeddingDestination,
  isRealWeddingDropdown,
  blogDestination,
  isBlogDropdown,
  shopDestination,
  isShopDropdown,
  inviteDestination,
  isInviteDropdown }) => {
  return (
    <div className="dropdown">
      <div className="drop-content-section">
        {typelist1 && <TypeList title={typelist1.title} options={typelist1.options} link={typelist1.link}/>}
        {typelist2 && <TypeList title={typelist2.title} options={typelist2.options} link={typelist2.link}/>}
        <div className="vendor-line">
          {typelist3 && <TypeList title={typelist3.title} options={typelist3.options} />}
          {typelist7 && <TypeList title={typelist7.title} options={typelist7.options} />}
          {typelist11 && <TypeList title={typelist11.title} options={typelist11.options} />}
          {typelist15 && <TypeList title={typelist15.title} options={typelist15.options} />}
        </div>

        <div className="vendor-line">
          {typelist4 && <TypeList title={typelist4.title} options={typelist4.options} link={typelist4.link}/>}
          {typelist8 && <TypeList title={typelist8.title} options={typelist8.options} link={typelist8.link}/>}
          {typelist12 && <TypeList title={typelist12.title} options={typelist12.options} />}
        </div>

        <div className="vendor-line">
          {typelist5 && <TypeList title={typelist5.title} options={typelist5.options} link={typelist5.link}/>}
          {typelist9 && <TypeList title={typelist9.title} options={typelist9.options} link={typelist9.link}/>}
          {typelist13 && <TypeList title={typelist13.title} options={typelist13.options} />}
        </div>

        <div className="vendor-line">
          {typelist6 && <TypeList title={typelist6.title} options={typelist6.options} link={typelist6.link}/>}
          {typelist10 && <TypeList title={typelist10.title} options={typelist10.options}/>}
          {typelist14 && <TypeList title={typelist14.title} options={typelist14.options}/>}
          {typelist16 && <TypeList title={typelist16.title} options={typelist16.options}/>}
        </div>

        <div className="vendor-line">
          {typelist17 && <TypeList title={typelist17.title} options={typelist17.options} link={typelist17.link}/>}
          {typelist20 && <TypeList title={typelist20.title} options={typelist20.options} link={typelist20.link}/>}
        </div>

        <div className="vendor-line">
          {typelist18 && <TypeList title={typelist18.title} options={typelist18.options} link={typelist18.link}/>}
          {typelist21 && <TypeList title={typelist21.title} options={typelist21.options} link={typelist21.link}/>}
        </div>

        <div className="vendor-line">
          {typelist19 && <TypeList title={typelist19.title} options={typelist19.options} link={typelist19.link}/>}
          {typelist22 && <TypeList title={typelist22.title} options={typelist22.options} link={typelist22.link}/>}
        </div>

        <div className="vendor-line">
          {typelist23 && <TypeList title={typelist23.title} options={typelist23.options} link={typelist23.link}/>}
          {typelist24 && <TypeList title={typelist24.title} options={typelist24.options} link={typelist24.link}/>}
        </div>

        <div className="vendor-line">
          {typelist25 && <TypeList title={typelist25.title} options={typelist25.options} link={typelist25.link}/>}
        </div>

        <div className="vendor-line">
          {typelist26 && <TypeList title={typelist26.title} options={typelist26.options} link={typelist26.link}/>}
        </div>

        <div className="vendor-line">
          {typelist27 && <TypeList title={typelist27.title} options={typelist27.options} link={typelist27.link}/>}
        </div>
        
        <div className="vendor-line">
          {typelist28 && <TypeList title={typelist28.title} options={typelist28.options} link={typelist28.link}/>}
        </div>

        <div className="vendor-line">
          {typelist29 && <TypeList title={typelist29.title} options={typelist29.options}/>}
        </div>

        <div className="vendor-line">
          {typelist30 && <TypeList title={typelist30.title} options={typelist30.options}/>}
        </div>

        <div className="vendor-line">
          {typelist31 && <TypeList title={typelist31.title} options={typelist31.options} link={typelist31.link}/>}
        </div>

        <div className="vendor-line">
          {typelist32 && <TypeList title={typelist32.title} options={typelist32.options} link={typelist32.link}/>}
        </div>

        <div className="vendor-line">
          {typelist33 && <TypeList title={typelist33.title} options={typelist33.options} link={typelist33.link}/>}
        </div>

        <div className="vendor-line">
          {typelist34 && <TypeList title={typelist34.title} options={typelist34.options} />}
        </div>

      </div>
      {isDestinationDropdown && <DestinationList title="Destination Wedding Venues" destinations={weddingDestination}/>}
      {isRealWeddingDropdown && <DestinationList title="Latest Real Wedding" destinations={realWeddingDestination}/>}
      {isBlogDropdown && <DestinationList title="Top Blogs" destinations={blogDestination}/>}
    </div>
  );
};

export default NavDropdown;