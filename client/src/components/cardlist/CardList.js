import { Card } from '../card/Card';
import styles from './CardList.module.css';

export const CardList = ({ videogames }) => {
	return (
		<div className={styles.cards}>
			{videogames.map((game) => (
				<Card
					key={game.id}
					id={game.id}
					name={game.name}
					image={game.background_image}
					genres={game.genres}
					rating={game.rating}
				/>
			))}
		</div>
	);
};
