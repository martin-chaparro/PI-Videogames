import { useState } from 'react';
import api from '../../services/api';
import styles from './FormNewgame.module.css';

export const FormNewgame = () => {
	const initialFormValues = {
		name: '',
		description: '',
		released: '',
		rating: '',
		background_image: '',
		genres: [],
		platforms: [],
	};

	const [formValues, setFormValues] = useState(initialFormValues);

	const { name, description, released, rating, background_image } = formValues;

	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	const handleCheckboxGenres = ({ target }) => {
		if (target.checked) {
			setFormValues({
				...formValues,
				genres: [...formValues.genres, parseInt(target.value)],
			});
		} else {
			setFormValues({
				...formValues,
				genres: formValues.genres.filter(
					(genreId) => genreId !== parseInt(target.value)
				),
			});
		}
	};

	const handleCheckboxPlatforms = ({ target }) => {
		if (target.checked) {
			setFormValues({
				...formValues,
				platforms: [
					...formValues.platforms,
					{ id: parseInt(target.value), name: target.name },
				],
			});
		} else {
			setFormValues({
				...formValues,
				platforms: formValues.platforms.filter(
					(platform) => platform.id !== parseInt(target.value)
				),
			});
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		
		try {
			await api.post('/videogame', formValues);
			alert('Game created successfully!');
			setFormValues(initialFormValues);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.formBox}>
				<div>
					<label>Name: </label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={handleInputChange}
					/>
				</div>

				<div>
					<label>Description: </label>
					<textarea
						name="description"
						value={description}
						onChange={handleInputChange}
					></textarea>
				</div>
				<div>
					<label>Released: </label>
					<input
						type="date"
						name="released"
						value={released}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Rating: </label>
					<input
						type="number"
						min="0"
						max="5"
						step="any"
						name="rating"
						value={rating}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>
						<input
							type="checkbox"
							value={1}
							name="Aventuras"
							onChange={handleCheckboxGenres}
						/>
						Aventuras
					</label>
					<label>
						<input
							type="checkbox"
							value={2}
							name="Rol"
							onChange={handleCheckboxGenres}
						/>
						Rol
					</label>
					<label>
						<input
							type="checkbox"
							value={3}
							name="Accion"
							onChange={handleCheckboxGenres}
						/>
						Accion
					</label>
				</div>

				<div>
					<label>
						<input
							type="checkbox"
							value={1}
							name="PS5"
							onChange={handleCheckboxPlatforms}
						/>
						PS5
					</label>
					<label>
						<input
							type="checkbox"
							value={2}
							name="Nintendo"
							onChange={handleCheckboxPlatforms}
						/>
						Nintendo
					</label>
					<label>
						<input
							type="checkbox"
							value={3}
							name="Pc"
							onChange={handleCheckboxPlatforms}
						/>
						PC
					</label>
				</div>
				<div>
					<label>Image: </label>
					<input
						type="text"
						name="background_image"
						value={background_image}
						onChange={handleInputChange}
					/>
				</div>

				<div>
					<input type="submit" className="btnSubmit" value="Crear" />
				</div>
			</div>
		</form>
	);
};
