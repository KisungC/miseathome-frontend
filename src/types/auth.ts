export type SignupDTO = {
    email: string,
    password: string,
    username: string,
    firstname: string,
    lastname: string,
    skillLevel: 'Beginner' | 'Home Cook' | 'Professional' | 'Choose a Cooking Skill'
}

export type userProfile = {
    userid : number,
    user_name:string,
    first_name:string,
    last_name:string,
    skill_level:string,
    email_verified: boolean
    accessToken?:string
}