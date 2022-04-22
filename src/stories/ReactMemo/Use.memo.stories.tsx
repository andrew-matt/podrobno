import {useState} from "react";

export default {
    title: 'useMemo'
}

export const Example1 = () => {
    const [a, setA] = useState(6)
    const [b, setB] = useState(6)

    let resultA = 1
    let resultB = 1

    for (let i = 1; i <= a; i++) {
        resultA = resultA * i
    }

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={e => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={e => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}