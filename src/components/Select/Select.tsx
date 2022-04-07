import React, {useState} from "react";
import s from './Select.module.css'

type ItemType = {
    value: any
    title: string
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [collapsed, setCollapsed] = useState(true)

    const onSelectClick = () => {
        setCollapsed(!collapsed)
    }

    const onDivClick = () => {
        !collapsed && onSelectClick()
    }

    return (
        <div className={s.select} onClick={onDivClick}>
            <div className={s.collapsed} onClick={onSelectClick}>{props.value}</div>
            {!collapsed && props.items.map((i, index) => {

                const onItemClickHandler = () => {
                    props.onChange(i.value)
                    onSelectClick()
                }

                return (
                    <div
                        key={index}
                        className={s.unCollapsed}
                        onClick={onItemClickHandler}
                    >
                        {i.title}
                    </div>)
            })
            }
        </div>
    )
}