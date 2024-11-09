import React, {useEffect, useState} from 'react';
import {IDish} from "../../models/IDish";
import {getDataFromDB} from "../../services/api.service";
import Pagination from "../paginationComponent/PaginationComponentForBreakfast";
import styles from "../styles.module.css";
import {Link} from "react-router-dom";

const LunchComponent = () => {

    const [lunch, setLunch] = useState<IDish[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const productsPage = 8;
    useEffect(() => {
        let lmf = async () => {
            const data = await getDataFromDB.lunch.getLunches();
            setLunch(data);
        }
        lmf();
    }, []);

    const indexOfLastUser = currentPage * productsPage;
    const indexOfFirstUser = indexOfLastUser - productsPage;
    const currentDishes = lunch.slice(indexOfFirstUser, indexOfLastUser);

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
                totalItems={lunch.length}
                itemsPerPage={productsPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default LunchComponent;