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
						<h1>VideoGame <span>App</span></h1>
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
					</div>
				)}

				<div className={styles.contact}>
					<a className={`${styles.btnSocial} ${styles.btnLinkedin}`} href="https://github.com/martin-chaparro" target="_blank" rel="noreferrer">
						<FaLinkedinIn />
					</a>
					<a className={`${styles.btnSocial} ${styles.btnGithub}`} href="https://www.linkedin.com/in/mchaparro/" target="_blank" rel="noreferrer">
						<FaGithub />
					</a>
				</div>
			</nav>
		</header>
	);
});
