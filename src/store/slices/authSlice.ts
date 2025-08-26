import { userProfile } from "@/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userProfileInitial: userProfile = {
    userid: 0,
    user_name: "",
    email_verified: false,
    first_name: "",
    last_name: "",
    skill_level: ""
}

const authSlice = createSlice({
    name: 'userProfile',
    initialState: userProfileInitial,
    reducers: {
        setProfile: (state, action: PayloadAction<userProfile>) => {
            return action.payload
        }
    }
})
export const { setProfile } = authSlice.actions
export default authSlice.reducer