import React, {useState} from 'react';
import './App.css';
import {Select} from "./components/Select/Select";

function App() {

    const [items, setItems] = useState([
        {value: "1", title: "none"},
        {value: "2", title: "Bob"},
        {value: "3", title: "John"},
        {value: "4", title: "Ann"}
    ])

    const [value, setValue] = useState("1")

    return (
        <div className={"App"}>
            <Select value={value} items={items} onChange={setValue}/>
        </div>
    );
}

export default App;
