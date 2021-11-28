import React from "react"

interface ListProps<T> {
    title?: string
    items: T[]
    renderItem: (item: T) => React.ReactNode
}

function List<T>(props: ListProps<T>) {
    const { renderItem, items, title } = props

    return (
        <div
            style={{
                boxShadow: "inset 0px 0px 55px #00000025",
                padding: "20px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
            }}
        >
            <h2 style={{ margin: "0" }}>{title}</h2>
            {items.map(renderItem)}
        </div>
    )
}

export { List }
