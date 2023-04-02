import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, isOtpsent:null,  },
    reducers: {
        setAuthState:(state, action)=>{
            const authState = action.payload
            state.isOtpsent = authState.isOtpsent
        },
        setCredentials: (state, action) => {
            const { accessToken } = action.payload
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.token = null
        },
    }
})

export const { setAuthState, setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
export const selectOtpStatus = (state) => state.auth.isOtpsent