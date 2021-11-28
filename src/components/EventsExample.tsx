import React, { FC, useState } from "react"

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("")
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Events Example value:", value)
    }

    const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
        // console.log("DRAG !")
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

    return (
        <div>
            <input value={value} onChange={changeHandler} />
            <button onClick={clickHandler}>click</button>
            <div
                draggable
                onDrag={dragHandler}
                style={{
                    width: "100px",
                    height: "100px",
                    background: "darkorange",
                }}
            ></div>
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
            ></div>
        </div>
    )
}

export { EventsExample }
