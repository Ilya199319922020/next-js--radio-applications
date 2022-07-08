import React from 'react';
import styles from '../styles/MainLayout.module.scss';

export function MainLayout({ children }) {
	return (
		<div
			className={styles.layout}
		>
			{children}
		</div>
	);
};
