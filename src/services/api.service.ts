import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {}
});

export let getPosts = async (): Promise<IPost[]> => {
    let getData = await axiosInstance.get<IPost[]>("/posts");
    return getData.data
}

export let getUsers = async (): Promise<IUser[]> => {
    let getData = await axiosInstance.get<IUser[]>("/users");
    return getData.data
}

export let getComments = async (): Promise<IComment[]> => {
    let getData = await axiosInstance.get<IComment[]>("/comments");
    return getData.data
}




