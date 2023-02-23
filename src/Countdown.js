import React, { useEffect, useRef, useState } from "react";
import CountdownItem from "./CountdownItem";
import "./Countdown.css";

const Countdown = () => {
    const [daysText, setDaysText] = useState("00");
    const [hoursText, setHoursText] = useState("00");
    const [minutesText, setMinutesText] = useState("00");
    const [secondsText, setSecondsText] = useState("00");

    const targetDate = new Date("2023-03-09T00:00:00");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const distance = targetDate.getTime() - now.getTime();
            if (distance < 0) {
                clearInterval(intervalId);
                setDaysText(0);
                setHoursText(0);
                setMinutesText(0);
                setSecondsText(0);
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setDaysText(days.toString().padStart(2, "0"));
                setHoursText(hours.toString().padStart(2, "0"));
                setMinutesText(minutes.toString().padStart(2, "0"));
                setSecondsText(seconds.toString().padStart(2, "0"));
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="CountdownCont">
            <div className="CountdownItemCont">
                <span className="CountdownItem">{daysText}</span>
                <span className="type">Days</span>
            </div>
            <div className="CountdownItemCont">
                <span className="CountdownItem">{hoursText}</span>
                <span className="type">Hours</span>
            </div>
            <div className="CountdownItemCont">
                <span className="CountdownItem">{minutesText}</span>
                <span className="type">Minutes</span>
            </div>
            <div className="CountdownItemCont">
                <span className="CountdownItem">{secondsText}</span>
                <span className="type">Seconds</span>
            </div>
        </div>
    );
};

export default Countdown;
