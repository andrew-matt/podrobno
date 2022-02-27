import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => {props.setCollapsed(!props.collapsed)}}>-- {props.title} --</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}