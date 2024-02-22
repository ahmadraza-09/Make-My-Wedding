
const Herocomp = () => {

  return (
    <>
      <div className="hero-section" style={{backgroundImage : `url(Images/hero-bg.webp)`}}>
        <h1>Your Wedding, Your Way</h1>
        <h4>Find the best wedding vendors with thousands of trusted reviews</h4>
        <div className="search-box">
            <div className="search-input-box">
              <input type="text" className="search-input" placeholder="Select vender type"/>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="suggestions-container"></div>
            <div className="search-input-box">
              <input type="text" className="search-input2" placeholder="Select city"/>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="suggestions-container2"></div>
            <button>Get Started</button>
        </div>
        <div className="popular-searches">
          <h4>Popular Searches:</h4>
          <div className="popular-searches-links">
            <a href="#">Wedding Photographers in India</a>
            <a href="#">Bridal Makeup in India</a>
            <a href="#">Wedding Cards in India</a>
            <a href="#">Wedding Venues in India</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Herocomp;
