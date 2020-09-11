import React from "react";

function MoreTime({seconds, onSecondsChange, minutes, onMinutesChange}) {
    const timeUp = () => {
        if (seconds >= 40) {
            onSecondsChange(seconds - 40);
            onMinutesChange(minutes + 1);
        } else {
            onSecondsChange(seconds + 20);
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
