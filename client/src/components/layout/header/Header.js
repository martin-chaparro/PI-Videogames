import styles from './Header.module.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const Header = ({ displaNav = false }) => {
	return (
		<header>
			<nav className="wrapper">
				<div className={styles.title}>
					<h1>VideoGame App</h1>
				</div>
				{displaNav && (
					<div className={styles.navBar}>
						<button className={`${styles.btn} ${styles.active}`}>Home</button>
						<button className={styles.btn}>New Game</button>
					</div>
				)}
				{/* <div className={styles.searchBar}>
					<div className={styles.searchContainer}>
						<div className={styles.outerBox}>
							<div className={styles.inerBox}>
								<input type="text" placeholder="Buscar..."/>
							</div>
						</div>
					</div>
					
				</div> */}

				<div className={styles.contact}>
					<button className={styles.btnSocial}>
						<FaLinkedinIn />
					</button>
					<button className={styles.btnSocial}>
						<FaGithub />
					</button>
				</div>
			</nav>
		</header>
	);
};
