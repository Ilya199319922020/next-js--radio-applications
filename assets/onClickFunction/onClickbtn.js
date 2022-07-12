export const handleButtons = ({
	dataRadioStantion, setDataRadioStantion,
}) => (id, genre, location) => {
	const newValueButton = dataRadioStantion.map(button => {
		if (button.id === id) {
			return (
				{ ...button, value: true }
			);
		}
		return ({ ...button, value: false });

	});
	const newFilterValue = [...newValueButton].filter(a =>
		a.genre === genre && a.location === location
	);
	setDataRadioStantion(newFilterValue);
};


export const handleButtonsGenre = ({
	dataGenreName, setDataGenreName,
	dataRadioStantion, setDataRadioStantion
}) => genre => {

	const newValueButton = dataGenreName.map(button => {
		console.log(genre)
		if (button.genre === genre) {
			return ({ ...button, value: true });
		}
		return ({ ...button, value: false });
	});

	const newFilterValue = [...dataRadioStantion]
		.filter(a => a.genre === genre
		);

	setDataRadioStantion(newFilterValue);
	setDataGenreName(newValueButton);
};

export const handleButtonsLocation = ({
	dataLocation, setDataLocation,
	dataRadioStantion, setDataRadioStantion
}) => location => {

	const newValueButton = dataLocation.map(button => {
		if (button.location === location) {
			return ({ ...button, isValue: true });
		}
		return ({ ...button, isValue: false });
	});

	const newFilterValue = [...dataRadioStantion]
		.filter(a => a.location === location
		);

	setDataRadioStantion(newFilterValue);
	setDataLocation(newValueButton);
};


