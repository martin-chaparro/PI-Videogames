import React from 'react';
import styles from './AlertModal.module.css';

import { MdDone, MdDangerous } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { closeAlertModal } from '../../../../redux/actions/ui';
import { useNavigate } from 'react-router';

export const AlertModal = ({ type = 'success', title='Juego creado con exito', msj='' }) => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClose = ()=>{
		dispatch(closeAlertModal())
		navigate("/home", { replace: true });
	}

	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modalBox}>
				<div className={styles.modalBody}>
					<div className={styles.icon}>
						{type === 'success' ? <MdDone size={100} /> : <MdDangerous size={100} />}
					</div>
					<div className={styles.title}>
						<h2>{title}</h2>
					</div>
					<div className={styles.description}>
						<p>{msj}</p>
					</div>
				</div>
				<div className={styles.modalFooter}>
					{/* <div className={styles.btnL}>
						<button>Cerrar</button>
					</div> */}
					<div className={styles.btnR}>
						<button onClick={handleClose}>Aceptar</button>
					</div>
				</div>
			</div>
		</div>
	);
};
