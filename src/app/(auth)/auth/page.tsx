'use client'

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

const AuthToken = () =>{
    const searchParams = useSearchParams()

    const token = searchParams.get('token')

    //send POST request with token

    useEffect(()=>{

    })

    return(
        <>
        </>
    )
}

export default AuthToken