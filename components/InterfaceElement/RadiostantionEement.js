import { useState } from 'react';
import { handleButtons, handleButtonsGenre, handleButtonsLocation } from '../../assets/onClickFunction/onClickbtn';
import styles from '../../styles/RadiostantionEement.module.scss';
import Button from '../AuxiliaryComponent/Button';
import ButtonText from '../AuxiliaryComponent/ButtonText';

export function RadiostantionEement({ data }) {

	const [dataRadioStantion, setDataRadioStantion] = useState(data.radioStations);
	const [dataGenreName, setDataGenreName] = useState(data.genreButton);
	const [dataLocation, setDataLocation] = useState(data.locationList);
	const [myBestState, setMyBestState] = useState([]);

	const imageBtnList = dataRadioStantion
		.map(i => <ImageBtnRadiostantion
			key={i.id}
			image={i.image}
			value={i.value}
			genre={i.genre}
			location={i.location}
			id={i.id}
			dataRadioStantion={dataRadioStantion}
			dataGenreName={dataGenreName}
			setDataGenreName={setDataGenreName}
			setDataRadioStantion={setDataRadioStantion}
			handleButtons={handleButtons}
			handleButtonsLocation={handleButtonsLocation}
			dataLocation={dataLocation}
			setDataLocation={setDataLocation}
		/>
		);
	const btnGenreList = dataGenreName
		.map(g => <TextBtnGenre
			name={g.genre}
			key={g.id}
			value={g.value}
			genre={g.genre}
			id={g.id}
			dataGenreName={dataGenreName}
			setDataGenreName={setDataGenreName}
			handleButtonsGenre={handleButtonsGenre}
			dataRadioStantion={data.radioStations}
			setDataRadioStantion={setDataRadioStantion}

		/>
		);

	const btnLocation = dataLocation.map(k => <LocationBtn
		key={k.id}
		location={k.location}
		image={k.image}
		id={k.id}
		isValue={k.isValue}
		handleButtonsLocation={handleButtonsLocation}
		dataLocation={dataLocation}
		dataRadioStantion={data.radioStations}
		setDataRadioStantion={setDataRadioStantion}
		setDataLocation={setDataLocation}
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
	image, name, handleButtons, setDataRadioStantion,
	dataRadioStantion, id, value, genre, location, dataGenreName,
	setDataGenreName, dataLocation, setDataLocation
}) => {
	const onRadiostantionIcon = () => {
		handleButtons({ dataRadioStantion, setDataRadioStantion })(id, genre, location);
		handleButtonsGenre({ dataGenreName, setDataGenreName })(genre);
		handleButtonsLocation({ dataLocation, setDataLocation })(location);
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
	image, name, handleButtonsGenre, setDataGenreName,
	dataGenreName, id, value, genre, dataRadioStantion,
	setDataRadioStantion,
}) => {
	const onGenreIcon = () => {
		handleButtonsGenre({ dataGenreName, setDataGenreName, dataRadioStantion, setDataRadioStantion })(genre)
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
	image, isValue, id, location, handleButtonsLocation,
	setDataLocation, dataLocation, dataRadioStantion, setDataRadioStantion
}) => {
	const onLocationBtnn = () => {
		handleButtonsLocation({ dataLocation, setDataLocation, dataRadioStantion, setDataRadioStantion })(location)
	};
	return (
		<button
			onClick={onLocationBtnn}
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


