import styles from '../../styles/RadiostantionEement.module.scss';
import Button from '../AuxiliaryComponent/Button';

export function RadiostantionEement({ data }) {

	let set = new Set(data.map(g => g.genre));
	const nameGenre = [...set];

	const imageBtnList = data
		.map(i => <ImageBtnRadiostantion key={i.id} image={i.image} />
		);
	const btnGenreList = nameGenre
		.map(g => <ImageBtnRadiostantion name={g} key={g} />
		);
	console.log(nameGenre)

	return (
		<>
			<div className={styles.wraperRadiostantion}>
				<div className={styles.wraperRadiostantion__container} >
					<div
						className={styles.wraperRadiostantion__container_element}
					>
						<Button
							classNameElement={styles.wraperRadiostantion__container_elementBtn}
						>
							My Best
						</Button>
					</div>
					<div
						className={styles.wraperRadiostantion__container_elementUp}
					>
						{
							btnGenreList
						}
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


function ImageBtnRadiostantion({ image, name }) {
	return (
		<Button
			image={image}
			classNameElement={'btn-mobileRadio'}
		>
			{name}
		</Button>
	);
};
