import Headercomp from "../components/headercomp";
import Herocomp from "../components/herocomp";
import '../App.css';
import '../css/hero.css';
import '../css/popularvenuesearches.css';
import '../css/category.css';
import PopularVenueSearches from "../components/popularvanuesearches";
import Categorycomp from "../components/categorycomp";

const Homepage = () => {
  return (
    <>
      {<Headercomp/>}
      {<Herocomp/>}
      {<PopularVenueSearches/>}
      {<Categorycomp/>}
    </>
  )
}

export default Homepage;
