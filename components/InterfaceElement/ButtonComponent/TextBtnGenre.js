import { handleButtonsGenreFilter } from "../../../assets/onClickFunction/onClickbtn";
import ButtonText from "../../AuxiliaryComponent/ButtonText";

export const TextBtnGenre = ({
	item, setDataGenreName,
	dataGenreName, dataRadioStantion,
	setDataRadioStantion, setTickerRadioName, myBestState,
	setIsActiveButton
}) => {
	
	const onGenreIcon = (e) => {
		e.preventDefault();
		handleButtonsGenreFilter({
			dataGenreName, setDataGenreName, myBestState,
			dataRadioStantion, setDataRadioStantion
		})(item.genre);
		setTickerRadioName(null);
		// setIsActiveButton(true);
	};

	return (
		<ButtonText
			image={item.image}
			classNameElement={item.value ? 'btn-mobileRadioFilter-active' : 'btn-mobileRadio'}
			onClick={onGenreIcon}
		>
			{item.genre}
		</ButtonText>
	);
};