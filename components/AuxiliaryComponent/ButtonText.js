const ButtonText = ({
	children, onClick, disabled, classNameElement, value
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={classNameElement}
			value={value}
		>
			{
				children
			}
		</button>
	);
};

export default ButtonText;
