import {useDispatch, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/UserSlice";
import {postSlice} from "./slices/PostSlice";
import {commentSlice} from "./slices/CommentSlice";


export let store = configureStore({
    reducer: {
        userPart: userSlice.reducer,
        postPart: postSlice.reducer,
        commentPart: commentSlice.reducer
    }
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
