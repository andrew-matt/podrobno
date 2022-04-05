import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
    defaultValue?: boolean
}

export const UncontrolledOnOff: React.FC<UncontrolledOnOffPropsType> = (props) => {

    const [on, setOn] = useState(props.defaultValue ? props.defaultValue : false)

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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={OnStyle} onClick={onClicked}>On</div>
            <div style={OffStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    );
};
