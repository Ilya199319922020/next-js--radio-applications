const ButtonText = ({
	children, onClick, disabled, classNameElement,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={classNameElement}
		>
			{
				children
			}
		</button>
	);
};

export default ButtonText;
