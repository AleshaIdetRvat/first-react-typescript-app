import React, { FC, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { UserItem } from "../components/UserItem"

import { IUser } from "../types/types"

interface UrlParamId {
    id: string
}

const UserDetailPage: FC = () => {
    const navigate = useNavigate()
    const params = useParams() as UrlParamId

    const [user, setUser] = useState<IUser>({
        id: -1,
        name: "",
        email: "",
        address: { city: "", street: "", zipcode: "" },
    })

    useEffect(() => {
        fetchUser(+params.id)
    }, [])

    async function fetchUser(id: number) {
        const data = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        )
        const parsedUser = (await data.json()) as IUser
        setUser(parsedUser)
    }
    const onBack = () => navigate(-1)

    return (
        <div>
            <button onClick={onBack}>back</button>
            <UserItem user={user} />
        </div>
    )
}

export { UserDetailPage }
