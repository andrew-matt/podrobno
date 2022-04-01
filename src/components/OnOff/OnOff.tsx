import React from 'react';

type OnOffPropsType = {
    on: boolean
    onClick: () => void
}

export const OnOff: React.FC<OnOffPropsType> = (props) => {

    const OnStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        padding: "2px",
        marginLeft: "2px",
        border: "1px solid black",
        backgroundColor: props.on ? "green" : "white"
    }

    const OffStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        padding: "2px",
        marginLeft: "2px",
        border: "1px solid black",
        backgroundColor: props.on ? "white" : "red"
    }

    const indicatorStyle = {
        display: "inline-block",
        marginLeft: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            <div style={OnStyle} onClick={props.onClick}>On</div>
            <div style={OffStyle} onClick={props.onClick}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
