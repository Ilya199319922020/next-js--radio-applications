
export function RadiostantionEement({ data }) {
	const imageBtnList = data
		.map(i => <ImageBtnRadiostantion image={i.image} />
		);

	return (<>
	
		<div className={' hide_scrollbar min-w-full h-[495.86px] py-[10px] px-[9px] overflow-x-auto relative top-[70px]'}>
			<div className={"grid w-[60px] gap-[14px] mt-[0px] "} >
				<div
					className={'fixed z-10 opacity-100'}
				>
					<button className={'btn-mobileRadio bg-[#F97537]'}>
						My Best
					</button>
				</div>
				<div
					className={'grid  grid-flow-col col-start-2 gap-[14px] z-0'}
				>
					<button
						className={' btn-mobileRadio '}
					>
						Pop
					</button>
					<button
						className={' btn-mobileRadio'}
					>
						Adult PoP
					</button>
					<button
						className={' btn-mobileRadio'}
					>
						Power Pop
					</button>
					<button
						className={' btn-mobileRadio'}
					>
						Dance
					</button>
					<button
						className={' btn-mobileRadio'}
					>
						Electro
					</button>
					<button
						className={' btn-mobileRadio'}
					>
						Hip-hop
					</button>
				</div>

				<div className={'grid row-span-2  gap-[14px]'}>
					<button className={' btn-mobileRadio w-[60px]'}>
						Testing
					</button>
					<button
						className={'btn-mobileRadio w-[60px]'}
					>
						Local
					</button>
					<button
					>
						<img src={'/icon/radiostations/rus.png'}
							className={'image__Btn'}
						/>
					</button>
					<button
					>
						<img src={'/icon/radiostations/usa.png'}
							className={'image__Btn'}
						/>
					</button>
					<button
					>
						<img src={'/icon/radiostations/Bel.png'}
							className={'image__Btn'}
						/>
					</button>
					<button
					>
						<img src={'/icon/radiostations/Ger.png'}
							className={'image__Btn'}
						/>
					</button>
					<button
					>
						<img src={'/icon/radiostations/Lat.png'}
							className={'image__Btn'}
						/>
					</button>

				</div>
				<div
					className={'grid row-start-2 grid-cols-6  col-start-2 gap-[14px] z-0'}
				>
					{imageBtnList}
				</div>
			</div>

		</div>
		</>
	);
};

function ImageBtnRadiostantion({ image }) {
	return (
		<button
			className={''}
		>
			<img
				src={image} className={' btn-mobileRadio '}
			/>
		</button>
	);
};

