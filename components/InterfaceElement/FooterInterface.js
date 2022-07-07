
export function FooterInterface() {
	return (
		<div className={'flex justify-between  relative pl-[16px] pr-[16px] pt-[12px] top-[70px]'}>
			<button>
				<img
					src={'/icon/other/Icon.png'} width="15"
				/>
			</button>
			<button>
				<img
					src={'/icon/other/Icon.png'}
					className={'w-[15px] rotate-180'}
				/>
			</button>
			<button>
				<img
					src={'/icon/buttons/Icon1.png'}
					className={'w-[19px] h-[27px]'}
				/>
			</button>
			<button>
				<img
					src={'/icon/buttons/Icon2.png'}
					className={'w-[25px] h-[24px]'}
				/>
			</button>
			<button>
				<img
					src={'/icon/buttons/Icon7.png'}
					className={'w-[25px] h-[25px]'}
				/>
			</button>
		</div>
	);
};
