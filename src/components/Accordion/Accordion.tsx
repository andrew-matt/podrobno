import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
    color?: string
    items: string[]
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} color={props.color}/>
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3
        style={{color: props.color ? props.color : 'black'}}
        onClick={(e) => props.onClick()}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
    items: string[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index) => <li key={index}>{i}</li>)}
    </ul>
}

