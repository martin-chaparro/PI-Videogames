import React from 'react';

import styles from './Pagination.module.css';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
	let i = from;
	const range = [];

	while (i <= to) {
		range.push(i);
		i += step;
	}

	return range;
};

export const Pagination = ({
	setCurrentPage,
	currentPage,
	totalRecords = null,
	pageLimit = 15,
	pageNeighbours = 0,
}) => {
	pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
	totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;
	pageNeighbours =
		typeof pageNeighbours === 'number'
			? Math.max(0, Math.min(pageNeighbours, 2))
			: 0;

	let totalPages = Math.ceil(totalRecords / pageLimit);

	const handleClick = (page, evt) => {
		evt.preventDefault();
		setCurrentPage(page);
	};

	const handleMoveLeft = (evt) => {
		evt.preventDefault();
		setCurrentPage(currentPage - pageNeighbours * 2 - 1);
	};

	const handleMoveRight = (evt) => {
		evt.preventDefault();
		setCurrentPage(currentPage + pageNeighbours * 2 + 1);
	};

	const fetchPageNumbers = (total, current, Neighbours) => {
		const totalPages = total;
		const currentPage = current;
		const pageNeighbours = Neighbours;

		const totalNumbers = pageNeighbours * 2 + 3;
		const totalBlocks = totalNumbers + 2;

		if (totalPages > totalBlocks) {
			let pages = [];

			const leftBound = currentPage - pageNeighbours;
			const rightBound = currentPage + pageNeighbours;
			const beforeLastPage = totalPages - 1;

			const startPage = leftBound > 2 ? leftBound : 2;
			const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

			pages = range(startPage, endPage);

			const pagesCount = pages.length;
			const singleSpillOffset = totalNumbers - pagesCount - 1;

			const leftSpill = startPage > 2;
			const rightSpill = endPage < beforeLastPage;

			const leftSpillPage = LEFT_PAGE;
			const rightSpillPage = RIGHT_PAGE;

			if (leftSpill && !rightSpill) {
				const extraPages = range(startPage - singleSpillOffset, startPage - 1);
				pages = [leftSpillPage, ...extraPages, ...pages];
			} else if (!leftSpill && rightSpill) {
				const extraPages = range(endPage + 1, endPage + singleSpillOffset);
				pages = [...pages, ...extraPages, rightSpillPage];
			} else if (leftSpill && rightSpill) {
				pages = [leftSpillPage, ...pages, rightSpillPage];
			}

			return [1, ...pages, totalPages];
		}

		return range(1, totalPages);
	};

	if (totalRecords && totalPages > 0) {
		const pages = fetchPageNumbers(totalPages, currentPage, pageNeighbours);

		return (
			// <div className={styles.paginationContainer}>
			// 	<div className={styles.paginationBox}>
			// 		<ul className={styles.pagination}>
			// 			<li>
			// 				<span style={{width:'120px'}}>Previous</span>
			// 			</li>
			// 			<li>
			// 				<span>1</span>
			// 			</li>
			// 			<li>
			// 				<span>2</span>
			// 			</li>
			// 			<li>
			// 				<span>3</span>
			// 			</li>
			// 			<li>
			// 				<span>4</span>
			// 			</li>
			// 			<li>
			// 				<span>5</span>
			// 			</li>
			// 			<li>
			// 				<span>6</span>
			// 			</li>
			// 			<li>
			// 				<span>7</span>
			// 			</li>
			// 			<li>
			// 				<span>8</span>
			// 			</li>
			// 			<li>
			// 				<span style={{width:'100px'}}>Next</span>
			// 			</li>
			// 		</ul>
			// 	</div>
			// </div>
			<div className={styles.paginationContainer}>
				<div className={styles.paginationBox}>
					<ul className={styles.pagination}>
						{pages.map((page, index) => {
							if (page === LEFT_PAGE)
								return (
									<li key={index}>
										{/* <button onClick={handleMoveLeft} className="large">
											Previous
										</button> */}
										<span onClick={handleMoveLeft} >Previous</span>
									</li>
								);

							if (page === RIGHT_PAGE)
								return (
									<li key={index}>
										{/* <button onClick={handleMoveRight} className="large">
											Next
										</button> */}
										<span onClick={handleMoveRight}>Next</span>
									</li>
								);

							return (
								<li
									key={index}
									// className={styles.active}
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
