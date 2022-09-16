export const handleButtons = ({
	dataRadioStantion, setDataRadioStantion, setMyBestState
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

export const handleButtonsGenreActive = ({
	dataGenreName, setDataGenreName,
}) => (genre, isValue) => {

	const newValueButton = dataGenreName
		.map(button => {
			if (button.genre === genre) {
				return ({ ...button, value: true });
			}
			return ({ ...button, value: false });
		});
	setDataGenreName(newValueButton);
};

export const handleButtonsGenreFilter = ({
	dataGenreName, setDataGenreName, myBestState,
	dataRadioStantion, setDataRadioStantion
}) => (genre, isValue) => {
	const newValueButton = dataGenreName
		.map(button => {
			if (button.genre === genre && isValue === false) {
				return ({ ...button, value: true });
			}
			else if (button.value === isValue) {
				return ({ ...button, value: false });
			} else {
				return ({ ...button, value: false });
			}
		});

	const newFilterValueGenre = isValue ?
		dataRadioStantion
		:
		myBestState.length
			?
			[...myBestState]
				.filter(a => a.genre === genre)
			:
			[...dataRadioStantion]
				.filter(a => a.genre === genre);
	setDataRadioStantion(newFilterValueGenre);
	setDataGenreName(newValueButton);
};


export const handleButtonsLocation = ({
	dataLocation, setDataLocation,
}) => location => {

	const newValueButton = dataLocation
		.map(button => {
			if (button.location === location) {
				return ({ ...button, isValue: true });
			}
			return ({ ...button, isValue: false });
		});

	setDataLocation(newValueButton);
};


