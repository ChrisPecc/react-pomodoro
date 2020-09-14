import React, {useState, useEffect} from "react";
import MoreTime from "./components/more-time";
import LessTime from "./components/less-time";
import StartButton from "./components/start-button";
import ResetButton from "./components/reset-button";
import StopButton from "./components/stop-button";
import TimerDisplay from "./components/timer-display";
import ModalWindow from "./components/modal";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(10);
    const [isActive, setIsActive] = useState(false);
    const [isModalActive, setIsModalActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                        setIsModalActive(true);
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
        <div className={"app"}>
            <TimerDisplay minutes={minutes} seconds={seconds} />

            <div className={"command-buttons"}>
                <StartButton isActive={isActive} setIsActive={setIsActive} />
                <StopButton
                    setSeconds={setSeconds}
                    setMinutes={setMinutes}
                    setIsActive={setIsActive}
                />
                <ResetButton
                    setSeconds={setSeconds}
                    setMinutes={setMinutes}
                    setIsActive={setIsActive}
                />
            </div>
            <div className={"time-buttons"}>
                <MoreTime
                    seconds={seconds}
                    secondsChange={setSeconds}
                    minutes={minutes}
                    minutesChange={setMinutes}
                />
                <LessTime
                    seconds={seconds}
                    secondsChange={setSeconds}
                    minutes={minutes}
                    minutesChange={setMinutes}
                />
            </div>
            {isModalActive && (
                <ModalWindow
                    setIsModalActive={setIsModalActive}
                    setSeconds={setSeconds}
                    setMinutes={setMinutes}
                />
            )}
        </div>
    );
};

export default Timer;
