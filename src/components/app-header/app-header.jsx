import "./app-header.css";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import briefcase from "../../asserts/images/briefcase.svg";
import user from "../../asserts/images/user.svg";



const AppHeader = () => {

    const [logo, setlogo] = useState(false);

    useEffect(() => {
        const main = document.querySelector('main');
        if(main.classList.contains('sign-in-page') || main.classList.contains('sign-up-page')) {
            setlogo(true);
        }
    }, [logo])
    
    return (
        <header className="header">
            <div className="header__inner">
                <Link to="/" onClick={() => {setlogo(false)}} className="header__logo">Travel App</Link>
                {logo === false? <nav className="header__nav">
                    <ul className="nav-header__list">
                        <li className="nav-header__item" title="Bookings">
                            <Link to="/bookings" className="nav-header__inner">
                                <span className="visually-hidden">Bookings</span>
                                <img src={briefcase} alt="icon" />
                            </Link>
                        </li>
                       <li className="nav-header__item " title="Profile">
                            <div className="nav-header__inner profile-nav" tabIndex="0">
                                <span className="visually-hidden">Profile</span>
                                <img src={user} alt="profile icon" />
                                <ul className="profile-nav__list">
                                    <li className="profile-nav__item profile-nav__username">John Doe</li>
                                    <li className="profile-nav__item" >
                                        <Link to="/sign-in"  onClick={() => {setlogo(true)}} className="profile-nav__sign-out button">Sign Out</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>:null}
            </div>
        </header>
    );
}


export default AppHeader;