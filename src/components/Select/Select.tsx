import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [items, setItems] = useState("none")
    const [collapsed, setCollapsed] = useState(true)

    const onItemClick = (value: any) => {
        const item = props.items.find(i => i.value === value)
        if (item) {
            setItems(item.title)
        }
    }

    const onSelectClick = () => {
        setCollapsed(!collapsed)
    }

    const onDivClick = () => {
        !collapsed && setCollapsed(!collapsed)
    }

    return (
        <div style={{width: "1878px", height: "895px", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center"}} onClick={onDivClick}>
            <div style={{border: "1px solid red", width: "70px"}} onClick={onSelectClick}>{items}</div>
            {!collapsed && props.items.map((i, index) => <div key={index} onClick={() => {onItemClick(i.value); onSelectClick()}} style={{border: "1px solid red", width: "70px"}}>{i.title}</div>)}
        </div>
    )
}