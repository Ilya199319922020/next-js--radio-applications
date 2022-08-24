export const LocationBtn = ({ item, isValue }) => {
	return (
		<button
			className={isValue ? 'btn-mobileRadioFilter-active' : 'btn-mobileRadio'}
		>
			{
				item.image
					? <img
						src={isValue ? item.image_active : item.image}
						width={'60px'}
						height={'60px'}
					/>
					: item.location
			}
		</button>
	);
};