import React from 'react';
import styles from './HomeLoader.module.css';

export const HomeLoader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<div className={styles.loader}>
                    <span>loader</span>
                </div>
			</div>
		</div>
	);
};
