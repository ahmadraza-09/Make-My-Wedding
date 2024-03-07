import React from 'react'

const PopularVenueSearches = () => {

  return (
    <>
      <div className="popular-slider-container">
        <div className="card-wrapper">
          <div className="card">
            <div className="image-box">
              <img src="https://image.wedmegood.com/resized/300X/uploads/option_image/62/4-star-above-hotels.png" alt="" />
            </div>
            <div className="content-box">
              <h2 className="content-title">
                Banquet Halls
              </h2>
              <p className="content-city">
                <span>Mumbai</span>
                <span>Bangalore</span>
                <span>Pune</span>
              </p>
              <a href="#">More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularVenueSearches;
