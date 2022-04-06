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

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue: "Menu",
    collapsed: true,
    onClick: callback,
    items: ["Bob", "John", "Ann"]
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    titleValue: "Users",
    collapsed: false,
    onClick: callback,
    items: ["1", "2", "3"]
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onClick={() => setValue(!value)}/>
};
ModeChanging.args = {
    titleValue: "Users",
    items: ["Bob", "John", "Ann"]
}