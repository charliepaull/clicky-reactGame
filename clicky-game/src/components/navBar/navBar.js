import React from "react";
import "./nav.css";

function Nav(props){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="http://localhost:3000/">Clicky Game</a>
                <a className="nav-link" href="/">State propped past through here <span className="sr-only"></span></a>
                <a className="nav-link " href="#"> & Score Will Go</a>
            </div>
            </nav>
        </div>
    )
};

export default Nav;