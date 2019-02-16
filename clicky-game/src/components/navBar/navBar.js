import React from "react";
import "./nav.css";

function Nav(props){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="https://google.com">Clicky Game</a>
                <a className="nav-link" href="/">Click An Image To Begin <span className="sr-only"></span></a>
                <a className="nav-link disabled" href="/">Count & Score Will Go</a>
            </div>
            </nav>
        </div>
    )
};

export default Nav;