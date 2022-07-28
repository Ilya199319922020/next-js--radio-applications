export const LocationBtn = ({ item, isValue }) => {

	return (
		<button
			className={isValue ? 'btn-mobileRadioFilter-active' : !item.image && 'btn-mobileRadio'}
		>
			{
				item.image
					? <img
						src={item.image}
						width={'60px'}
						height={'60px'}
					/>
					: item.location
			}
		</button>
	);
};