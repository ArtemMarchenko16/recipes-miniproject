import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector} from "../redux/store";
import {postSliceActions} from "../redux/slices/PostSlice";

const PostComponent = () => {

    let {posts} = useAppSelector(state => state.postPart);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postSliceActions.loadPosts())

    }, []);

    return (
        <div>
            {
                posts.map(post => <div key={post.id}>title: {post.title}</div>)
            }
        </div>
    );
};

export default PostComponent;