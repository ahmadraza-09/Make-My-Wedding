import Headercomp from "../components/headercomp";
import Herocomp from "../components/herocomp";
import '../App.css';
import '../css/hero.css';
import '../css/popularvenuesearches.css';
import '../css/category.css';
import '../css/footer.css';
import PopularVenueSearches from "../components/popularvanuesearches";
import Categorycomp from "../components/categorycomp";
import Footercomp from "../components/footercomp";

const Homepage = () => {
  return (
    <>
      {<Headercomp/>}
      {<Herocomp/>}
      {<PopularVenueSearches/>}
      {<Categorycomp/>}
      {<Footercomp/>}
    </>
  )
}

export default Homepage;
