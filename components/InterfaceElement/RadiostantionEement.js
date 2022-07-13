import { useEffect, useState } from 'react';
import { handleButtons, handleButtonsGenre, handleButtonsLocation, handleButtonsGenreActive, handleButtonsGenreFilter } from '../../assets/onClickFunction/onClickbtn';
import styles from '../../styles/RadiostantionEement.module.scss';
import Button from '../AuxiliaryComponent/Button';
import ButtonText from '../AuxiliaryComponent/ButtonText';

export function RadiostantionEement({ data, setIsActiveMenu, setTickerRadioName }) {

	const [dataRadioStantion, setDataRadioStantion] = useState(data.radioStations);
	const [dataGenreName, setDataGenreName] = useState(data.genreButton);
	const [dataLocation, setDataLocation] = useState(data.locationList);
	const [myBestState, setMyBestState] = useState([]);
	const [isMyBest, setIsMyBest] = useState(false);

	useEffect(() => {
		if (isMyBest) {
			const newMyBest = [...dataRadioStantion].filter(t =>
				t.value === true
			);
			setMyBestState(prev => [...prev, ...newMyBest]);
		}
	}, [dataRadioStantion]);

	useEffect(() => {
		if (myBestState.length > 0) {
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
			setTickerRadioName={setTickerRadioName}
		/>
		);
	const btnGenreList = dataGenreName
		.map(g => <TextBtnGenre
			name={g.genre}
			key={g.id}
			value={g.value}
			genre={g.genre}
			dataGenreName={dataGenreName}
			setDataGenreName={setDataGenreName}
			dataRadioStantion={data.radioStations}
			setDataRadioStantion={setDataRadioStantion}
			setTickerRadioName={setTickerRadioName}
		/>
		);

	const btnLocation = dataLocation.map(k => <LocationBtn
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
	setMyBestState, setTickerRadioName
}) => {
	const onRadiostantionIcon = () => {
		handleButtons({ dataRadioStantion, setDataRadioStantion, setMyBestState })(id, genre, location);
		handleButtonsGenreActive({ dataGenreName, setDataGenreName })(genre);
		handleButtonsLocation({ dataLocation, setDataLocation })(location);
		setIsMyBest(true);
		setTickerRadioName(name);
	};

	return (
		<Button
			image={image}
			classNameElement={value ? 'btn-mobileRadio-active' : 'btn-mobileRadio'}
			onClick={onRadiostantionIcon}
			active={value ? true : false}
		>
			{name}
		</Button>
	);
};

const TextBtnGenre = ({
	image, name, setDataGenreName,
	dataGenreName, value, genre, dataRadioStantion,
	setDataRadioStantion, setTickerRadioName
}) => {
	const onGenreIcon = () => {
		handleButtonsGenreFilter({ dataGenreName, setDataGenreName, dataRadioStantion, setDataRadioStantion })(genre);
		setTickerRadioName(null);
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


