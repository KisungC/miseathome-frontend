"use client"
import Textbox from "@/components/common/Textbox/Textbox"
import Select from "@/components/common/Select/Select"
import { SubmitHandler, useForm } from "react-hook-form"
import { SignupDTO } from "@/types/auth"
import { useSignupMutation } from "@/store/api/authApi"
import { useState } from "react"
import { useRouter } from "next/navigation"

type SignupError = {
  status: number;
  data?: {
    message?: string;
    [key: string]: any;
  };
};


const Signup = () => {

    const [doSignup, { error, isLoading, data: currentData }] = useSignupMutation()
    const [errorMsg, setErrorMsg] = useState('')
    const router = useRouter()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<SignupDTO & { password2: string }>({
        defaultValues: {
            email: '',
            password: '',
            password2: '',
            username: '',
            firstname: '',
            lastname: '',
            skillLevel: 'Choose a Cooking Skill'
        },
        criteriaMode: "all",
        shouldFocusError: true
    })

    const onSubmit: SubmitHandler<SignupDTO & { password2: string }> = async(data) => {
        setErrorMsg('');
        try {
            const {password2, ...rest} = data
            const result = await doSignup(rest).unwrap()

            console.log(result)
            // e.g. redirect on success:
            router.replace("./verify-sent")
        } catch (err) {
            const error = err as SignupError
            console.error(error)
            setErrorMsg(error.data?.error || "Signup failed")
        }
    }

    return (
        <>
            <div className="w-full h-dvh flex justify-center items-center border">
                <div className="w-full max-w-lg m-5">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Textbox className="my-1" placeholder="example@example.com" title="Email" error={errors.email?.message} {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Please enter a valid email."
                            },
                        })} />
                        <Textbox className="my-1" placeholder="Password" title="Password" type="password" error={errors.password?.message} {...register("password", {
                            required: "Password is required.",
                            minLength: {
                                value: 8,
                                message: "Password must be longer than 8 characters."
                            },
                            maxLength: {
                                value: 128,
                                message: "Password must be less than 128 characters."
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,128}$/,
                                message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                            }
                        })} />
                        <Textbox className="my-1" placeholder="Password Confirmation" title="Password Confirmation" type="password" error={errors.password2?.message} {...register("password2", {
                            required: "Password Confirmation is required.",
                            validate:
                                password2 => password2 === watch("password") || "Passwords do not match"
                        })} />
                        <Textbox className="my-1" placeholder="Username" title="Username" error={errors.username?.message} {...register("username", {
                            required: "Username is required.",
                            minLength: {
                                value: 3,
                                message: "Username has to be more than 3 characters."
                            },
                            maxLength: {
                                value: 38,
                                message: "Username has to be less than 38 characters."
                            }
                        })} />
                        <Textbox className="my-1" placeholder="First Name" title="First Name" error={errors.firstname?.message} {...register("firstname", {
                            required: "First name is required.",
                            maxLength: {
                                value: 50,
                                message: "First name has to be lass than 50 characters"
                            }
                        })} />
                        <Textbox className="my-1" placeholder="Last Name" title="Last Name" error={errors.lastname?.message} {...register("lastname", {
                            required: "Last name is required.",
                            maxLength: {
                                value: 50,
                                message: "Last name has to be lass than 50 characters"
                            }
                        })} />
                        <Select title="Cooking Skill" error={errors.skillLevel?.message} {...register("skillLevel", {
                            validate: value => value !== "Choose a Cooking Skill" || "Please select a valid skill"
                        })}>
                            <option defaultValue={"Choose a Cooking Skill"}>Choose a Cooking Skill</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Home Cook">Home Cook</option>
                            <option value="Professional">Professional</option>
                        </Select>

                        <div className="flex justify-center items-center sm:justify-end">
                            <button type="submit" disabled={isLoading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 w-full sm:w-auto ">
                                {isLoading ? "Signing up…" : "Sign up"}
                            </button>
                        </div>
                        {errorMsg && <p className="text-red-500 text-sm mt-1">{errorMsg}</p>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup