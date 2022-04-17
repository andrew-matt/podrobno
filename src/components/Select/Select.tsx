import React, {KeyboardEvent, useEffect, useState} from "react";
import s from './Select.module.css'

export type ItemType = {
    title: string
    value: any
}

export type SelectedPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectedPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendElement) {
                        props.onChange(pretendElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleItems}>
                {selectedItem && selectedItem.title}
            </span>
            {
                active &&
                <div className={s.items}>
                    {props.items.map(i =>
                        <div
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                            onMouseEnter={() => setHoveredElementValue(i.value)}
                            className={s.item + " " + (hoveredItem === i ? s.selected : "")}
                        >
                            {i.title}
                        </div>)}
                </div>
            }
        </div>
    )
}