import React, {useState} from "react";
import {Select, SelectedPropsType} from "./Select";
import {Story} from "@storybook/react";

export default {
    title: 'Select',
    component: Select
}

export const SelectWithValue: Story<SelectedPropsType> = (args) => {
    const [value, setValue] = useState("1")
    return <Select {...args} value={value} onChange={setValue}/>

}
SelectWithValue.args = {
    items: [
        {value: "1", title: "none"},
        {value: "2", title: "Bob"},
        {value: "3", title: "John"},
        {value: "4", title: "Ann"}
    ]
}

export const SelectWithoutValue: Story<SelectedPropsType> = (args) => {
    const [value, setValue] = useState(null)
    return <Select {...args} value={value} onChange={setValue}/>
}
SelectWithoutValue.args = {
    items: [
        {value: "1", title: "none"},
        {value: "2", title: "Bob"},
        {value: "3", title: "John"},
        {value: "4", title: "Ann"}
    ]
}