import Headercomp from "../components/headercomp";
import Herocomp from "../components/herocomp";
import '../App.css';
import '../css/hero.css';
import '../css/popularvenuesearches.css';
import PopularVenueSearches from "../components/popularvanuesearches";

const Homepage = () => {
  return (
    <>
      {<Headercomp/>}
      {<Herocomp/>}
      {<PopularVenueSearches/>}
    </>
  )
}

export default Homepage;
