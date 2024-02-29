import Headercomp from "../components/headercomp";
import Herocomp from "../components/herocomp";
import '../App.css';
import '../css/hero.css';

const Homepage = () => {
  return (
    <>
      {<Headercomp/>}
      {<Herocomp/>}
    </>
  )
}

export default Homepage;
