import React, {useEffect, useState} from "react";

const getTime = (time: number) => time < 10 ? "0" + time : time

export const Clock = () => {
    const [date, setDate] = useState(new Date);

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("TICK")
            setDate(new Date);
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    return (
        <div>
            <span>{getTime(date.getHours())}</span>
            :
            <span>{getTime(date.getMinutes())}</span>
            :
            <span>{getTime(date.getSeconds())}</span>
        </div>
    )
}

