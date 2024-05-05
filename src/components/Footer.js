import React from "react";

export default function Footer() {
    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">Food ReciGen</p>
                <p>Explore the world of culinary delights with Food ReciGen. We offer a wide range of meticulously crafted recipes from various culinary traditions worldwide. Join us on a gastronomic journey that knows no borders.</p>
                <p>&copy; {new Date().getFullYear()} Food ReciGen. All Rights Reserved.</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>Email: info@foodrecigen.com</p>
                <p>Phone: 9182167***</p>
                <p>Address (India): 456 Spice Street, City, India</p>
            </div>
            <div className="footer-section">
                <p className="title">Connect With Us</p>
                <p>Stay updated with the latest culinary trends, exclusive recipes, and mouthwatering content by following us on social media.</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/FoodReciGen" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/FoodReciGen" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com/FoodReciGen" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </div>
    );
}
