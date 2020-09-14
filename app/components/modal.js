import React from "react";
import ResetTimer from "./reset-button";
import CloseModal from "./close-modal";

function ModalWindow(props) {
    return (
        <div>
            <h2>{"Your time is up!"}</h2>
            <CloseModal
                setIsModalActive={props.setIsModalActive}
                setSeconds={props.setSeconds}
                setMinutes={props.setMinutes}
            />
            <ResetTimer setIsModalActive={props.setIsModalActive} />
        </div>
    );
}

export default ModalWindow;
