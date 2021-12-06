import React from 'react';
import styles from './NotFound.module.css';

export const NotFound = () => {
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<div>
					<h1>No se encontraron resultados</h1>
				</div>
				<div>
					<p>Por favor intente con otro filtro o termino de Busqueda</p>
				</div>
			</div>
		</div>
	);
};
