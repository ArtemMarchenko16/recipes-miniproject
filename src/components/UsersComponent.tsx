import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userSliceActions} from "../redux/slices/UserSlice";

const UsersComponent = () => {
    let {users} = useAppSelector(state => state.userPart);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);

    return (
        <div>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};

export default UsersComponent;