// index.js
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import MoreTime from "./components/more-time.js";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(10);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        if (!isActive) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    function stop() {
        setIsActive(false);
        setMinutes(0);
        setSeconds(0);
    }

    function reset() {
        setMinutes(10);
        setSeconds(0);
        setIsActive(false);
    }

    function timeDown() {
        if (seconds <= 20) {
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
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
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
    }, [isActive, seconds]);

    return (
        <div className={"app"}>
            <div className={"time"}>
                {minutes < 10 && "0"}
                {minutes}
                {":"}
                {seconds < 10 && "0"}
                {seconds}
            </div>

            <div className={"command-buttons"}>
                <input
                    type={"button"}
                    className={"button start"}
                    onClick={toggle}
                    value={!isActive ? "Start" : "Pause"}
                />
                <input
                    type={"button"}
                    className={"button pause"}
                    onClick={stop}
                    value={"Stop"}
                />
                <input
                    type={"button"}
                    className={"button"}
                    onClick={reset}
                    value={"Reset"}
                />
            </div>
            <div className={"time-buttons"}>
                <MoreTime
                    seconds={seconds}
                    onSecondsChange={setSeconds}
                    minutes={minutes}
                    onMinutesChange={setMinutes}
                />
                <input
                    type={"button"}
                    className={"button time-down"}
                    onClick={timeDown}
                    value={"-20 sec"}
                />
            </div>
        </div>
    );
};

ReactDOM.render(<Timer />, document.querySelector("#root"));
