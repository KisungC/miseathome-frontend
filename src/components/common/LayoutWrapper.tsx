'use client'
import { usePathname } from 'next/navigation'
import NavBar from './NavBar'

const noPaddingRoutes = ['/signup/verify-sent','/signup']

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const shouldShowPadding = !noPaddingRoutes.includes(pathname)

    return (
        <>
            <NavBar />
            <main className={`min-h-dvh ${shouldShowPadding ? 'pt-14' : ''}`}>
                {children}
            </main>
        </>
    )
}