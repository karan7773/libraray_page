import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    function sign(){
        console.log('signin')
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        
        if (email === storedEmail && password === storedPassword) {
        console.log("Login successful");
        alert("Login successful")
        } else {
        setErrorMessage("Invalid email or password");
        }

        setEmail("");
        setPassword("");
    };

    const google = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png";
    const Facebook = "https://w7.pngwing.com/pngs/561/460/png-transparent-fb-facebook-facebook-logo-social-media-icon.png";

    return (
        <div className="container mt-3">
        <div className="row">
            <div className="offset-lg-3 col-lg-6 pt-5 mt-3">
            <h1>Login</h1>
            <div className="row justify-content-center">
                <div className="col-lg-5 mt-3">
                    <div className="border border-dark rounded text-center ">
                        <div className="offset-lg-4 col-lg-4 py-2 px-0">
                            <img src={google} className="img-fluid image1" alt="food" />
                        </div>
                        <p className="offset-lg-2 col-lg-8 px-0" onClick={sign}>Signin with Google</p>
                    </div>
                </div>
                <div className="col-lg-5 mt-3">
                    <div className="border border-dark rounded text-center">
                        <div className="offset-lg-4 col-lg-4 py-2 px-0">
                            <img src={Facebook} className="img-fluid image1" alt="food" />
                        </div>
                        <p className="offset-lg-2 col-lg-8 px-0" onClick={sign}>Signin with Facebook</p>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-4"><hr /></div>
                <div className="col-sm-4 text-center">
                    <p>or Use Your Email</p>
                </div>
                <div className="col-sm-4"><hr /></div>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Email Address</label>
                <div className="form-row">
                    <div className="col-lg-12">
                        <input type="email" placeholder="Email" className="form-control" maxLength="20" value={email} onChange={handleEmailChange} required/>
                    </div>
                </div>
                <label className="mt-3">Password</label>
                <div className="form-row">
                    <div className="col-lg-12">
                        <input type="password" placeholder="Password" className="form-control" minLength="6" value={password}onChange={handlePasswordChange} required/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6 d-flex align-items-center ">
                        <input type="checkbox" required />
                        <p className="mb-0">Keep me Logged In</p>
                    </div>
                    <div className="col-lg-6 text-end">
                        <p className="bold">Forget Password?</p>
                    </div>
                </div>

                <div className="form-row">
                    <div className="offset-lg-6 col-lg-12  mt-3">
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </div>
                </div>

                <p className="mt-3">Don't Have An Account? <span className="bold text-decoration-underline"><Link to="/Signup" className="nav-link">Signup</Link></span></p>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
            </form>
            </div>
        </div>
        </div>
  );
}
