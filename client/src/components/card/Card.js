import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export const Card = ({ id, name, image, genres,rating }) => {
	return (
		<div className={styles.card}>
			<div className={styles.box}>
				<div className={styles.cardImageContainer}>
					<img src={image} alt={id} />
				</div>
				<div className={styles.cardContent}>
					<div className={styles.cardTitle}>
						<div><h3>{name}</h3></div>
						<div><p>{`Rating: ${rating}`}</p></div>
					</div>
					<div className={styles.cardGenres}>
						<ul>
							{genres.map((genre) => (
								<li key={genre.id}>{genre.name}</li>
							))}
						</ul>
					</div>
					<div className={styles.actionBtn}>
						<Link to={`view/${id}`}>Ver</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
