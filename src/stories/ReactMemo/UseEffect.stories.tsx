import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log("SimpleExample");

   /* useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log("useEffect first render");
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])*/

    /*useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString();
        }, 1000)
    }, [counter])*/

    // useEffect(() => {
    //     setInterval(() => {
    //         setCounter(state => state + 1);
    //     }, 1000);
    // }, [])

    const [date, setDate] = useState(new Date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    useEffect(() => {
        setInterval(() => {
            setDate(new Date);
        }, 1000)
    }, [])

    return (
        <>
            {time}
            {/*Hello, counter: {counter} fake: {fake}*/}
            {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        </>
    )
}