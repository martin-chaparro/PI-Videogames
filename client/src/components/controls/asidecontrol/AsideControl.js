import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { platformsStartLoading } from '../../../redux/actions/platforms';
import {
	gamesFilterCreated,
	gamesFilterGenre,
	gamesFilterPlatforms,
	gamesOrderByName,
	gamesOrderByRating,
	gamesStartingSearch,
	genresStartLoading,
} from '../../../redux/actions/videogames';
import styles from './AsideControl.module.css';

export const AsideControl = React.memo(({setCurrentPage}) => {
	const dispatch = useDispatch();
	const { genres } = useSelector((state) => state.videogames);
	const {platforms }= useSelector( state => state.platforms );
	

	const [inputSearch, setinputSearch] = useState('');

	useEffect(() => {
		dispatch(genresStartLoading());
		dispatch(platformsStartLoading())
	}, [dispatch]);

	const handleInputSearch = ({ target }) => {
		setinputSearch(target.value);
	};
	const handleSearch = (event) => {
		event.preventDefault();

		dispatch(gamesStartingSearch(inputSearch.trim()));
		setinputSearch('');
	};

	const handleRadioGenres = ({target}) => {
		dispatch(gamesFilterGenre(target.value))
		setCurrentPage(1)
	};

	const handleRadioCreated = ({target})=>{
		dispatch(gamesFilterCreated(target.value))
		setCurrentPage(1)
	}

	const handleRadioPlatforms= ({target})=>{
		dispatch(gamesFilterPlatforms(target.value))
		setCurrentPage(1)
	}

	const handleSortName = ({target})=>{
		
		dispatch(gamesOrderByName(target.value))
		setCurrentPage(1)
	}

	const handleSortRating = ({target})=>{
		
		dispatch(gamesOrderByRating(target.value))
		setCurrentPage(1)
	}

	return (
		<div className={styles.controlBox}>
			<div className={styles.filterBox}>
				<form onSubmit={handleSearch}>
					<input
						placeholder="Search Videogame..."
						name="inputSearch"
						value={inputSearch}
						onChange={handleInputSearch}
						type="text"
					/>

					<button type="submit">Buscar</button>
				</form>
			</div>
			<div className={styles.filterBox}>
				<label htmlFor="orderByName">Sort by Name:</label>
				<select name="order" id="orderByName" defaultValue="none" onChange={handleSortName}>
					<option value="none">Unordered</option>
					<option value="asc">Ascendant</option>
					<option value="desc">Descendant</option>
				</select>
			</div>
			<div className={styles.filterBox}>
				<label htmlFor="orderByRating">Sort by Rating:</label>
				<select name="order" id="orderByRating" defaultValue="none" onChange={handleSortRating}>
					<option value="none">Unordered</option>
					<option value="asc">Ascendant</option>
					<option value="desc">Descendant</option>
				</select>
			</div>
			<label>Genres</label>
			<div className={styles.filterBox}>
				<div key={'all'}>
					<input type="radio" id="Todos" name="genres" value={'all'} onClick={handleRadioGenres} defaultChecked/>
					<span htmlFor="Todos">Todos</span>
				</div>

				{genres &&
					genres.map((genre) => (
						<div key={genre.id}>
							<input
								type="radio"
								id={genre.name}
								name="genres"
								value={genre.id}
								onClick={handleRadioGenres}
							/>
							<span htmlFor={genre.name}>{genre.name}</span>
						</div>
					))}
			</div>
			<label>Created</label> <br />
			<div className={styles.filterBox}>
				<input type="radio" id="Todos" name="inDb" value="all" onClick={handleRadioCreated} defaultChecked/>
				<span htmlFor="Todos">All</span>
				<input type="radio" id="SI" name="inDb" value="db" onClick={handleRadioCreated} />
				<span htmlFor="SI">Created</span>
				<input type="radio" id="NO" name="inDb" value="api" onClick={handleRadioCreated} />
				<span htmlFor="NO">Api</span>
			</div>
			<label>Platforms</label>
			<div className={styles.filterBox}>
				<div key={'all'}>
					<input type="radio" id="All" name="platforms" value={'all'} onClick={handleRadioGenres} defaultChecked/>
					<span htmlFor="All">All</span>
				</div>

				{platforms &&
					platforms.map((platform) => (
						<div key={platform.id}>
							<input
								type="radio"
								id={platform.name}
								name="platforms"
								value={platform.id}
								onClick={handleRadioPlatforms}
							/>
							<span htmlFor={platform.name}>{platform.name}</span>
						</div>
					))}
			</div>
		</div>
	);
});
