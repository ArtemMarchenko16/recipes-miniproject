import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { IDishByID } from "../../models/IDishByID";
import { getDataFromDB } from "../../services/api.service";
import styles from "../styles-id.module.css";

const DrinkById = () => {
    const { id } = useParams<{ id: string }>();
    const [meal, setMeal] = useState<IDishByID | null>(null);

    useEffect(() => {
        const fetchingData = async () => {
            const data = await getDataFromDB.drinks.getDrinkByID(Number(id));
            setMeal(data);
        };
        fetchingData();
    }, [id]);

    return (
        <div>
            {meal ? (
                <div className={styles.item}>

                    <img src={meal.image} alt={meal.title}/>
                    <div className={styles.bgForItems}>
                        <h1>{meal.title}</h1>
                        <div className={styles.itemInstruction}
                             dangerouslySetInnerHTML={{__html: meal.instructions}}
                        />
                    </div>


                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DrinkById;