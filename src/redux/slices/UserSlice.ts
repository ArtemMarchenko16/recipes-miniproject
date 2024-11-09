import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUsers} from "../../services/api.service";

type userSliceType = {
    users: IUser[],
}

const userInitState: userSliceType = {
    users: [],
}



let loadUsers = createAsyncThunk("userSlice/loadUsers", async (_, thunkAPI) => {
    try {
        let usersFromAPI = await getUsers()
        return thunkAPI.fulfillWithValue(usersFromAPI);
    }catch (e) {
        return thunkAPI.rejectWithValue(e);
    }

});


export let userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers: {
        userFunction: (state, action: PayloadAction) => {
            //something
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(action.payload)
            })
});

export const userSliceActions = {...userSlice.actions, loadUsers}
