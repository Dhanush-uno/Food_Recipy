import React from "react";
import Cookies from 'js-cookie';

export default function Footer() {
    const jwtToken = Cookies.get('jwt_token');

    // Render Footer only if the user is logged in (jwtToken exists)
    return jwtToken && (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">FoodiesHub.com</p>
                <p>FoodiesHub is a place where you can please your soul and tummy with delicious food recipes of all cuisines. And our service is absolutely free.</p>
                <p>&copy; 2021 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>foodieshub@gmail.com</p>
                <p>+342-5324-9454</p>
                <p>2393 Street NYC</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
    );
}
