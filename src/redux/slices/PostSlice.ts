import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getPosts} from "../../services/api.service";

type postSliceType = {
    posts: IPost[],
}

const postInitState: postSliceType = {
    posts: [],
}

let loadPosts = createAsyncThunk("postSlice/loadPosts", async (_, thunkAPI) => {
    try {
        let postsFromAPI = await getPosts()
        return thunkAPI.fulfillWithValue(postsFromAPI);
    }catch (e) {
        return thunkAPI.rejectWithValue(e);
    }

});

export const postSlice = createSlice({
    name: "postSlice",
    initialState: postInitState,
    reducers: {
        postFunction: (state, action: PayloadAction) => {
            //something
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(action.payload)
            })
});


export const postSliceActions = {...postSlice.actions, loadPosts}
