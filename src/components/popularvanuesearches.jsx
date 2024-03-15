import React, { useRef } from 'react';

const PopularVenueSearches = () => {

  const scrollContainerRef1 = useRef(null);
  const backBtnRef1 = useRef(null);
  const nextBtnRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);
  const backBtnRef2 = useRef(null);
  const nextBtnRef2 = useRef(null);

  const handleNextClick1 = () => {
    if (scrollContainerRef1.current) {
      scrollContainerRef1.current.style.scrollBehavior = "smooth";
      scrollContainerRef1.current.scrollLeft += 380;
    }
  };

  
  const handleBackClick1 = () => {
    if (scrollContainerRef1.current) {
      scrollContainerRef1.current.style.scrollBehavior = "smooth";
      scrollContainerRef1.current.scrollLeft -= 380;
    }
  };

  const handleNextClick2 = () => {
    if (scrollContainerRef2.current) {
      scrollContainerRef2.current.style.scrollBehavior = "smooth";
      scrollContainerRef2.current.scrollLeft += 260;
    }
  };

  const handleBackClick2 = () => {
    if (scrollContainerRef2.current) {
      scrollContainerRef2.current.style.scrollBehavior = "smooth";
      scrollContainerRef2.current.scrollLeft -= 260;
    }
  };

  return (
    <>
      <div className="popular-slider-container">
        <h2>Popular Venue Searches</h2>
        <i id='leftButton' class="fa-solid fa-angle-left slide-button" ref={backBtnRef1} onClick={handleBackClick1}></i>
        <div className="card-wrapper" ref={scrollContainerRef1}>
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
          <i id='rightButton' class="fa-solid fa-angle-right slide-button" ref={nextBtnRef1} onClick={handleNextClick1}></i>
        </div>
      </div>

      <div className="popular-slider-container2">
        <h2>Popular Searches</h2>
        <i id='leftButton2' class="fa-solid fa-angle-left slide-button" ref={backBtnRef2} onClick={handleBackClick2}></i>
        <div className="card-wrapper2" ref={scrollContainerRef2}>
          <div className="card2">
            <div className="image-box2">
              <img src="Images/bridal-wear.webp" alt="" />
            </div>
            <div className="content-box">
              <h3 className="content-title">
                Bridal Wear
              </h3>
            </div>
          </div>
          <div className="card2">
            <div className="image-box2">
              <img src="Images/bridal-makeup.webp" alt="" />
            </div>
            <div className="content-box">
              <h3 className="content-title">
                Bridal Makeup
              </h3>
            </div>
          </div>
          <div className="card2">
            <div className="image-box2">
              <img src="Images/photography.webp" alt="" />
            </div>
            <div className="content-box">
              <h3 className="content-title">
                Photographers
              </h3>
            </div>
          </div>
          <div className="card2">
            <div className="image-box2">
              <img src="Images/cards.webp" alt="" />
            </div>
            <div className="content-box">
              <h3 className="content-title">
                Invitation
              </h3>
            </div>
          </div>
          <div className="card2">
            <div className="image-box2">
              <img src="Images/caterers.webp" alt="" />
            </div>
            <div className="content-box">
              <h3 className="content-title">
                Catering Services
              </h3>
            </div>
          </div>
          <div className="card2">
            <div className="image-box2">
              <img src="Images/bridal-makeup.webp" alt="" />
            </div>
            <div className="content-box">
              <h3 className="content-title">
                Banquet Halls
              </h3>
            </div>
          </div>
          <div className="card2">
            <div className="image-box2">
              <img src="Images/bridal-makeup.webp" alt="" />
            </div>
            <div className="content-box">
              <h3 className="content-title">
                Banquet Halls
              </h3>
            </div>
          </div>
          <div className="card2">
            <div className="image-box2">
              <img src="Images/bridal-makeup.webp" alt="" />
            </div>
            <div className="content-box">
              <h3 className="content-title">
                Banquet Halls
              </h3>
            </div>
          </div>
          <div className="card2">
            <div className="image-box2">
              <img src="Images/bridal-makeup.webp" alt="" />
            </div>
            <div className="content-box">
              <h3 className="content-title">
                Banquet Halls
              </h3>
            </div>
          </div>
          <i id='rightButton2' class="fa-solid fa-angle-right slide-button" ref={nextBtnRef2} onClick={handleNextClick2}></i>
        </div>
      </div>
    </>
  )
}

export default PopularVenueSearches;
