import React, {ChangeEvent, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Input',
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}