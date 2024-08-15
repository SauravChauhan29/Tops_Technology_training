import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar_page = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <ul className="nav-ul">
                    <li>
                        <NavLink to="/" className="box-link">
                            Intro
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="destination" className="box-link">
                            Top Destination
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="lorem3" className="box-link">
                            lorem3
                        </NavLink>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar_page;
