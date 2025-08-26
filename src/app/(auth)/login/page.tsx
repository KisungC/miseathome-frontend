'use client'
import Textbox from "@/components/common/Textbox/Textbox"
import { useSigninMutation } from "@/store/api/authApi"
import { setProfile } from "@/store/slices/authSlice"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch } from "react-redux"

type SigninDTO = {
    email: string
    password: string
}

type SigninError = {
    error: string,
    code: string
}


const login = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [doSignin, { isLoading, data: currentData }] = useSigninMutation()
    const [error, setError] = useState<string>('')
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SigninDTO>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const handleSignup = () => {
        router.push('/signup')
    }

    const handleSignin: SubmitHandler<SigninDTO> = async (data) => {
        setError('')
        try {
            const result = await doSignin(data).unwrap()
            console.log(result)
            //save result.data in the redux
            dispatch(setProfile(result.data))
            router.push('/')
        } catch (err) {
            const error = err as SigninError
            console.error(error)
            error.error?setError(error.error):setError('Unknown error! Please try again later.')
            
        }
    }

    return (
        <div className="flex h-dvh justify-center pb-16">
            <div className="flex-col justify-center align-middle items-center border rounded-2xl self-center p-3">
                <h1>login</h1>
                <form onSubmit={handleSubmit(handleSignin)}>
                    <Textbox placeholder="email" title="email" error={errors.email?.message} {...register("email",{
                        required:"Email is required.",
                        
                    })
                    }/>
                    <Textbox placeholder="password" title="password" type="password" error={errors.password?.message} {...register("password",{
                        required:"Password is required."
                    })}/>
                    <div className="w-full flex justify-center">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-3" disabled={isLoading}>{isLoading ? "Loading..." : "Sign in"}</button>
                    </div>
                </form>
                {error&&<p className="text-red-500 text-sm mt-1">{error}</p>}
                <p className="inline">Don't have an account yet? Sign up </p>
                <a className="inline text-blue-500 cursor-pointer" onClick={handleSignup}>here!</a>
            </div>
        </div>
    )
}

export default login