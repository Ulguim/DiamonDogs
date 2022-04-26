import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-5">

            <a className="navbar-brand" href="#"><img src='./Diamond_Dogs.png' id="logo"></img></a>
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <Link to="/" className="nav-link" href="#">Inicio</Link>

                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Registrar</Link>

                </li>

            </ul>
        </nav>



    )
}
export default Navbar;