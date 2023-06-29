import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="bg-img home-page-content">
            <h1 className="text-center home-page-text">Library</h1>
            <h5 className="text-center home-supporting-text ">Explore the World of Books.</h5>
            <div className="home-buttons text-center fadeIn">
                <div className="btn btn-light homepage-btn-1 btn-lg mt-2" ><Link to="/Shop" className="nav-link">Shop</Link></div>
            </div>
            
        </div>
    )
}