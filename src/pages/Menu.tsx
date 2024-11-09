import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={"home"}>homePage</Link></li>
                <li><Link to={"users"}>usersPage</Link></li>
                <li><Link to={"posts"}>postsPage</Link></li>
                <li><Link to={"comments"}>commentsPage</Link></li>
                <li><Link to={"commentsWithPosts"}>comments and posts page</Link></li>

            </ul>
        </div>
    );
};

export default Menu;