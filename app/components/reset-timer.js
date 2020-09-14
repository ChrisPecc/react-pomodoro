import React from "react";

function ResetTimer(props) {
    const resetTimer = () => {
        props.setIsModalActive(false);
        props.setSeconds(0);
        props.setMinutes(20);
    };

    return (
        <input
            type={"button"}
            className={"button resettimer"}
            onClick={resetTimer}
            value={"Launch a new Timer"}
        />
    );
}

export default ResetTimer;
