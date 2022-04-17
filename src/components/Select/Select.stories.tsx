import React, {useState} from "react";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select
}

export const SelectWithValue = () => {

    const [value, setValue] = useState("1")

    return (
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: "1", title: "none"},
                {value: "2", title: "Bob"},
                {value: "3", title: "John"},
                {value: "4", title: "Ann"}
            ]}
        />
    )
}

export const SelectWithoutValue = () => {

    const [value, setValue] = useState(null)

    return (
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: "1", title: "none"},
                {value: "2", title: "Bob"},
                {value: "3", title: "John"},
                {value: "4", title: "Ann"}
            ]}
        />
    )
}