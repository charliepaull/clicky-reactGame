import React from "react";
import "./jumbo.css";

function Jumbo(props){
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Seinfeld Clicky Shuffle Game!</h1>
                <p className="lead">Click on a photo to earn points, but don't click on the same photo twice!</p>
            </div>
        </div>
    )
}

export default Jumbo;