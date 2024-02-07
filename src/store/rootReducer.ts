import { combineReducers, Reducer } from 'redux'
import auth from './slices/auth/authSlice'
import user from './slices/user/userSlice'


export interface AsyncReducers {
    [key: string]: Reducer<any, any>
}

const staticReducers = {
    auth,
    user,
}

const rootReducer =
    (asyncReducers?: AsyncReducers) =>
        (state: any, action: any) => {
            const combinedReducer = combineReducers({
                ...staticReducers,
                ...asyncReducers,
            })
            return combinedReducer(state, action)
        }

export default rootReducer
