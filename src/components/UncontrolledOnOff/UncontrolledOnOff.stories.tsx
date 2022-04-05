import React, {useState} from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <UncontrolledOnOff onChange={setValue}/>
};