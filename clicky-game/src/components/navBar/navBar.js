import React from "react";
import "./nav.css";

function Nav(props){
    return (
        <div>
            <div className="full-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">Clicky Game</a>
                    <span className="nav-text">{props.navMessage}</span>
                    <span className="nav-score ">Score: {props.score} || Top Score: {props.topScore}</span>
                </div>
                </nav>
            </div>
        </div>
    )
};

export default Nav;