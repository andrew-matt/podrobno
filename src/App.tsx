import React, {useState} from 'react';
import './App.css';
import {Select} from "./components/Select/Select";

function App() {

    const [items, setItems] = useState([
        {value: 1, title: "none"},
        {value: 2, title: "Bob"},
        {value: 3, title: "John"},
        {value: 4, title: "Ann"}
    ])

    const [value, setValue] = useState(items[0].title)


    const onItemClick = (value: any) => {
        const item = items.find(i => i.value === value)
        if (item) {
            setValue(item.title)
        }
    }

    return (
        <div className={"App"}>
            <Select value={value} onChange={onItemClick} items={items}/>
        </div>
    );
}

export default App;
