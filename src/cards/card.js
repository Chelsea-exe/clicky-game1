import React from "react";


function PrincessCard(props) {
    return (
        <div className="parent-container" onClick={() => props.clicked(props.id)}>
            <div className="princess-images">
                <img alt={props.princess} src={props.image} />
            </div>
            <div className="princess-info">
                <h1>Name:</h1>{props.princess}
            </div>
        </div>
    );
}

export default PrincessCard;