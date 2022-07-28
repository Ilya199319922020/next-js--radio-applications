import { handleButtons, handleButtonsGenreActive, handleButtonsLocation } from "../../../assets/onClickFunction/onClickbtn";
import Button from "../../AuxiliaryComponent/Button";

export const ImageBtnRadiostantion = ({
	item, setDataRadioStantion, dataRadioStantion, dataGenreName,
	setDataGenreName, dataLocation, setDataLocation, setIsMyBest,
	setMyBestState, setTickerRadioName, isActiveButton, setIsActiveButton,
	
}) => {
	const onRadiostantionIcon = (e) => {
		e.preventDefault();
		handleButtons({ dataRadioStantion, setDataRadioStantion, setMyBestState })(item.id, item.genre, item.location);
		handleButtonsGenreActive({ dataGenreName, setDataGenreName })(item.genre);
		handleButtonsLocation({ dataLocation, setDataLocation })(item.location);
		setIsActiveButton(false)
		setIsMyBest(true);
		setTickerRadioName(item.name);
	};

	return (
		<Button
			image={item.image}
			classNameElement={item.value ? 'btn-mobileRadio-active' : 'btn-mobileRadio'}
			onClick={onRadiostantionIcon}
			isActiveButton={isActiveButton}
			active={item.value && !isActiveButton ? true : false}
		>
			{item.name}
		</Button>
	);
};