import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersComponent from "../components/UsersComponent";
import HomePage from "../pages/HomePage";
import PostsComponent from "../components/PostsComponent";
import CommentsComponent from "../components/CommentsComponent";
import PostsAndComments from "../components/PostsAndComments";


export let router = createBrowserRouter([
    {path: "/", element:<MainLayout/>, children: [
            {path: "home", element: <HomePage/>},
            {path: "users", element: <UsersComponent/>},
            {path: "posts", element: <PostsComponent/>},
            {path: "comments", element: <CommentsComponent/>},
            {path: "commentsWithPosts", element: <PostsAndComments/>},
        ]}
]);