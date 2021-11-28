import React, { FC } from "react"
import { ITodo } from "../types/types"

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <div
            style={{
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "inset 0px 4px 10px #00000040",
                background: "whitesmoke",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
            }}
        >
            #️⃣{todo.id}: {todo.title}{" "}
            <span
                style={{
                    padding: "5px",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 8px #00000025",
                    background: "whitesmoke",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {todo.completed ? "🟢" : "🔴"}
            </span>
        </div>
    )
}

export { TodoItem }
