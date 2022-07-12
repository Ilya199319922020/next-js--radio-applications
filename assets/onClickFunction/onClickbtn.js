export const handleButtons = ({
	dataRadioStantion,  setDataRadioStantion, 
}) => (id, genre, location) => {
	const newValueButton = dataRadioStantion.map(button => {
		if (button.id === id) {
			return (
				{ ...button, value: true }
			);
		}
		return ({ ...button, value: false });

	});
	const newFilterValue = newValueButton.filter(a =>
		a.genre === genre && a.location === location
	);
	setDataRadioStantion(newFilterValue);
};


export const handleButtonsGenre = ({
	dataGenreName, setDataGenreName, handleButtons
}) => genre => {
	const newValueButton = dataGenreName.map(button => {
		console.log(genre)
		if (button.genre === genre) {
			return ({ ...button, value: true });
		}
		return ({ ...button, value: false });
	});
	setDataGenreName(newValueButton);
};

export const handleButtonsLocation = ({
	dataLocation, setDataLocation, handleButtons
}) => location => {
	const newValueButton = dataLocation.map(button => {
		if (button.location === location) {
			return ({ ...button, isValue: true });
		}
		return ({ ...button, isValue: false });
	});
	setDataLocation(newValueButton);
};


