import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '../../../@types/app'

const initialState: AuthState = {
    signedIn: false,
    accessToken: null,
    refreshToken: null,
}

const authSlice = createSlice({
    name: `auth`,
    initialState,
    reducers: {
        signInSuccess(state, action: PayloadAction<string>) {
            state.signedIn = true
            state.accessToken = action.payload
            state.refreshToken = action.payload
        },
        signOutSuccess(state) {
            state.signedIn = false
            state.accessToken = null
            state.refreshToken = null
        },
    },
})

export const { signInSuccess, signOutSuccess } = authSlice.actions
export default authSlice.reducer
