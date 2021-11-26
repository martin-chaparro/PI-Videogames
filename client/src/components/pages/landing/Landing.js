import { Header } from '../../layout/header/Header';
import { Main } from '../../layout/main/Main';

import styles from './Landing.module.css';

export const Landing = () => {
	return (
		<div className="wrapper">
			<Header />
			<Main>
				<div className={styles.container}>
					<button className={styles.btn}>Start</button>
				</div>
			</Main>
		</div>
	);
};
