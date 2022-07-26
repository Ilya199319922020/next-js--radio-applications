import ButtonText from "../../AuxiliaryComponent/ButtonText";

 export const TextBtnGenre = ({
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