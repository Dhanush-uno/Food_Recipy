import React from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import { useState } from "react";
import Sidebar from "./Sidobar";

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const onClickLogout = () => {
        Cookies.remove('jwt_token');
        window.location.href = '/login'; // Redirect to login page after logout
    };
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation();
    const jwtToken = Cookies.get('jwt_token');

    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
        
    ];

    function closeSidebar() {
        setShowSidebar(false);
    }

    // Render Navbar only if the user is logged in (jwtToken exists)
    return (
        <>
            {jwtToken && (
                <div className="navbar container">
                    <Link to="/" className="logo">Food<span>Reci</span>Gen</Link>
                    <div className="nav-links">
                        {links.map(link => (
                            <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                        ))}
                    </div>
                    <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    {/* Example usage of onClickLogout */}
                    <button className='btn' onClick={onClickLogout}>Logout</button>
                </div>
            )}
            {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        </>
    );
}
