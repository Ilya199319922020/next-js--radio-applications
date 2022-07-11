import { useState } from 'react';
import styles from '../../styles/RadiostantionEement.module.scss';
import Button from '../AuxiliaryComponent/Button';

export function RadiostantionEement({ data }) {

	const [dataRadioStantion, setDataRadioStantion] = useState(data);

	const handleButtons = ({
		dataRadioStantion, setDataRadioStantion, handleButtons
	}) => id => {
		const newValueButton = dataRadioStantion.map(button => {
			if (button.id === id) {
				return ({ ...button, value: true });
			}
			return ({ ...button, value: false });
		});
		setDataRadioStantion(newValueButton)
	};

	let set = new Set(dataRadioStantion.map(g => g.genre));
	const nameGenre = [...set];

	const imageBtnList = dataRadioStantion
		.map(i => <ImageBtnRadiostantion
			key={i.id}
			image={i.image}
			dataRadioStantion={dataRadioStantion}
			value={i.value} id={i.id}
			handleButtons={handleButtons}
			setDataRadioStantion={setDataRadioStantion}
		/>
		);
	const btnGenreList = nameGenre
		.map(g => <ImageBtnRadiostantion
			name={g} key={g}
		/>
		);



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


function ImageBtnRadiostantion({
	image, name, handleButtons, setDataRadioStantion, dataRadioStantion, id, value
}) {
	const getValue = () => {
		handleButtons({ dataRadioStantion, setDataRadioStantion })(id)
	};

	return (
		<Button
			image={image}
			classNameElement={value ? 'btn-mobileRadio-active' : 'btn-mobileRadio'}
			onClick={getValue}
			active={value ? true : false}
		>
			{name}
		</Button>
	);
};
