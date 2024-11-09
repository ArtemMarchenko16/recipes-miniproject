import React, {useEffect, useState} from 'react';
import {IDish} from "../../models/IDish";
import {getDataFromDB} from "../../services/api.service";
import styles from "../styles.module.css";
import {Link} from "react-router-dom";
import Pagination from "../paginationComponent/PaginationComponentForBreakfast";

const DrinkComponent = () => {

    const [drinks, setDrinks] = useState<IDish[]>([]);
    useEffect(() => {
        const fetchingData = async () => {
            const data = await getDataFromDB.drinks.getDrinks();
            setDrinks(data);
        }

        fetchingData();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);

    const countOfProducts = 8;

    const indexOfNextPage = currentPage * countOfProducts;
    const indexOfPrevPage = indexOfNextPage - countOfProducts;
    const currentDishes = drinks.slice(indexOfPrevPage, indexOfNextPage);

    return (
        <div>
            <div className={styles.positionOfElements}>
                {currentDishes.map((drink) => (
                    <div className={styles.zoneForBreakfast} key={drink.id}>
                        <img className={styles.styleImage} src={drink.image} alt={drink.title}/>
                        <p><Link className={styles.fontStyleLink}
                                 to={`/drink/${drink.id}`}>{drink.title}</Link></p>

                    </div>
                ))}
            </div>
            <Pagination currentPage={currentPage} totalItems={drinks.length} itemsPerPage={countOfProducts} onPageChange={setCurrentPage}/>
        </div>
    );
};

export default DrinkComponent;