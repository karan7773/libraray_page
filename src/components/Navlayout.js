import React from "react";
import { NavLink,Outlet } from "react-router-dom";

export default function Navlayout({cartcount}){
    return(
        <div className="root-layout">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!"><NavLink to="/" className="nav-link active">Library</NavLink></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="Shop">Shop</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="Login">Login</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="Signup">Signup</NavLink></li>
                        </ul>
                            <button className="btn btn-outline-dark">
                                <i className="bi-cart-fill me-1"><NavLink className="nav-link" to="Cart">Cart</NavLink></i>
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartcount}</span>
                            </button>
                    </div>
                </div>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    )  
}