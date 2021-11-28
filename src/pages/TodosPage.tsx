import React, { useEffect, useState } from "react"
import { List } from "../components/List"
import { TodoItem } from "../components/TodoItem"
import { ITodo } from "../types/types"

const TodosPage = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        const data = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        )
        const parsedTodos = (await data.json()) as ITodo[]
        setTodos(parsedTodos)
    }

    return (
        <div>
            <List
                title='Todos 📝'
                items={todos}
                renderItem={(todo: ITodo) => (
                    <TodoItem todo={todo} key={todo.id} />
                )}
            />
        </div>
    )
}

export { TodosPage }
