import styles from './Header.module.css';

export const Header = ({ displaNav = false }) => {
	return (
		<header>
			<nav className="wrapper">
				<div className={styles.title}>
					<h1>VideoGame App</h1>
				</div>
				{displaNav && (
					<div className={styles.navBar}>
						<button className={styles.btn}>Home</button>
						<button className={styles.btn}>New Game</button>
					</div>
				)}

				<div className={styles.contact}>Contact</div>
			</nav>
		</header>
	);
};
