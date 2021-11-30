import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export const Card = ({id,name,image,genres}) => {
	return (
		<div className={styles.card}>

			<div className={styles.cardImageContainer}>
				<img src={image} alt={id} />
			</div>
            <div className={styles.cardContent}>
                <h3>{name}</h3>
                <ul>
					{
						genres.map((genre)=>(
							<li key={genre.id}>{genre.name}</li>
						))
					}
                    
                </ul>
				<div>
				<Link to={`view/${id}`}>Ver</Link>
				</div>
            </div>
		</div>
	);
};
