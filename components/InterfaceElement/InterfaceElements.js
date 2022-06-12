import Image from "next/image";

export function InterfaceElements() {
	return (
		<div>
			<div className={'w=[355px] h=[36px] mb-[10.5px] mt-[16px]'}>
				<input

					type={'text'}
					className={' block w-full h-[36px] bg-[#e6e6e6] rounded-lg'}
				/>
				<button className={'absolute top-[7.65%] left-[90%]'}>
					<img
						src={'/icon/other/Fill.png'} className={'w-[14.57px] h-[17.25px]'}
					/>
				</button>

			</div>
			<div
				className={'absolute w-[100%] h-[55px] left-[0px] border-t border-slate-400  flex justify-between  items-center'}
			>
				<div className={'ml-[20px]'}>
					<div className={'w-[24px] h-[1.5px] mb-[7.25px] rounded-sm bg-[#0C91D8]'}></div>
					<div className={'w-[24px] h-[1.5px] mb-[7.25px] rounded-sm bg-[#0C91D8]'}></div>
					<div className={'w-[24px] h-[1.5px] rounded-sm bg-[#0C91D8]'}></div>
				</div>
				{/* написать плагины для кнопки */}
				{/* <div className={'flex justify-between  mx-10'}> 
					<button className={'mr-[15px] '}>  
						<img
							src={'/icon/buttons/Like.png'} width="30" height="20"
						/>
					</button>
					<button  className={'mr-[15px] '}>
						<img
							src={'/icon/buttons/play.png'} width="30" height="20"
						/>
					</button>
					<button  className={'mr-[15px] '}>
						<img
							src={'/icon/buttons/Dislike.png'} width="30" height="20"
						/>
					</button>
					<button  className={'mr-[15px] '}>
						<img
							src={'/icon/buttons/Group.png'} width="30" height="20"
						/>
					</button>
					<button  className={'mr-[15px] '}>
						<img
							src={'/icon/buttons/Union.png'} width="30" height="30"
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
			<div>
			</div>
		</div>
	);
};
