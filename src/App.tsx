import React, { useEffect, useState } from "react"
import { Card, CardVariant } from "./components/Card"
import { EventsExample } from "./components/EventsExample"
import { List } from "./components/List"
import { TodoItem } from "./components/TodoItem"
import { UserItem } from "./components/UserItem"
import { ITodo, IUser } from "./types/types"
function App() {
    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])

    async function fetchUsers() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const parsedUsers = (await data.json()) as IUser[]
        setUsers(parsedUsers)
    }

    async function fetchTodos() {
        const data = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        )
        const parsedTodos = (await data.json()) as ITodo[]
        setTodos(parsedTodos)
    }

    return (
        <div className='app'>
            <Card
                onClick={() => console.log("On card click!")}
                width='100%'
                borderRadius='8px'
                variant={CardVariant.filled}
            >
                <h1>Hello dude ✌️</h1>
            </Card>

            <EventsExample />

            <List
                title='Users 👨'
                items={users}
                renderItem={(user: IUser) => (
                    <UserItem user={user} key={user.id} />
                )}
            />

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

export default App
