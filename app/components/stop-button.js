import React from "react";

function StopButton(props) {
    const stop = () => {
        props.setMinutes(0);
        props.setSeconds(0);
        props.setIsActive(false);
    };

    return (
        <input
            type={"button"}
            className={"button stop"}
            onClick={stop}
            value={"Stop"}
        />
    );
}

export default StopButton;
