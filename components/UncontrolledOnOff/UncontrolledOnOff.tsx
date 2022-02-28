import React, {useState} from 'react';

export const UncontrolledOnOff = () => {

    const [on, setOn] = useState(false)

    const OnStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        padding: "2px",
        marginLeft: "2px",
        border: "1px solid black",
        backgroundColor: on ? "green" : "white"
    }

    const OffStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        padding: "2px",
        marginLeft: "2px",
        border: "1px solid black",
        backgroundColor: on ? "white" : "red"
    }

    const indicatorStyle = {
        display: "inline-block",
        marginLeft: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        backgroundColor: on ? "green" : "red"
    }



    return (
        <div>
            <div style={OnStyle} onClick={() => {setOn(true)}}>On</div>
            <div style={OffStyle} onClick={() => {setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
