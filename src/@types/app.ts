export type AuthState = {
    signedIn: boolean
    accessToken: null | string
    refreshToken: null | string
}

export type UsersState = {
    users: Array<any>
    loading: boolean
}