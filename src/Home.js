import Navicon from "./assets/Logo.jpeg"
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="navbar" id="home">
        <nav>
           <div> <img src={Navicon} alt="logo"></img></div>
           <div><ul>
               <Link to="/">Go Back</Link>
               <a href="#about"><li>About Me</li></a>
               <a href="#education"><li>Education</li></a>
               <a href="#contact"><li>Contact</li></a>
           </ul></div>
        </nav>
      </div>
     );
}
 
export default Home;