import React from "react";
import Button from "./button";

function ModalWindow(props) {
    return (
        <div className={"modal"}>
            <h2>{"Your time is up!"}</h2>
            <div className={"modal-buttons"}>
                <Button
                    className={"button button-reset"}
                    handleOnClick={props.reset}
                    label={"Launch a new Timer"}
                />
                <Button
                    className={"button button-close-modal"}
                    handleOnClick={props.closeModal}
                    label={"Close"}
                />
            </div>
        </div>
    );
}

export default ModalWindow;
