import React, { FC, useEffect, useState } from "react"
import { List } from "../components/List"
import { UserItem } from "../components/UserItem"
import { IUser } from "../types/types"

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const parsedUsers = (await data.json()) as IUser[]
        setUsers(parsedUsers)
    }

    return (
        <div className='app'>
            <List
                title='Users 👨'
                items={users}
                renderItem={(user: IUser) => (
                    <UserItem user={user} key={user.id} />
                )}
            />
        </div>
    )
}

export { UserPage }
