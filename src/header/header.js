import React from "react";

function Header(props) {
    return (
        <div className="parent-header">
            <div className="Title-container">
                <h1 className="princess-title">Match the Disney Princess!</h1>{props.children}
            </div>
            <div className="directions-container">
            <h2 className="directions">Match the princess cards and earn points!</h2>{props.children}
            </div>
        </div>
    );
}

export default Header