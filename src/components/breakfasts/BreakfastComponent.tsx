// BreakfastComponent.tsx
import React, { useEffect, useState } from 'react';
import { IDish } from "../../models/IDish";
import { getDataFromDB } from "../../services/api.service";
import { Link } from "react-router-dom";
import Pagination from "../paginationComponent/PaginationComponentForBreakfast";
import styles from "../styles.module.css";


const BreakfastComponent = () => {
    const [data, setData] = useState<IDish[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const productsPage = 8;

    useEffect(() => {
        const fetchData = async () => {
            const breakfastData = await getDataFromDB.breakfast.getBreakfast();
            setData(breakfastData);
        };
        fetchData();
    }, []);

    const indexOfLastUser = currentPage * productsPage;
    const indexOfFirstUser = indexOfLastUser - productsPage;
    const currentDishes = data.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <div>
            <div className={styles.positionOfElements}>
                {currentDishes.map(breakfast => (
                    <div className={styles.zoneForBreakfast} key={breakfast.id}>
                        <img className={styles.styleImage} src={breakfast.image} alt={breakfast.title} />
                        <p><Link className={styles.fontStyleLink} to={`/breakfast/${breakfast.id}`}>{breakfast.title}</Link></p>

                    </div>
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalItems={data.length}
                itemsPerPage={productsPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default BreakfastComponent;
