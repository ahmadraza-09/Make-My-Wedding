
const Headercomp = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
            <h1>MakeMy<span>Wedding</span> </h1>
        </div>

        <div className="nav-center">
            <ul>
                <li>Venues</li>
                <li>Vendors</li>
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
