import React from 'react'
import Categorycard from './categorycard';

const Categorycomp = () => {

    const cardData = [
        {
            title: "Venue",
            description: "Banquet Halls, Lawns / Farmhouses, Wedding Resorts",
            imageUrl: "https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg",
            backgroundColor: '#d8dffc'
        },
        {
            title: "Photographers",
            description: "Photographers",
            imageUrl: "https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/2/photographers.jpg",
            backgroundColor: '#f4d5c2'
        },
        {
            title: "Makeup",
            description: "Bridal Makeup, Family Makeup",
            imageUrl: "https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/3/makeup.jpg",
            backgroundColor: '#dfb2ad'
        },
        {
            title: "Pre Wedding Shoot",
            description: "Pre Wedding Shoot Locations, Pre Wedding Photographers",
            imageUrl: "https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg",
            backgroundColor: '#d8dffc'
        },
        {
            title: "Planning & Decor",
            description: "Wedding Planners, Decorators, Small Function Decor",
            imageUrl: "https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/7/planning-decor.jpg",
            backgroundColor: '#f6b896'
        },
        {
            title: "Bridal Wear",
            description: "Bridal Lehengas, Kanjeevaram / Silk Saree, Cocktail Gowns, Trousseau Sarees, Bridal Lehenga on Rent",
            imageUrl: "https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/4/bridal-wear.jpg",
            backgroundColor: '#cfcdbf'
        }

];


  return (
    <>
      <div className="category-section">
        <div className="category-header">
            <h2>Wedding Categories</h2>
            <div className="see-all-category">
                <p>View all Categories</p>
                <i class="fa-solid fa-angle-right"></i>
            </div>
        </div>

        <div className="category-content">
            {cardData.map((card, index) => (
                <Categorycard
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    backgroundColor={card.backgroundColor}
                />
            ))}
        </div>
      </div>
    </>
  )
}

export default Categorycomp;
