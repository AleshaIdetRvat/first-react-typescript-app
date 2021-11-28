import React, { FC, useRef, useState } from "react"
import { CssStyles } from "../types/types"

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("")
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Events Example value:", inputRef.current?.value)
    }

    const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
        console.log("DRAG !")
    }
    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        console.log("Drooop")
        setIsDrag(false)
    }
    const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        console.log("Leave")
        setIsDrag(false)
    }

    const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        console.log("Over")

        if (!isDrag) setIsDrag(true)
    }

    const inputLabelStyle: CssStyles = {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "10px",
        borderRadius: "6px",
        boxShadow: "0px 2px 8px #00000020",
        marginBottom: "12px",
    }

    return (
        <div>
            <label style={inputLabelStyle}>
                <legend style={{ fontSize: "0.7em" }}>
                    Неуправляемый input
                </legend>
                <input ref={inputRef} />
            </label>

            <label style={inputLabelStyle}>
                <legend style={{ fontSize: "0.7em" }}>Управляемый input</legend>
                <input value={value} onChange={changeHandler} />
            </label>

            <button onClick={clickHandler}>click</button>

            <div
                draggable
                onDrag={dragHandler}
                style={{
                    width: "100px",
                    height: "100px",
                    background: "darkorange",
                }}
            />

            <div
                onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
                style={{
                    transition: "0.2s",
                    backgroundColor: isDrag ? "greenyellow" : "darkorange",
                    width: "100px",
                    height: "100px",
                    marginTop: "20px",
                }}
            />
        </div>
    )
}

export { EventsExample }
