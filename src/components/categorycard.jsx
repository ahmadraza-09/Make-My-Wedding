
const Categorycard = ({ title, description, imageUrl, backgroundColor }) => {

  return (
    <div className="category-card" style={{ backgroundColor: backgroundColor }}>
      <div className="category-card-content">
        <h3>{title} <i className="fa-solid fa-angle-down"></i></h3>
        <p>{description}</p>
      </div>
      <div className="category-card-image">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Categorycard;
