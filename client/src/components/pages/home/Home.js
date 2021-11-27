import { Card } from '../../card/Card';
import { Aside } from '../../layout/aside/Aside';
import { Content } from '../../layout/content/Content';
import { Header } from '../../layout/header/Header';
import { Main } from '../../layout/main/Main';

import styles from './Home.module.css';

export const Home = () => {
	return (
		<div className="wrapper">
			<Header displaNav={true} />
			<Main>
				<Aside></Aside>
				<Content>
					<div className={styles.paginationBox}>
						<div className={styles.pagination}>
							<button className={styles.btn}>Prev</button>
							<button className={styles.btn}>Next</button>
						</div>
					</div>
					<div className={styles.cards}>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</Content>
			</Main>
		</div>
	);
};
