import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SignupDTO, userProfile } from '@/types/auth'
import { BaseSuccessResponse } from '@/types/globals';

type SignupSuccess = BaseSuccessResponse & {
  data: {
    id: string;
    email: string;
  };
}

type VerifiedSuccess = BaseSuccessResponse & {
  data: userProfile
}

type SigninSuccess = BaseSuccessResponse & {
  data: userProfile
}

type SigninDTO = {
  email: string
  password: string
}

type emailVerificationToken = {
  token: string
}




export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL_BASE}:${process.env.NEXT_PUBLIC_BACKEND_PORT}` }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    signup: builder.mutation<SignupSuccess, SignupDTO>({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      })
    }),
    verifyToken: builder.mutation<VerifiedSuccess, emailVerificationToken>({
      query: (token) => ({
        url: '/auth/token-verify',
        method: 'POST',
        body: token
      })
    }),
    signin: builder.mutation<SigninSuccess, SigninDTO>({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        body: data
      })
    })
  })
})

export const { useSignupMutation, useVerifyTokenMutation, useSigninMutation } = authApi