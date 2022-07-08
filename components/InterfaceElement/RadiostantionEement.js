import styles from '../../styles/RadiostantionEement.module.scss';

export function RadiostantionEement({ data }) {
	const imageBtnList = data
		.map(i => <ImageBtnRadiostantion image={i.image} />
		);

	return (
		<>
			<div className={styles.wraperRadiostantion}>
				<div className={styles.wraperRadiostantion__container} >
					<div
						className={styles.wraperRadiostantion__container_element}
					>
						<button className={styles.wraperRadiostantion__container_elementBtn}>
							My Best
						</button>
					</div>
					<div
						className={styles.wraperRadiostantion__container_elementUp}
					>
						<button
							className={'btn-mobileRadio '}
						>
							Pop
						</button>
						<button
							className={' btn-mobileRadio'}
						>
							Adult PoP
						</button>
						<button
							className={' btn-mobileRadio'}
						>
							Power Pop
						</button>
						<button
							className={' btn-mobileRadio'}
						>
							Dance
						</button>
						<button
							className={' btn-mobileRadio'}
						>
							Electro
						</button>
						<button
							className={' btn-mobileRadio'}
						>
							Hip-hop
						</button>
					</div>
					<div
						className={styles.wraperRadiostantion__container_elementleft}
					>
						<button
							className={' btn-mobileRadio w-[60px]'}
						>
							Testing
						</button>
						<button
							className={'btn-mobileRadio w-[60px]'}
						>
							Local
						</button>
						<button
						>
							<img
								className={'image__Btn'}
								src={'/icon/radiostations/rus.png'}
							/>
						</button>
						<button
						>
							<img
								className={'image__Btn'}
								src={'/icon/radiostations/usa.png'}
							/>
						</button>
						<button
						>
							<img
								className={'image__Btn'}
								src={'/icon/radiostations/Bel.png'}

							/>
						</button>
						<button
						>
							<img
								className={'image__Btn'}
								src={'/icon/radiostations/Ger.png'}
							/>
						</button>
						<button
						>
							<img
								className={'image__Btn'}
								src={'/icon/radiostations/Lat.png'}
							/>
						</button>
					</div>
					<div
						className={styles.wraperRadiostantion__container_elementCenter}
					>
						{imageBtnList}
					</div>
				</div>
			</div>
		</>
	);
};

function ImageBtnRadiostantion({ image }) {
	return (
		<button
			className={''}
		>
			<img
				className={' btn-mobileRadio '}
				src={image}
			/>
		</button>
	);
};

