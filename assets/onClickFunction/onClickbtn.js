export const handleButtons = ({
	dataRadioStantion, setDataRadioStantion, handleButtons
}) => id => {
	const newValueButton = dataRadioStantion.map(button => {
		if (button.id === id) {
			return ({ ...button, value: true });
		}
		return ({ ...button, value: false });
	});
	setDataRadioStantion(newValueButton);
};

export const handleButtonsGenre = ({
	dataGenreName, setDataGenreName, handleButtons
}) => id => {
	const newValueButton = dataGenreName.map(button => {
		if (button.id === id) {
			return ({ ...button, value: true });
		}
		return ({ ...button, value: false });
	});
	setDataGenreName(newValueButton);
};

export const handleButtonsLocation = ({
	dataLocation, setDataLocation, handleButtons
}) => id => {
	const newValueButton = dataLocation.map(button => {
		if (button.id === id) {
			return ({ ...button, isValue: true });
		}
		return ({ ...button, isValue: false });
	});
	setDataLocation(newValueButton);
};


