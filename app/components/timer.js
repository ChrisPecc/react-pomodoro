import React, {useState, useEffect} from "react";
import TimerDisplay from "./timer-display";
import ModalWindow from "./modal";
import Button from "./button";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(20);
    const [isActive, setIsActive] = useState(false);
    const [isModalActive, setIsModalActive] = useState(false);
    const [studyBreak, setStudyBreak] = useState(20);
    const [isStudyTimer, setIsStudyTimer] = useState(true);

    const toggleStudy = () => {
        if (isStudyTimer) {
            setIsStudyTimer(false);
            setStudyBreak(5);
            setMinutes(5);
        } else {
            setIsStudyTimer(true);
            setStudyBreak(20);
            setMinutes(20);
        }
        setSeconds(0);
    };

    const toggleStart = () => {
        if (!isActive) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const stop = () => {
        setMinutes(0);
        setSeconds(0);
        setIsActive(false);
    };

    const reset = () => {
        // setMinutes(20);
        setMinutes(studyBreak);
        setSeconds(0);
        setIsActive(false);
        setIsModalActive(false);
    };

    const minDown = () => {
        if (minutes === 0) {
            setMinutes(0);
        } else {
            setMinutes(minutes - 1);
        }
    };

    const timeDown = () => {
        if (seconds < 20) {
            if (minutes === 0) {
                setSeconds(0);
                setMinutes(0);
            } else {
                setSeconds(seconds + 40);
                setMinutes(minutes - 1);
            }
        } else {
            setSeconds(seconds - 20);
        }
    };

    const timeUp = () => {
        if (seconds >= 40) {
            setSeconds(seconds - 40);
            setMinutes(minutes + 1);
        } else {
            setSeconds(seconds + 20);
        }
    };

    const minUp = () => {
        setMinutes(minutes + 1);
    };

    const closeModal = () => {
        setIsModalActive(false);
    };

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                        setIsModalActive(true);
                        setIsActive(false);
                    } else {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else if (!isActive) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });

    return (
        <div className={"pomodoro"}>
            <section className={"timer"}>
                <TimerDisplay minutes={minutes} seconds={seconds} />
                <div className={"buttons-section"}>
                    <div className={"command-buttons"}>
                        <Button
                            className={"button button-toggle start"}
                            handleOnClick={toggleStart}
                            label={!isActive ? " Start" : "Pause"}
                            isActive={isModalActive ? true : false}
                        />
                        <Button
                            className={"button button-stop"}
                            handleOnClick={stop}
                            label={"Stop"}
                            isActive={isModalActive ? true : false}
                        />
                        <Button
                            className={"button button-reset"}
                            handleOnClick={reset}
                            label={"Reset"}
                            isActive={isModalActive ? true : false}
                        />
                    </div>
                    <div className={"time-buttons"}>
                        <div className={"time-buttons-down"}>
                            <Button
                                className={"button min-down"}
                                handleOnClick={minDown}
                                label={"-1m"}
                                isActive={isModalActive ? true : isActive}
                            />
                            <Button
                                className={"button sec-down"}
                                handleOnClick={timeDown}
                                label={"-20s"}
                                isActive={isModalActive ? true : isActive}
                            />
                        </div>
                        <div className={"time-buttons-up"}>
                            <Button
                                className={"button sec-up"}
                                handleOnClick={timeUp}
                                label={"+20s"}
                                isActive={isModalActive ? true : isActive}
                            />
                            <Button
                                className={"button min-up"}
                                handleOnClick={minUp}
                                label={"+1m"}
                                isActive={isModalActive ? true : isActive}
                            />
                        </div>
                    </div>
                </div>
                <div className={"set-timer-type"}>
                    <Button
                        className={"button study-toggle"}
                        handleOnClick={toggleStudy}
                        label={
                            isStudyTimer
                                ? "Change to Break timer"
                                : "Change to Study timer"
                        }
                        isActive={isModalActive ? true : isActive}
                    />
                </div>
            </section>
            {isModalActive && (
                <ModalWindow reset={reset} closeModal={closeModal} />
            )}
        </div>
    );
};

export default Timer;
