import React from "react";

function Score(props) {
    return (
        <div className="scoreboard">
            <h1 className="score-header">Scoreboard</h1>
            <p className="Score">Score: <span>{props.currentScore}</span></p>
        </div>
    );
}
export default Score;