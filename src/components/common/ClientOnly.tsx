'use client'

import { ReactNode, useEffect, useState } from "react"

type ClientOnlyProps = {
    children: ReactNode
}

/**
 * ClientOnly component
 *
 * Ensures that the wrapped children are only rendered on the client side.
 * Useful for avoiding server-side rendering issues or hydration errors -- especially with mobile web
 * when components rely on `window` or other browser-only APIs.
 *
 * @param {React.ReactNode} children - The child elements to render on the client
 * @returns {JSX.Element | null} The children if mounted on the client, otherwise null
 */
const ClientOnly = ({ children }: ClientOnlyProps) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>{children}</>
    )
}

export default ClientOnly