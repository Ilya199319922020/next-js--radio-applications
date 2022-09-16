import React, { useEffect, useState } from 'react';
import { useMyBest } from '../../assets/hooks/useMyBest';
import styles from '../../styles/RadiostantionEement.module.scss';
import Button from '../AuxiliaryComponent/Button';
import { ImageBtnRadiostantion } from './ButtonComponent/ImageBtnRadiostantion';
import { LocationBtn } from './ButtonComponent/LocationBtn';
import { TextBtnGenre } from './ButtonComponent/TextBtnGenre';

export const RadiostantionEement = ({
	data, setIsActiveMenu,
	setTickerRadioName, currentSearchValue
}) => {

	const [dataRadioStantion, setDataRadioStantion] = useState(data.radioStations);  //вынести в usereducer
	const [dataGenreName, setDataGenreName] = useState(data.genreButton);            //usecallback сделать  
	const [dataLocation, setDataLocation] = useState(data.locationList);
	const [myBestState, setMyBestState] = useState([]);
	const [isMyBest, setIsMyBest] = useState(false);
	const [isActiveButton, setIsActiveButton] = useState(false);
	const [activeMyBest, toggleMyBest] = useMyBest();
	
	useEffect(() => {
		if (activeMyBest && myBestState) {
			setDataRadioStantion(myBestState);
			setTickerRadioName('');
		}
	}, [activeMyBest]);

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
		if (currentSearchValue) {
			setDataRadioStantion(currentSearchValue)
		}
	}, [currentSearchValue]);

	useEffect(() => {
		if (!isActiveButton) {
			setDataRadioStantion(data.radioStations);
			setDataGenreName(data.genreButton);
			setDataLocation(data.locationList);
			setTickerRadioName('');
			setIsActiveMenu(false);
		} else {
			setIsActiveMenu(true);
		}
	}, [isActiveButton]);

	const imageBtnList = dataRadioStantion
		.map(i => <ImageBtnRadiostantion
			key={i.id}
			item={i}
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
			item={g}
			key={g.id}
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
			item={k}
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
							onClick={toggleMyBest}
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
						{
							imageBtnList
						}
					</div>
				</div>
			</div>
		</>
	);
};







