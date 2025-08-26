'use client'

import { useVerifyTokenMutation } from "@/store/api/authApi"
import { userProfile } from "@/types/auth"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const AuthToken = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    const router = useRouter()

    const [verifyToken, { error, isLoading, data: currentData }] =
        useVerifyTokenMutation()

    const [userProfile, setUserProfile] = useState<userProfile | null>(null)

    useEffect(() => {
        if (token) {
            verifyToken({ token })
        }
    }, [token, verifyToken])

    useEffect(() => {
        if (currentData?.data) {
            setUserProfile(currentData.data)

        }
    }, [currentData])

    useEffect(() => {
        if (userProfile?.email_verified) {
            const timer = setTimeout(() => router.replace('/'), 3000)
            return () => clearTimeout(timer)
        }
    }, [userProfile, router])

    if (!token) {
        return (
            <div className="flex justify-center items-center flex-col">
                <h1>Invalid Token!</h1>
                <h1>Click here to resend the verification link!</h1>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center">
                <h1>Verifying...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-center">
                    {(error as any)?.data?.error ?? "Verification failed"}
                </h1>
                <h1>Click here to resend the verification link!</h1>
            </div>
        )
    }

    if (userProfile?.email_verified) {
        return (
            <div className="flex justify-center items-center">
                <h1>Token has been verified!</h1>
            </div>
        )
    }

    return null
}

export default AuthToken
