import React from "react";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select
}

export const SelectMode = () => {
    return <Select value={1} onChange={() => {}} items={[{title: "Minsk", value: 1}, {title: "Moscow", value: 2}, {title: "Kiev", value: 3}]}/>
}