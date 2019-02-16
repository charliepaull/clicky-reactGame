import React from "react";
import "./cardLayout.css";

function Card(props){
    return (
        <div>
            <div className="card-group">
                <div className="card">
                    <img src={props.seinfeldImg} onClick={() => props.scoreIncrement(props.id)} className="card-img-top" alt={props.name}/>
                    <div className="card-body">
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted"></small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;