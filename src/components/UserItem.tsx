import React, { FC } from "react"
import { IUser } from "../types/types"

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
    return (
        <div
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
