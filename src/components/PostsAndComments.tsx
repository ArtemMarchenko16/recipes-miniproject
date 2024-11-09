import React, {useMemo} from 'react';
import {useAppSelector} from "../redux/store";
import {IPostComments} from "../models/IPostComments";


const CommentsPostsPage = () => {


    const {postPart, commentPart} = useAppSelector(store => store);

    let postsAndComments: IPostComments[] = useMemo((): IPostComments[] => {
        let record = postPart.posts.map(post => {
            let readyComments = commentPart.comments.filter(comment => comment.postId === post.id)
            return {post: post, comments: readyComments}
        })
        return record
    }, [postPart, commentPart])
    return (
        <div>
            {
                postsAndComments.map((element, index) => <div key={index}>
                <h4>Post title: {element.post.title}</h4>
                {element.comments.map(comment => <div key={comment.id}>id: {comment.id}, name of comment: {comment.name}</div>)}
            </div>)

            }
        </div>
    );
};

export default CommentsPostsPage;