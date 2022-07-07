import React from 'react'

export function MainLayout({ children }) {
	return (
		<div
			className={'relative px-[10px] pt-[14px] pb-[46px] w-[375px] min-h-[754px] container  mx-auto '}
		>
			{children}
		</div>
	);
};
