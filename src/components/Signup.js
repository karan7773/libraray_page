import React from "react";
import { Link } from "react-router-dom";

export default function Signup(){
    return (
        <div className="container">
        <div className="row">
            
            <div className="offset-lg-3 col-lg-6 pt-5 mt-3">
                <h1>Sign Up</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-5 mt-3">
                        <div className="border border-dark rounded text-center p-2 ">
                            <p>Signup with Google</p>
                        </div>
                    </div>
                    <div className="col-lg-5 mt-3">
                        <div className="border border-dark rounded text-center p-2">
                                <p>Signup with Facebook</p>
                        </div>    
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-4">
                        <hr/>
                    </div>
                    <div className="col-sm-4 text-center">
                        <p>or Use Your Email</p>
                    </div>
                    <div className="col-sm-4">
                        <hr/>
                    </div>
                </div>
                <form>
                    <label>Email Address</label>
                    <div className="form-row">
                        <div className="col-lg-12">
                            <input type="email" placeholder="Email" className="form-control" maxLength="20" required/>
                        </div>
                    </div>
                    <label className="mt-3">Password</label>
                    <div className="form-row">
                        <div className="col-lg-12">
                            <input type="password" placeholder="Password" className="form-control" minLength="6" required/>
                        </div>
                    </div>
                    <label className="mt-3">Re-Enter Password</label>
                    <div className="form-row">
                        <div className="col-lg-12">
                            <input type="password" placeholder="Password" className="form-control" minLength="6" required/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-12 d-flex align-items-center ">
                            <input type="checkbox" required/>
                            <p className="px-2 mb-0">I agree to the <a href="#">Terms of Services</a> and <a href="#">Privacy Policy</a></p>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className=" offset-lg-6 col-lg-12  mt-3">
                            <button type="Submit" className="btn btn-primary">Log In</button>
                        </div>
                    </div>

                    <p className="mt-3">Already Have An Account? <span className="bold text-decoration-underline"><Link to="/Login" className="nav-link">Login</Link></span></p>
                </form>
            </div>
        </div>
    </div>
    )
}