import React from "react";

function TimerDisplay(props) {
    return (
        <div className={"timer-display"}>
            <h1>
                {props.minutes < 10 && "0"}
                {props.minutes}
                {":"}
                {props.seconds < 10 && "0"}
                {props.seconds}
            </h1>
        </div>
    );
}

export default TimerDisplay;
