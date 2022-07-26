import React from 'react';

const Button = ({
	children, onClick, disabled, 
	active, classNameElement, image,
	isActiveButton
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={!image && classNameElement}
		>
			{
				image ?
					<img
						className={!classNameElement && 'btn-mobileRadio' || active && 'btn-mobileRadio-active'}
						src={image}
					/>
					: children
			}
		</button>
	);
};

export default Button;
