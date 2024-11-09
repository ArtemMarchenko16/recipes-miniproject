import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentSliceActions} from "../redux/slices/CommentSlice";

const CommentsComponent = () => {

    let {comments} = useAppSelector(state => state.commentPart);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, []);

    return (
        <div>
            {
                comments.map(comment => <div key={comment.id}>name of comment: {comment.name}</div>)
            }
        </div>
    );
};

export default CommentsComponent;