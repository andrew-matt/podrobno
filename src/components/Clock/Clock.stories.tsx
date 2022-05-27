import React from 'react';
import {Clock} from "./Clock";
import AnalogClock from "./AnalogClock";

export default {
    title: 'Clock',
    component: Clock
}

export const DigitalClockExample = () => {
    return <Clock/>
};

export const AnalogClockExample = () => {
    return <AnalogClock/>
};