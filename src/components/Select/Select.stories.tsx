import React, {useState} from "react";
import {SelectMemo, SelectedPropsType} from "./Select";
import {Story} from "@storybook/react";

export default {
    title: 'Select',
    component: SelectMemo
}

export const SelectWithValue: Story<SelectedPropsType> = (args) => {
    const [value, setValue] = useState("1")
    return <SelectMemo {...args} value={value} onChange={setValue}/>

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
    return <SelectMemo {...args} value={value} onChange={setValue}/>
}
SelectWithoutValue.args = {
    items: [
        {value: "1", title: "none"},
        {value: "2", title: "Bob"},
        {value: "3", title: "John"},
        {value: "4", title: "Ann"}
    ]
}