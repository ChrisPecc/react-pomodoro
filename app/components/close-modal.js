import React from "react";

function CloseModal(props) {
    const closeModal = () => {
        props.setIsModalActive(false);
    };

    return (
        <input
            type={"button"}
            className={"button closeModal"}
            onClick={closeModal}
            value={"Close"}
        />
    );
}

export default CloseModal;
