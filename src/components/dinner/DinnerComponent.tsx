import React, {useEffect, useState} from 'react';
import {IDish} from "../../models/IDish";
import {getDataFromDB} from "../../services/api.service";
import styles from "../styles.module.css";
import {Link} from "react-router-dom";
import Pagination from "../paginationComponent/PaginationComponentForBreakfast";

const DinnerComponent = () => {
    const [dinners, setDinner] = useState<IDish[]>([]);
    useEffect(() => {
        let getDinnerData = async () => {
            const fetchigData = await getDataFromDB.dinners.getDinners()
            setDinner(fetchigData);
        }
        getDinnerData()
    }, []);


    const [currentPage, setCurrentPage] = useState(1);

    const countOfProducts = 8;

    const indexOfNextPage = currentPage * countOfProducts;
    const indexOfPrevPage = indexOfNextPage - countOfProducts;
    const currentDishes = dinners.slice(indexOfPrevPage, indexOfNextPage);


    return (
        <div>

            <div className={styles.positionOfElements}>
                {currentDishes.map(dinner => (
                    <div className={styles.zoneForBreakfast} key={dinner.id}>
                        <img className={styles.styleImage} src={dinner.image} alt={dinner.title}/>
                        <p><Link className={styles.fontStyleLink} to={`/dinner/${dinner.id}`}>{dinner.title}</Link>
                        </p>

                    </div>
                ))}

            </div>

            <Pagination currentPage={currentPage} totalItems={dinners.length} itemsPerPage={countOfProducts} onPageChange={setCurrentPage} />
        </div>


    );
};

export default DinnerComponent;