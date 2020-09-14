import React from "react";

function MoreTime(props) {
    const timeUp = () => {
        if (props.seconds >= 40) {
            props.secondsChange(props.seconds - 40);
            props.minutesChange(props.minutes + 1);
        } else {
            props.secondsChange(props.seconds + 20);
        }
    };

    return (
        <input
            type={"button"}
            className={"button time-up"}
            onClick={timeUp}
            value={"+20 sec"}
        />
    );
}

export default MoreTime;
