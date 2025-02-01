import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Logo from '../images/logo.png';
import {links} from '../data';
import {FaBars} from 'react-icons/fa';
import {IoClose} from 'react-icons/io5';

import './navbar.css';
const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState (false);

  return (
    <nav>
      <div className="container nav__container">
        <Link
          to="/trainerswebsite"
          className="logo"
          onClick={() => setIsNavShowing (false)}
        >
          <img src={Logo} alt="Nav logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}
        >
          {links.map (link => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({isActive}) => (isActive ? 'active-nav' : '')}
                onClick={() => setIsNavShowing (prev => !prev)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing (prev => !prev)}
        >
          {isNavShowing ? <IoClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
