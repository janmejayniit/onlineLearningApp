import React from "react";
import { NavLink, Link } from "react-router-dom";
// import { useTranslation } from 'react-i18next';

const Header = ()=>{
    // const { t } = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">OLP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About Us</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
                    </div>
                    <div className="navbar-nav ms-auto ">
                        <NavLink className="nav-link" to="/Login">Login</NavLink>
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </div>
                </div>
            </div>
        </nav>

    )
}
export default Header;