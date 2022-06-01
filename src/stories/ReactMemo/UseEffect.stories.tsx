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

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1);
        }, 1000);
    }, [])

    return (
        <>
            Hello, counter: {counter} fake: {fake}
            <button onClick={() => setFake(fake + 1)}>+</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("Component rendered with " + counter)

    useEffect(() => {
        console.log("Effect occured " + counter)

        return () => {
            console.log("Reset effect " + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </>
    )
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log("Component rendered with " + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.document.addEventListener('keypress', handler)

        return () => {
            window.document.removeEventListener('keypress', handler)
        }

    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log("Component rendered with " + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("Timeout expired")
            setText("3 seconds passed")
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }

    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}