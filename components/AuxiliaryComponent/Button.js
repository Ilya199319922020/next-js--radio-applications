import React from 'react';

const Button = ({
	children, onClick, disabled, active, classNameElement, image
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
						className={'btn-mobileRadio'} src={image}
					/>
					: children
			}
		</button>
	);
};



export default Button;
