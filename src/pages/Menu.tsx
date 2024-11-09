import React from 'react';
import {Link} from "react-router-dom";
import styles from "./stylesForMenu.module.css"

const Menu = () => {
    return (
        <div className={styles.styleForMenuElements}>
            <p><Link to={"home"}>Home</Link></p>
            <p><Link to={"breakfast"}>Breakfast</Link></p>
            <p><Link to={"lunch"}>Lunch</Link></p>
            <p><Link to={"dinner"}>Dinner</Link></p>
            <p><Link to={"dessert"}>Dessert</Link></p>
            <p><Link to={"drinks"}>Drink</Link></p>
        </div>
    );
};

export default Menu;