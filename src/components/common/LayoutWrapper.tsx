'use client'
import { usePathname } from 'next/navigation'
import NavBar from './NavBar'

const noPaddingRoutes = ['/signup/verify-sent','/signup','/login']

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const shouldShowPadding = !noPaddingRoutes.includes(pathname)

    return (
        <>
            <NavBar />
            <main className={`min-h-screen ${shouldShowPadding ? 'pt-14' : ''}`}>
                {children} 
            </main>
        </>
    )
}