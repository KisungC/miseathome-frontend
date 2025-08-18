'use client'
import { usePathname } from 'next/navigation'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'

const noPaddingRoutes = ['/signup/verify-sent', '/signup']

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const [showPadding, setShowPadding] = useState(true)

    console.log('ComponentName render', {
        isClient: typeof window !== 'undefined',
        pathname: (typeof window !== 'undefined' && window.location) ? window.location.pathname : 'server',
        props: { /* any small props to check */ }
    });

    useEffect(() => {
        const path = pathname ?? ''
        if (noPaddingRoutes.includes(path)) {
            setShowPadding(false)
        } else {
            setShowPadding(true)
        }
    }, [pathname])

    return (
        <>
            <NavBar />
            <main className={`h-dvh ${showPadding ? 'pt-14' : ''}`}>
                {children}
            </main>
        </>
    )
}