import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../services/api';
import styles from './FormNewgame.module.css';

import { genresStartLoading } from '../../../redux/actions/genres';

import { platformsStartLoading } from '../../../redux/actions/platforms';
import { showAlertModal } from '../../../redux/actions/ui';
import { AlertModal } from '../../ui/modals/alerts/AlertModal'

export const FormNewgame = () => {
	const dispatch = useDispatch();
	const { genres } = useSelector((state) => state.genres);
	const { platforms } = useSelector((state) => state.platforms);
	
	const { alertModal } = useSelector((state) => state.ui);


	useEffect(() => {
		dispatch(genresStartLoading());
		dispatch(platformsStartLoading());
	}, [dispatch]);

	const initialFormValues = {
		name: '',
		description: '',
		released: '',
		rating: '1',
		background_image: '',
		genres: [],
		platforms: [],
	};

	const [formValues, setFormValues] = useState(initialFormValues);

	const { name, description, released, rating, background_image } = formValues;


	const initialInputError = {
		name: null,
		description: null,
		released: null,
		rating: null,
		background_image: null,
		genres: null,
		platforms: null,
	}

	const [inputError, setInputError] = useState(initialInputError);

	const validateFields = ({ name, description, genres, platforms,released,rating }) => {
		
			if(name.trim() === ''){
				setInputError({
					inputError:{...initialInputError},
					name:'El nombre no puede ir Vacio'
				})
				return false
			}
			if(description.trim() === ''){
				setInputError({
					inputError:{...initialInputError},
					description:'La descripcion no pude ir vacia'
				})
				return false
			}
			if(released.trim() === ''){
				setInputError({
					inputError:{...initialInputError},
					description:'La fecha no puede ir vacia'
				})
				return false
			}
			if(rating < 0){
				setInputError({
					inputError:{...initialInputError},
					rating:'El rating tiene que ser mayor a'
				})
				return false
			}
			if(genres.length === 0 ){
				setInputError({
					inputError:{...initialInputError},
					genres:'Tiene que seleccionar al menos un genero'
				})
				return false
			}
			if(platforms.length === 0){
				setInputError({
					inputError:{...initialInputError},
					platforms:'Tiene que seleccionar al menos una platafroma'
				})
				return false
			}

			return true
		
	};

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
		
		if(validateFields(formValues)){

			try {
				await api.post('/videogame', formValues);
				//alert('Game created successfully!');
				dispatch(showAlertModal('success','Se completo la operación','El juego fue creado con exito'))
				setFormValues(initialFormValues);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<div className={styles.formBox}>
				<div className={styles.formField}>
					<h5>Name: </h5>
					<input
						type="text"
						name="name"
						value={name}
						placeholder="Ingrese Titulo del Juego"
						onChange={handleInputChange}
					/>
					{inputError.name && (
						<span className={styles.fieldErrorText}>{inputError.name}</span>
					)}
				</div>

				<div className={styles.formField}>
					<h5>Description: </h5>
					<textarea
						name="description"
						cols="50"
						rows="3"
						value={description}
						placeholder="Ingrese una descripcion"
						onChange={handleInputChange}
					></textarea>
					{inputError.description && (
						<span className={styles.fieldErrorText}>
							{inputError.description}
						</span>
					)}
				</div>
				<div className={styles.formField}>
					<h5>Released: </h5>
					<input
						type="date"
						name="released"
						value={released}
						onChange={handleInputChange}
					/>
					{inputError.released && (
						<span className={styles.fieldErrorText}>{inputError.released}</span>
					)}
				</div>
				<div className={styles.formField}>
					<h5>Rating: </h5>
					<input
						type="number"
						step="any"
						name="rating"
						value={rating}
						placeholder="Ingrese un rating"
						onChange={handleInputChange}
					/>
					{inputError.rating && (
						<span className={styles.fieldErrorText}>{inputError.rating}</span>
					)}
				</div>
				<div>
					<h5>Genres</h5>
					<div className={styles.checkboxContainer}>
						{genres &&
							genres.map((genre) => (
								<div key={genre.id} className={styles.checkButton}>
									<label>
										<input
											type="checkbox"
											name={genre.name}
											value={genre.id}
											onClick={handleCheckboxGenres}
										/>
										<div className={styles.btnCheck}>{genre.name}</div>
									</label>
								</div>
							))}
					</div>
					{inputError.genres && (
						<span className={styles.fieldErrorText}>{inputError.genres}</span>
					)}
				</div>

				<div>
					<h5>Platforms</h5>
					<div className={styles.checkboxContainer}>
						{platforms &&
							platforms.map((platform) => (
								<div key={platform.id} className={styles.checkButton}>
									<label>
										<input
											type="checkbox"
											name={platform.name}
											value={platform.id}
											onClick={handleCheckboxPlatforms}
										/>
										<div className={styles.btnCheck}>{platform.name}</div>
									</label>
								</div>
							))}
					</div>
					{inputError.platforms && (
						<span className={styles.fieldErrorText}>
							{inputError.platforms}
						</span>
					)}
				</div>
				<div className={styles.formField}>
					<h5>Image: </h5>
					<input
						type="text"
						name="background_image"
						value={background_image}
						onChange={handleInputChange}
						placeholder="Url de la imagen"
					/>
					{inputError.background_image && (
						<span className={styles.fieldErrorText}>
							{inputError.background_image}
						</span>
					)}
				</div>

				<div className={styles.submitContainer}>
					<input
						type="submit"
						className={styles.btnSubmit}
						value="Crear"
					/>
				</div>
			</div>
			{
				alertModal && (<AlertModal type = {alertModal.type} title={alertModal.title}  msj={alertModal.msj}/>)
			
			}
		</form>
	);
};
