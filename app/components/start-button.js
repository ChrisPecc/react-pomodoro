import React from "react";

function StartButton(props) {
    const toggle = () => {
        if (!props.isActive) {
            props.setIsActive(true);
        } else {
            props.setIsActive(false);
        }
    };

    return (
        <input
            type={"button"}
            className={"button start"}
            onClick={toggle}
            value={!props.isActive ? "Start" : "Pause"}
        />
    );
}

export default StartButton;
