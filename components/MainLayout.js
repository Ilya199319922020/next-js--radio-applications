import Head from 'next/head';
import React from 'react';
import styles from '../styles/MainLayout.module.scss';

export function MainLayout({ children }) {
	return (
		<>
			<Head>
				<meta keywords="radio, dance, shanson, Pop"></meta>
				<title>Radio</title>
			</Head>
			<div
				className={styles.layout}
			>
				{children}
			</div>
		</>
	);
};
