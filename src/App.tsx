import React from "react"
import { Card, CardVariant } from "./components/Card"
import { EventsExample } from "./components/EventsExample"
import { Routes, Route, Link } from "react-router-dom"
import { UserPage } from "./pages/UserPage"
import { TodosPage } from "./pages/TodosPage"
import { UserDetailPage } from "./pages/UserDetailPage"

function App() {
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
            {/* <EventsExample /> */}
            <nav>
                <Link to='users'>Users</Link> | <Link to='todos'>Todos</Link>
            </nav>
            <Routes>
                <Route index element={<UserPage />} />
                <Route path='todos' element={<TodosPage />} />
                <Route path='users' element={<UserPage />} />
                <Route path='users' element={<UserPage />} />
                <Route path='users/:id' element={<UserDetailPage />} />
            </Routes>
        </div>
    )
}

export default App
