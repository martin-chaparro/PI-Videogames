import React from 'react';

import styles from './Pagination.module.css';

export const Pagination = ({
	setCurrentPage,
	currentPage,
	totalRecords = null,
	pageLimit = 15,
}) => {
	pageLimit = typeof pageLimit === 'number' ? pageLimit : 15;
	totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

	let totalPages = Math.ceil(totalRecords / pageLimit);

	const handleClick = (page, evt) => {
		evt.preventDefault();
		setCurrentPage(page);
	};

	const fetchPageNumbers = (total) => {
		const pageNumbers = [];

		for (let page = 1; page <= total; page++) {
			pageNumbers.push(page);
		}
		return pageNumbers
	};

	if (totalRecords && totalPages > 0) {
		const pages = fetchPageNumbers(totalPages);

		return (
			<div className={styles.paginationContainer}>
				<div className={styles.paginationBox}>
					<ul className={styles.pagination}>
						{pages.map((page, index) => {
							return (
								<li
									key={index}
									className={currentPage === page ? styles.active : ''}
								>
									<span onClick={(e) => handleClick(page, e)}>{page}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	} else {
		return null;
	}
};
