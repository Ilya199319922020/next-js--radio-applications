export const LocationBtn = ({
	image, isValue, location,
}) => {

	return (
		<button
			className={isValue ? 'btn-mobileRadioFilter-active' : !image && 'btn-mobileRadio'}
		>
			{
				image
					? <img
						src={image}
						width={'60px'}
						height={'60px'}
					/>
					: location
			}
		</button>
	);
};