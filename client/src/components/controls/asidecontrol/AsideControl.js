import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gamesStartingSearch, genresStartLoading } from '../../../redux/actions/videogames';
import styles from './AsideControl.module.css';

export const AsideControl = React.memo(() => {
	const dispatch = useDispatch();
	const { genres } = useSelector((state) => state.videogames);

	const [inputSearch, setinputSearch] = useState('')

	useEffect(() => {
		dispatch(genresStartLoading());
	}, [dispatch]);

	const handleInputSearch = ({target})=>{
		setinputSearch(target.value)
	}
	const handleSearch = (event)=>{
		event.preventDefault();

		dispatch(gamesStartingSearch(inputSearch.trim()))
		setinputSearch('')

	}

	return (
		<div className={styles.controlBox}>
			<div className={styles.filterBox}>
				<form onSubmit={handleSearch}>
					<input placeholder="Search Videogame..." name="inputSearch" value={inputSearch} onChange={handleInputSearch}  type="text" />

					<button type="submit">Buscar</button>
				</form>
			</div>
			<div className={styles.filterBox}>
				<label htmlFor="orderByName">Sort by Name:</label>
				<select name="order" id="orderByName" defaultValue="none">
					<option value="none">Unordered</option>
					<option value="alph-asc">Ascendant</option>
					<option value="alph-desc">Descendant</option>
				</select>
			</div>
			<div className={styles.filterBox}>
				<label htmlFor="orderByRating">Sort by Rating:</label>
				<select name="order" id="orderByRating" defaultValue="none">
					<option value="none">Unordered</option>
					<option value="rat-asc">Ascendant</option>
					<option value="rat-desc">Descendant</option>
				</select>
			</div>
			<label>Genres</label>
			<div className={styles.filterBox}>
				
				{genres &&
					genres.map((genre) => (
						<div key={genre.id}>
							<input
								type="radio"
								id={genre.name}
								name="genres"
								value={genre.id}
								defaultChecked
							/>
							<span htmlFor={genre.name}>{genre.name}</span>
						</div>
					))}
			</div>
			<label>Created</label> <br />
			<div className={styles.filterBox}>
				<input type="radio" id="SI" name="inDb" value="SI" defaultChecked />
				<span htmlFor="SI">SI</span>
				<input type="radio" id="NO" name="inDb" value="NO" />
				<span htmlFor="NO">NO</span>
			</div>
		</div>
	);
});
