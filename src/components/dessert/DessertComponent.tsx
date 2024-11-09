import React, {useEffect, useState} from 'react';
import {IDish} from "../../models/IDish";
import {getDataFromDB} from "../../services/api.service";
import styles from "../styles.module.css";
import {Link} from "react-router-dom";
import Pagination from "../paginationComponent/PaginationComponentForBreakfast";

const DessertComponent = () => {

    const [desserts, setDesserts] = useState<IDish[]>([]);

    useEffect(() => {
        let getData = async () => {
            const fetchingData = await getDataFromDB.desserts.getDessert();
            setDesserts(fetchingData);
        }

        getData()
    }, []);

    const [currentPage, setCurrentPage] = useState(1);

    const countOfProducts = 8;

    const indexOfNextPage = currentPage * countOfProducts;
    const indexOfPrevPage = indexOfNextPage - countOfProducts;
    const currentDishes = desserts.slice(indexOfPrevPage, indexOfNextPage);

    return (
        <div>
            <div className={styles.positionOfElements}>
                {currentDishes.map(dessert => (
                    <div className={styles.zoneForBreakfast} key={dessert.id}>
                        <img className={styles.styleImage} src={dessert.image} alt={dessert.title}/>
                        <p><Link className={styles.fontStyleLink} to={`/dessert/${dessert.id}`}>{dessert.title}</Link>
                        </p>
                    </div>
                ))}

            </div>
            <Pagination currentPage={currentPage} totalItems={desserts.length} itemsPerPage={countOfProducts} onPageChange={setCurrentPage}/>
        </div>
    );
};

export default DessertComponent;