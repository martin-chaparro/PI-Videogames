import styles from './Card.module.css';

export const Card = () => {
	return (
		<div className={styles.card}>

			<div className={styles.cardImageContainer}>
				<img src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="" />
			</div>
            <div className={styles.cardContent}>
                <h3>Nombre del juego</h3>
                <ul>
                    <li>Generos</li>
                </ul>
            </div>
		</div>
	);
};
