import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action("accordion mode change event fired")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue: "Menu",
    collapsed: true,
    onClick: callback
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    titleValue: "Users",
    collapsed: false,
    onClick: callback
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onClick={() => setValue(!value)}/>
};
ModeChanging.args = {
    titleValue: "Users"
}