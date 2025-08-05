import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { signupDTO } from '@/types/auth'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl:`${process.env.NEXT_PUBLIC_BACKEND_URL_BASE}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`}),
    tagTypes: ['Auth'],
    endpoints:(builder) =>({
        signup: builder.mutation<any, signupDTO>({
            query: (data) =>({
                url:'/signup',
                method: 'POST',
                body: data,
                headers: { 'Content-Type': 'application/json' },
            })
        })
    })
})

export const {useSignupMutation} = authApi