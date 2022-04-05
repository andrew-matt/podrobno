import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} color={props.color}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3
        style={{color: props.color ? props.color : 'black'}}
        onClick={(e) => props.onClick()}>-- {props.title} --</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

