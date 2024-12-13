import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import edifyLogo from '../images/Edify.png'; // Adjust the path based on your folder structure

const Nav = () => {
  const auth = localStorage.getItem('user');
  const Navigate = useNavigate();

  const logout = () => {
    console.warn("apple");
    localStorage.clear();
    Navigate('/signup');
  };

  return (
    <div>
        <div className='mainnavbar'>
            <div className='navimage'>
         <Link to="/home"> <img src={edifyLogo} alt="Edify Logo" /></Link>
         </div>
      <ul className="nav-ul">      
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/cours">Courses</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/apply">Apply</Link></li>
        <li className='logoutcss'>
          {auth ? (
            <Link onClick={logout} to="/signup" >Logout</Link>
          ) : (
            <Link to="/SignUp">SignUp</Link>
          )}
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Nav;
