import React, {useState} from "react";
import {Select, SelectPropsType} from "./Select";
import {Story} from "@storybook/react";
import s from './Select.module.css'

export default {
    title: 'Select',
    component: Select
}

export const SelectWithValue: Story<SelectPropsType> = (args) => {
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

export const SelectWithoutValue: Story<SelectPropsType> = (args) => {
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

export const SelectCitiesWithValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState("1")
    let copy = args.items.map(el => ({...el}))
    let JapaneseCities = copy.filter(el => el.country === 'Japan')
    let citiesStartWithM = args.items.filter(el => el.title.indexOf("M") > -1)
    let citiesWithPopOver10M = args.items.filter(el => el.population && el.population > 10000000)
    return(
        <div className={s.cities}>
            <Select {...args} items={JapaneseCities} value={value} onChange={setValue}/>
            <Select {...args} items={citiesStartWithM} value={value} onChange={setValue}/>
            <Select {...args} items={citiesWithPopOver10M} value={value} onChange={setValue}/>
        </div>
    )
}

SelectCitiesWithValue.args = {
    items: [
        {value: "1", title: "Osaka", country: "Japan", population: 19222665},
        {value: "2", title: "Tokyo", country: "Japan", population: 37435191},
        {value: "3", title: "Nagoya", country: "Japan", population: 9571596},
        {value: "4", title: "Moscow", country: "Russia", population: 10381222},
        {value: "5", title: "Fukuoka", country: "Japan", population: 5502591},
        {value: "6", title: "Melbourne", country: "Australia", population: 4246375},
        {value: "7", title: "Hiroshima", country: "Japan", population: 2072344},
        {value: "8", title: "Mogadishu", country: "Somalia", population: 2587183},
        {value: "9", title: "Mumbai", country: "India", population: 12691836},
        {value: "10", title: "Matsuyama", country: "Japan", population: 506632},
        {value: "11", title: "Madrid", country: "Spain", population: 3255944},
        {value: "12", title: "Delhi ", country: "India", population: 29399141},
    ]
}