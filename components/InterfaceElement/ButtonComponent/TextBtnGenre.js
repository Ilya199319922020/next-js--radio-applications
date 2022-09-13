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
		})(item.genre, item.value);
		setTickerRadioName(null);
		setIsActiveButton(false);
	};

	return (
		<ButtonText
			image={item.image}
			classNameElement={item.value ? 'btn-mobileRadioFilter-active' : 'btn-mobileRadio'}
			onClick={onGenreIcon}
			value={item.value}
		>
			{
				item.genre
			}
		</ButtonText>
	);
};