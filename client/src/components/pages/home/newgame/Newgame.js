import { useSelector } from 'react-redux';
import { FormNewgame } from '../../../forms/newgame/FormNewgame';
import { Header } from '../../../layout/header/Header';
import { Main } from '../../../layout/main/Main';
import { AlertModal } from '../../../ui/modals/alerts/AlertModal'

import styles from './Newgame.module.css';

export const NewGame = () => {
	const { alertModal } = useSelector((state) => state.ui);

	return (
		<div className="wrapper">
			<Header displaNav={true} />
			<Main>
				<div className={styles.formColumn}>
					<FormNewgame />
				</div>
			</Main>
			{
				alertModal && (<AlertModal type = {alertModal.type} title={alertModal.title}  msj={alertModal.msj}/>)
			
			}
		</div>
	);
};
