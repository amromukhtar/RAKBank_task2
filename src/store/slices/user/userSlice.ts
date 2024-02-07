import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import type { UsersState } from '@/@types/app';
import { userList } from '../../../data'

const mock = new MockAdapter(axios, { delayResponse: 2000 });

mock.onGet('/api/users').reply(200, {
    users: userList,
});

export const SLICE_NAME = 'userSlice'

export const getUsers = createAsyncThunk(
    SLICE_NAME + '/getUsers',
    async (data: any, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/users');
            return response.data
        } catch (err: any) {
            return rejectWithValue(err.response.data)
        }
    }
)

const initialState: UsersState = {
    users: [],
    loading: true
}


const userSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action: any) => {
                state.users = action.payload.users
                state.loading = false
            })
            .addCase(getUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(getUsers.rejected, (state) => {
                state.users = []
                state.loading = false
            })
    },
})

export const {
} = userSlice.actions

export default userSlice.reducer
