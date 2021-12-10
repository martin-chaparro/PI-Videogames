import { Header } from '../../layout/header/Header';
import { Main } from '../../layout/main/Main';
import { Link } from 'react-router-dom';

import styles from './Landing.module.css';

export const Landing = () => {
	return (
		<div className="wrapper">
			<Header displaNav={false} />
			<Main>
				<div className={styles.container}>
					<Link className={styles.btn} to='/home'>Start</Link>
				</div>
			</Main>
		</div>
	);
};
