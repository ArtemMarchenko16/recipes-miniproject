import {IComment} from "../../models/IComment";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getComments} from "../../services/api.service";

type commentSliceType = {
    comments: IComment[],
}

const commentInitState: commentSliceType = {
    comments: [],
}

export let loadComments = createAsyncThunk("commentSlice/loadComments", async (_, thunkAPI) => {
    try {
        let commentsFromAPI = await getComments()
        return thunkAPI.fulfillWithValue(commentsFromAPI);
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})

export let commentSlice = createSlice({
    name: "commentSlice",
    initialState: commentInitState,
    reducers: {
        commentFunction: (state, action:PayloadAction) => {
            //something
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>) => {
                state.comments = action.payload
            })
            .addCase(loadComments.rejected, (state, action) => {
                console.log(action.payload)
            })
})


export const commentSliceActions = {...commentSlice.actions, loadComments}
