import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavHome = styled.a`
list-style: none;
color: white;
font-size: 17px;
font-family: "Barlow Condensed", sans-serif;
`

const Navbar = () => {
   
    return (
        <div>
            <header className="top_header">
                <div className="flex main-container-padding">
                    <div className="logo">
                        <i>
                            <span className="logo-top-text">
                                <span className="logo-left-text">AIR</span>
                                <span>LINES</span>
                            </span>
                        </i>
                        <span className="logo-bottom-text">INTERNATIONAL TRAVEL</span>
                    </div>
                    <div className="header_rightside_content">
                        <span className="headericons">
                            <i className="fa-solid fa-house-user col-white" />
                            <i className="fa-regular fa-envelope col-white no-padding-right" />
                        </span>
                        <span className="header-list">
                            <ul className="nav-links">
                                <NavHome className="navs">
                                    <NavLink to="/" className='top-anchor'>HOME</NavLink>
                                </NavHome>
                                <NavHome className="navs">
                                    <NavLink to="services" className='top-anchor'>OUR SERVICES</NavLink>
                                </NavHome>
                                <NavHome className="navs">
                                    <NavLink to="/ouraircraft" className='top-anchor'>OUR AIRCRAFT</NavLink>
                                </NavHome>
                                <NavHome className="navs">
                                    <NavLink to="/safety" className='top-anchor'>SAFETY</NavLink>
                                </NavHome>
                                <NavHome className="navs">
                                    <NavLink to="/charters" className='top-anchor'>CHARTERS</NavLink>
                                </NavHome>
                                <NavHome className="navs" style={{ paddingRight: 0 }}>
                                    <NavLink to="/contactus" className='top-anchor'>CONTACTS</NavLink>
                                </NavHome>
                            </ul>
                        </span>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
