import Button from "../../AuxiliaryComponent/Button";

export const ImageBtnRadiostantion = ({
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