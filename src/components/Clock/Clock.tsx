import React, {useEffect, useState} from "react";

export const Clock = () => {
    const [date, setDate] = useState(new Date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    useEffect(() => {
        setInterval(() => {
            console.log("TICK")
            setDate(new Date);
        }, 1000)
    }, [])

    return (
        <>
            {time}
        </>
    )
}

