import React from "react";

function Button(props) {
    return (
        <button
            type={"button"}
            className={props.className}
            onClick={props.handleOnClick}
            disabled={props.isActive}>
            {props.label}
        </button>
    );
}

export default Button;
