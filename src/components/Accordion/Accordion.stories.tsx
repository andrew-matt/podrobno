import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        }
    }
}

const callback = action("accordion mode change event fired")
const onClickCallback = action("item has been clicked")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue: "Menu",
    collapsed: true,
    onChange: callback,
    items: [],
    onClick: onClickCallback
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    titleValue: "Users",
    collapsed: false,
    onChange: callback,
    items: [{title: "1", value: 1}, {title: "2", value: 2}, {title: "3", value: 3}],
    onClick: onClickCallback
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
};
ModeChanging.args = {
    titleValue: "Users",
    items: [{title: "Bob", value: 1}, {title: "John", value: 2}, {title: "Ann", value: 3}],
    onClick: onClickCallback
}