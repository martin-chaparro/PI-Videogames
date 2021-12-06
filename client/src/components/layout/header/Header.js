import React from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const Header = React.memo(({ displaNav = false }) => {
	return (
		<header>
			<nav className="wrapper">
				<div className={styles.title}>
					<Link to="/">
						<h1>VideoGame App</h1>
					</Link>
				</div>
				{displaNav && (
					<div className={styles.navBar}>
						<NavLink
							className={({ isActive }) =>
								styles.btn + (isActive ? ` ${styles.active}` : '')
							}
							to="/home"
							end={true}
						>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								styles.btn + (isActive ? ` ${styles.active}` : '')
							}
							to="/home/new"
							end={true}
						>
							New Game
						</NavLink>
						{/* <button className={`${styles.btn} ${styles.active}`}>Home</button>
						<button className={styles.btn}>New Game</button> */}
					</div>
				)}

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
});
