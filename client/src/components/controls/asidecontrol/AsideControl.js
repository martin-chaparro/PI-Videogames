import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { platformsStartLoading } from '../../../redux/actions/platforms';
import { genresStartLoading } from '../../../redux/actions/genres';
import {
	gamesFilterCreated,
	gamesFilterGenre,
	gamesFilterPlatforms,
	gamesOrderByName,
	gamesOrderByRating,
	gamesStartingSearch,
} from '../../../redux/actions/videogames';
import styles from './AsideControl.module.css';
import { FaSearch } from 'react-icons/fa';

export const AsideControl = React.memo(({ setCurrentPage }) => {
	const dispatch = useDispatch();
	const { genres } = useSelector((state) => state.genres);
	const { platforms } = useSelector((state) => state.platforms);

	const [inputSearch, setinputSearch] = useState('');

	useEffect(() => {
		dispatch(genresStartLoading());
		dispatch(platformsStartLoading());
	}, [dispatch]);

	const handleInputSearch = ({ target }) => {
		setinputSearch(target.value);
	};
	const handleSearch = (event) => {
		event.preventDefault();

		dispatch(gamesStartingSearch(inputSearch.trim()));
		setinputSearch('');
	};

	const handleRadioGenres = ({ target }) => {
		dispatch(gamesFilterGenre(target.value));
		setCurrentPage(1);
	};

	const handleRadioCreated = ({ target }) => {
		dispatch(gamesFilterCreated(target.value));
		setCurrentPage(1);
	};

	const handleRadioPlatforms = ({ target }) => {
		dispatch(gamesFilterPlatforms(target.value));
		setCurrentPage(1);
	};

	const handleSortName = ({ target }) => {
		dispatch(gamesOrderByName(target.value));
		setCurrentPage(1);
	};

	const handleSortRating = ({ target }) => {
		dispatch(gamesOrderByRating(target.value));
		setCurrentPage(1);
	};

	return (
		<div className={styles.controlBox}>
			<div className={styles.filterBox}>
				<div className={styles.searchBox}>
					<form onSubmit={handleSearch} autoComplete="off">
						<input
							placeholder="Search Videogame..."
							name="inputSearch"
							value={inputSearch}
							onChange={handleInputSearch}
							type="text"
						/>

						<button type="submit">
							<FaSearch />
						</button>
					</form>
				</div>
			</div>
			<div className={styles.filterBox}>
				<div className={styles.sortNameBox}>
					<div>
						<h3>Sort by Name</h3>
					</div>
					<div className={styles.checkboxContainer}>
						<div className={styles.checkButton}>
							<label>
								<input
									type="radio"
									id="none"
									name="orderByName"
									value="none"
									onClick={handleSortName}
									defaultChecked
								/>
								<div className={styles.btnCheck}> Unordered </div>
							</label>
						</div>
						<div className={styles.checkButton}>
							<label>
								<input
									type="radio"
									id="asc"
									name="orderByName"
									value="asc"
									onClick={handleSortName}
								/>
								<div className={styles.btnCheck}> Ascendent </div>
							</label>
						</div>
						<div className={styles.checkButton}>
							<label>
								<input
									type="radio"
									id="desc"
									name="orderByName"
									value="desc"
									onClick={handleSortName}
								/>
								<div className={styles.btnCheck}>Descendent</div>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.filterBox}>
				<div className={styles.sortRatingBox}>
					<div>
						<h3>Sort by Rating</h3>
					</div>
					<div className={styles.checkboxContainer}>
						<div className={styles.checkButton}>
							<label>
								<input
									type="radio"
									name="orderByRating"
									value="none"
									onClick={handleSortRating}
									defaultChecked
								/>
								<div className={styles.btnCheck}>Unordered</div>
							</label>
						</div>
						<div className={styles.checkButton}>
							<label>
								<input
									type="radio"
									name="orderByRating"
									value="asc"
									onClick={handleSortRating}
								/>
								<div className={styles.btnCheck}>Ascendent</div>
							</label>
						</div>
						<div className={styles.checkButton}>
							<label>
								<input
									type="radio"
									name="orderByRating"
									value="desc"
									onClick={handleSortRating}
								/>
								<div className={styles.btnCheck}>Descendent</div>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.filterBox}>
				<div className={styles.filterGenresBox}>
					<div>
						<h3>Genres</h3>
					</div>
					<div className={styles.checkboxContainer}>
						<div key={'all'} className={styles.checkButton}>
							<label>
								<input
									type="radio"
									name="genres"
									value={'all'}
									onClick={handleRadioGenres}
									defaultChecked
								/>
								<div className={styles.btnCheck}>Todos</div>
							</label>
						</div>
						{genres &&
							genres.map((genre) => (
								<div key={genre.id} className={styles.checkButton}>
									<label>
										<input
											type="radio"
											name="genres"
											value={genre.id}
											onClick={handleRadioGenres}
										/>
										<div className={styles.btnCheck}>{genre.name}</div>
									</label>
								</div>
							))}
					</div>
				</div>
			</div>

			<div className={styles.filterBox}>
				<div className={styles.filterPlatformsBox}>
					<div>
						<h3>Platforms</h3>
					</div>
					<div className={styles.checkboxContainer}>
						<div key={'all'} className={styles.checkButton}>
							<label>
								<input
									type="radio"
									name="platforms"
									value={'all'}
									onClick={handleRadioGenres}
									defaultChecked
								/>
								<div className={styles.btnCheck}>All</div>
							</label>
						</div>
						{platforms &&
							platforms.map((platform) => (
								<div key={platform.id} className={styles.checkButton}>
									<label>
										<input
											type="radio"
											name="platforms"
											value={platform.id}
											onClick={handleRadioPlatforms}
										/>
										<div className={styles.btnCheck}>{platform.name}</div>
									</label>
								</div>
							))}
					</div>
				</div>
			</div>
			<div className={styles.filterBox}>
				<div className={styles.filterCreatedBox}>
					<div>
						<h3>Created</h3>
					</div>
					<div className={styles.checkboxContainer}>
						<div className={styles.checkButton}>
							<label>
								<input
									type="radio"
									name="inDb"
									value="all"
									onClick={handleRadioCreated}
									defaultChecked
								/>
								<div className={styles.btnCheck}>All</div>
							</label>
						</div>
						<div className={styles.checkButton}>
							<label>
								<input
									type="radio"
									name="inDb"
									value="db"
									onClick={handleRadioCreated}
								/>
								<div className={styles.btnCheck}>Created</div>
							</label>
						</div>
						<div className={styles.checkButton}>
							<label>
								<input
									type="radio"
									name="inDb"
									value="api"
									onClick={handleRadioCreated}
								/>
								<div className={styles.btnCheck}>Api</div>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
