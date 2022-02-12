import React from "react";
import { HeaderEl } from "./Header.element";
import navs from "../../Assets/front_json_data/navigation-data.json";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate =useNavigate();
  
  const logouthandler = ()=>{
    localStorage.clear();
    navigate('/login');
  }
  return (
    <HeaderEl>
      <div className="container">
        <nav>
        <div className="logo">
              <a href="#">Logo</a>
        </div>
        <div>
              <button className="logout-btn" style={{marginRight:'1rem'}} onClick={logouthandler}>Logout</button>
        </div>
          <ul>
            
            {navs.map((nav, i) => (
              <li key={i}>
                <a href="#">{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav">

          </div>
        <div className="bars">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        </nav>
      </div>
    </HeaderEl>
  );
};

export default Header;
