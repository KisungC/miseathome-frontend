"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const VerifySent = () => {

    const router = useRouter()

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            router.replace('/')
        }, 5000)

        return () => clearTimeout(redirectTimer)
    },[router])

    return (
        <>
        <div className="flex flex-col justify-center items-center h-dvh">
            <p> A verification email has been sent to your email address. Please check your inbox.</p> 
            <p>You will be redirected shortly...</p>
        </div>
        </>
    )
}

export default VerifySent