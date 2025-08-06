import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SignupDTO } from '@/types/auth'

type SignupSucess = {
  message: string;
  data: {
    id: string;
    email: string;
  };
};

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl:`${process.env.NEXT_PUBLIC_BACKEND_URL_BASE}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`}),
    tagTypes: ['Auth'],
    endpoints:(builder) =>({
        signup: builder.mutation<SignupSucess, SignupDTO>({
            query: (data) =>({
                url:'/auth/signup',
                method: 'POST',
                body: data,
                // headers: { 'Content-Type': 'application/json' },
            })
        })
    })
})

export const {useSignupMutation} = authApi