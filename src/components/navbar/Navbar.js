import React from 'react'
import '../navbar/Navbar.css'
import { BiSearchAlt } from "react-icons/bi";


const logo = 'https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg';

const Navbar = () => {
  return (
    <div className="nav">

            <div className="logo">
               
             <a href="/">
                  <img id="logoImage" src={logo} alt="Not" /> 
             </a>

             </div>

          <a  className="navlinks" href="/miphones">Mi Phones</a>
           <a   className="navlinks"  href="/redmiphones">Redmi Phones</a>
           <a   className="navlinks" href="/tv">TV</a>
           <a   className="navlinks" href="/laptops">Laptops</a>
           <a   className="navlinks" href="/lifestyle">Fitness & Lifestyle</a>
           <a  className="navlinks" href="/home">Home</a>
           <a   className="navlinks" href="/audio">Radio</a>
           <a   className="navlinks" href="/accessories">Accessories</a>

           <div className="searchbox">
              <input type="text" name="search"  placeholder="Search Products"/>
             <BiSearchAlt className='search-icon'/>

          </div>
            

           </div>
  )
}

export default Navbar