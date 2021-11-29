import React, { FC } from "react"
import { useNavigate } from "react-router-dom"
import { IUser } from "../types/types"

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
    const navigation = useNavigate()

    const onClick = () => {
        navigation(`/users/${user.id}`)
    }

    return (
        <div
            onClick={onClick}
            style={{
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "inset 0px 4px 10px #00000040",
                background: "orange",
            }}
        >
            #{user.id}: {user.name} live in {user.address.city}, street -{" "}
            {user.address.street}
        </div>
    )
}

export { UserItem }
