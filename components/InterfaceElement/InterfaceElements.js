//все стили перенести в отдельный файл
export function InterfaceElements() {
	return (
		<div>
			<form className={'w=[355px] h=[36px] mb-[10.5px] mt-[16px]'}>
				<input

					type={'text'}
					className={' block w-full h-[36px] bg-[#e6e6e6] rounded-lg'}
				/>
				<button className={'absolute top-[7.35%] left-[90%]'}>
					<img
						src={'/icon/other/Fill.png'} className={'w-[14.57px] h-[17.25px]'}
					/>
				</button>
			</form>
			<div
				className={'absolute min-w-full h-[55px] left-[0px] border-t border-slate-400  flex justify-between  items-center'}
			>
				<div className={'ml-[20px]'}>
					<div className={'w-[24px] h-[1.5px] mb-[7.25px] rounded-sm bg-[#0C91D8]'}></div>
					<div className={'w-[24px] h-[1.5px] mb-[7.25px] rounded-sm bg-[#0C91D8]'}></div>
					<div className={'w-[24px] h-[1.5px] rounded-sm bg-[#0C91D8]'}></div>
				</div>
				{/* <div className={'flex justify-between  mx-10'}>
					<button className={'btn-mobileInterface'}>
						<img
							src={'/icon/buttons/Like.png'} width="28" height="28"
						/>
					</button>
					<button className={'btn-mobileInterface'}>
						<img
							src={'/icon/buttons/play.png'} width="35" height="35"
						/>
					</button>
					<button className={'btn-mobileInterface'}>
						<img
							src={'/icon/buttons/Dislike.png'} width="28" height="28"
						/>
					</button>
					<button className={'btn-mobileInterface'}>
						<img
							src={'/icon/buttons/Group.png'} width="20" height="18"
						/>
					</button>
					<button>
						<img
							src={'/icon/buttons/Union.png'} width="21" height="22"
						/>
					</button>
				</div> */}
				<div>
					<button>
						<img
							src={'/icon/other/Union.png'} className={' w-[21px]  h-[22px] mr-[20px]'}
						/>
					</button>

				</div>
			</div>
			<div
				className={'absolute w-[100%] left-[0px] top-[20%] h-[14px] bg-[#EEEEEE]'}>
			</div>
		</div>
	);
};
