import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, phoneNumber:null, isOtpsent:null, isPasswordSet:null },
    reducers: {
        setAuthState:(state, action)=>{
            const authState = action.payload
            state.phoneNumber = authState.phoneNumber
            state.isOtpsent = authState.isOtpSent
            state.isPasswordSet = authState.isPasswordSet
        },
        setCredentials: (state, action) => {
            const { accessToken } = action.payload
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.token = null
            state.phoneNumber = null
            state.isOtpsent = null
            state.isPasswordSet = null
        },
    }
})

export const { setAuthState, setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state: { auth: { token: any } }) => state.auth.token
export const selectPasswordStatus = (state: { auth: { isPasswordSet: any } }) => state.auth.isPasswordSet
export const selectOtpStatus = (state: { auth: { isOtpsent: any } }) => state.auth.isOtpsent