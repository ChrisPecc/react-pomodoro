import React from "react";

function LessTime(props) {
    const timeDown = () => {
        if (props.seconds < 20) {
            if (props.minutes === 0) {
                props.secondsChange(0);
                props.minutesChange(0);
            } else {
                props.secondsChange(props.seconds + 40);
                props.minutesChange(props.minutes - 1);
            }
        } else {
            props.secondsChange(props.seconds - 20);
        }
    };

    return (
        <input
            type={"button"}
            className={"button time-down"}
            onClick={timeDown}
            value={"-20 sec"}
        />
    );
}

export default LessTime;
