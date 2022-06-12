import Image from 'next/image';

export function RadiostantionEement({ image }) {
	return (
		<div className={'flex justify-center '}>
			<Image src={image} width="64" height="64" />
		</div>
	);
};

