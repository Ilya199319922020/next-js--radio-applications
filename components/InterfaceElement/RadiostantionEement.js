import { useEffect, useReducer, useState } from 'react';
import { handleButtons, handleButtonsGenre, handleButtonsLocation, handleButtonsGenreActive, handleButtonsGenreFilter } from '../../assets/onClickFunction/onClickbtn';
import { reducer } from '../../reducer/reducer';
import styles from '../../styles/RadiostantionEement.module.scss';
import Button from '../AuxiliaryComponent/Button';
import ButtonText from '../AuxiliaryComponent/ButtonText';

export function RadiostantionEement({ data, setIsActiveMenu, setTickerRadioName }) {
	// const [state, dispatch] = useReducer(reducer, [data.radioStations])
	const [dataRadioStantion, setDataRadioStantion] = useState(data.radioStations);
	const [dataGenreName, setDataGenreName] = useState(data.genreButton);
	const [dataLocation, setDataLocation] = useState(data.locationList);
	const [myBestState, setMyBestState] = useState([]);
	const [isMyBest, setIsMyBest] = useState(false);
	const [isActiveButton, setIsActiveButton] = useState(false)
	
	useEffect(() => {
		if (isMyBest) {
			const newMyBest = [...dataRadioStantion]
				.filter(t => t.value === true
				);

			const currentObject = Object.assign({}, ...newMyBest);

			if (myBestState.length) {
				const presenceMyBest = myBestState
					.some(o => o.id === currentObject.id)

				setMyBestState(presenceMyBest ? myBestState : [...myBestState, ...newMyBest]);
			} else {
				setMyBestState(newMyBest);
			}
		}
	}, [dataRadioStantion]);

	useEffect(() => {
		if (myBestState.length) {
			setIsActiveMenu(true);
		}
	}, [myBestState]);

	const imageBtnList = dataRadioStantion
		.map(i => <ImageBtnRadiostantion
			key={i.id}
			name={i.name}
			image={i.image}
			value={i.value}
			genre={i.genre}
			location={i.location}
			id={i.id}
			dataRadioStantion={dataRadioStantion}
			dataGenreName={dataGenreName}
			setDataGenreName={setDataGenreName}
			setDataRadioStantion={setDataRadioStantion}
			dataLocation={dataLocation}
			setDataLocation={setDataLocation}
			setIsMyBest={setIsMyBest}
			setMyBestState={setMyBestState}
			setIsActiveButton={setIsActiveButton}
			setTickerRadioName={setTickerRadioName}
			isActiveButton={isActiveButton}
		/>
		);
	const btnGenreList = dataGenreName
		.map(g => <TextBtnGenre
			name={g.genre}
			key={g.id}
			value={g.value}
			genre={g.genre}
			myBestState={myBestState}
			dataGenreName={dataGenreName}
			dataRadioStantion={data.radioStations}
			setDataGenreName={setDataGenreName}
			setIsActiveButton={setIsActiveButton}
			setDataRadioStantion={setDataRadioStantion}
			setTickerRadioName={setTickerRadioName}
		/>
		);

	const btnLocation = dataLocation
		.map(k => <LocationBtn
			key={k.id}
			location={k.location}
			image={k.image}
			isValue={k.isValue}
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
						{
							btnLocation
						}
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

const ImageBtnRadiostantion = ({
	image, name, setDataRadioStantion,
	dataRadioStantion, id, value, genre, location, dataGenreName,
	setDataGenreName, dataLocation, setDataLocation, setIsMyBest,
	setMyBestState, setTickerRadioName, isActiveButton, setIsActiveButton

}) => {
	const onRadiostantionIcon = () => {
		handleButtons({ dataRadioStantion, setDataRadioStantion, setMyBestState })(id, genre, location);
		handleButtonsGenreActive({ dataGenreName, setDataGenreName })(genre);
		handleButtonsLocation({ dataLocation, setDataLocation })(location);
		setIsActiveButton(false)
		setIsMyBest(true);
		setTickerRadioName(name);
	};

	return (
		<Button
			image={image}
			classNameElement={value ? 'btn-mobileRadio-active' : 'btn-mobileRadio'}
			onClick={onRadiostantionIcon}
			isActiveButton={isActiveButton}
			active={value && !isActiveButton ? true : false}
		>
			{name}
		</Button>
	);
};

const TextBtnGenre = ({
	image, name, setDataGenreName,
	dataGenreName, value, genre, dataRadioStantion,
	setDataRadioStantion, setTickerRadioName, myBestState,
	setIsActiveButton
}) => {
	const onGenreIcon = () => {
		handleButtonsGenreFilter({
			dataGenreName, setDataGenreName, myBestState,
			dataRadioStantion, setDataRadioStantion
		})(genre);
		setTickerRadioName(null);
		setIsActiveButton(true);
	};

	return (
		<ButtonText
			image={image}
			classNameElement={value ? 'btn-mobileRadioFilter-active' : 'btn-mobileRadio'}
			onClick={onGenreIcon}
		>
			{name}
		</ButtonText>
	);
};

const LocationBtn = ({
	image, isValue, location,
}) => {

	return (
		<button
			className={isValue ? 'btn-mobileRadioFilter-active' : !image && 'btn-mobileRadio'}
		>
			{
				image
					? <img
						src={image}
						width={'60px'}
						height={'60px'}
					/>
					: location
			}
		</button>
	);
};


