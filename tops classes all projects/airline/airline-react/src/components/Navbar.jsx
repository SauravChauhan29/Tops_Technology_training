import React from 'react'

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
                            <i
                                className="fa-regular fa-envelope col-white"
                                style={{ paddingRight: 0 }}
                            />
                        </span>
                        <span className="header-list">
                            <ul className="nav-links">
                                <li className="navs">
                                    <a href="/">HOME</a>
                                </li>
                                <li className="navs">
                                    <a href="./ouraircraft.html">OUR AIRCRAFT</a>
                                </li>
                                <li className="navs">
                                    <a href="./safety.html">SAFETY</a>
                                </li>
                                <li className="navs">
                                    <a href="">CHARTERS</a>
                                </li>
                                <li className="navs" style={{ paddingRight: 0 }}>
                                    <a href="./contactus.html">CONTACTS</a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Navbar
