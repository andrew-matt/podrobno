import React from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callback = action("on or off clicked")

export const OnMode = () => <UncontrolledOnOff defaultValue={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultValue={false} onChange={callback}/>