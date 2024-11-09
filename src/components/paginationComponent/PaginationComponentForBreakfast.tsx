import React from 'react';
import styles from "./stylesOfPagination.module.css"

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <div className={styles.positionOfButtons}>
            <button className={styles.styleOfButton} onClick={prevPage} disabled={currentPage === 1}>Prev</button>
            <span className={styles.styleForSpan}>{currentPage}</span>
            <button className={styles.styleOfButton} onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default Pagination;
