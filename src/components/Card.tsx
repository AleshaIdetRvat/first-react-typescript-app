import React, { FC } from "react"
import { CssStyles } from "../types/types"

export enum CardVariant {
    outlined = "outlined",
    filled = "filled",
}

interface CardProps {
    width?: string
    borderRadius?: string
    variant?: CardVariant
    onClick?: () => void
    children: React.ReactChild | React.ReactNode
}

// (-) FC -> Functional Component

const Card: FC<CardProps> = ({
    width,
    borderRadius,
    children,
    variant = CardVariant.filled,
}) => {
    const cardStyle: CssStyles = {
        width,
        borderRadius,
        outline: variant === CardVariant.outlined ? "3px solid tomato" : "none",
        background: variant === CardVariant.filled ? "tomato" : "transparent",
        textAlign: "center",
    }

    return <div style={cardStyle}>{children}</div>
}

export { Card }
