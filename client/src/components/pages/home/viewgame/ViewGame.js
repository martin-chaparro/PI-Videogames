import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { videogameStartLoading } from '../../../../redux/actions/videogame';
import { Header } from '../../../layout/header/Header';
import { Main } from '../../../layout/main/Main';
import { useNavigate } from "react-router-dom";

import styles from './ViewGame.module.css';

export const ViewGame = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { videogame } = useSelector((state) => state.videogame);

	const navigate = useNavigate();


	useEffect(() => {
		dispatch(videogameStartLoading(id));
	}, [dispatch, id]);

	const handleBack = ()=>{
		navigate("/home", { replace: true });
	}

	return (
		<div className="wrapper">
			<Header displaNav={true}/>

			{videogame && (
				<Main>
					<div className={styles.imgColumn}>
						<div className={styles.imgContainer}>
							<img src={videogame.background_image} alt={videogame.name} />
						</div>
						<div className={styles.actionContainer}>
							<button onClick={handleBack}>Back</button>
						</div>
					</div>
					<div className={styles.dataColumn}>
						<div className={styles.dataContainer}>
							<h1>{videogame.name}</h1>
							<h3>Generos</h3>
							<ul>
								{videogame.genres.map((genre) => (
									<li key={genre.id}>{genre.name}</li>
								))}
							</ul>
							<h3>Description</h3>
							<p>{videogame.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
							<h3>Fecha de lanzamiento</h3>
							<p>{videogame.released}</p>
							<h3>Rating</h3>
							<p>{videogame.rating}/5</p>
							<h3>Plataformas</h3>
							<ul>
								{
									videogame.platforms.map((platform) => (
									<li key={platform.id}>{platform.name}</li>
								))
								}
							</ul>
						</div>
					</div>
				</Main>
			)}
		</div>
	);
};
