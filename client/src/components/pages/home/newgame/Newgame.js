import { FormNewgame } from '../../../forms/newgame/FormNewgame';
import { Header } from '../../../layout/header/Header';
import { Main } from '../../../layout/main/Main';

import styles from './Newgame.module.css';

export const NewGame = () => {
	return (
		<div className="wrapper">
			<Header displaNav={true} />
			<Main>
				<div className={styles.formColumn}>
					<FormNewgame />
				</div>
			</Main>
		</div>
	);
};
