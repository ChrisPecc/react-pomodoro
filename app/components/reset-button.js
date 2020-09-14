import React from "react";

function ResetButton(props) {
    const reset = () => {
        props.setMinutes(10);
        props.setSeconds(0);
        props.setIsActive(false);
    };

    return (
        <input
            type={"button"}
            className={"button"}
            onClick={reset}
            value={"Reset"}
        />
    );
}

export default ResetButton;
