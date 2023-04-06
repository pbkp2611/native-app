import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { accessToken: null, refreshToken:null, uid:null, isOtpsent:null, isPasswordSet:null },
    reducers: {
        setAuthState:(state, action)=>{
            const authState = action.payload
            state.uid = authState.uid
            state.isOtpsent = authState.isOtpSent
            state.isPasswordSet = authState.isPasswordSet
        },
        setCredentials: (state, action) => {
            const { accessToken, refreshToken } = action.payload
            state.accessToken = accessToken
            state.refreshToken = refreshToken
            state.uid = null
            state.isOtpsent = null
            state.isPasswordSet = null
        },
        logOut: (state, action) => {
            state.accessToken = null
            state.refreshToken = null
            state.uid = null
            state.isOtpsent = null
            state.isPasswordSet = null
        },
    }
})

export const { setAuthState, setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state: { auth: { accessToken: any } }) => state.auth.accessToken
export const selectRefreshToken = (state: { auth: { refreshToken: any } }) => state.auth.refreshToken
export const selectPasswordStatus = (state: { auth: { isPasswordSet: any } }) => state.auth.isPasswordSet
export const selectOtpStatus = (state: { auth: { isOtpsent: any } }) => state.auth.isOtpsent