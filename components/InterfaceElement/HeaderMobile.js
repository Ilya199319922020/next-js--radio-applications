import { useEffect, useState } from "react";

export function HeaderMobile() {
	let date = new Date();
	const hour = date.getHours();
	const minutes = date.getMinutes();
	
	const [hourValue, setHourValue] = useState(hour);
	const [minutesValue, setMinutesValue] = useState(minutes);

	useEffect(() => {
		setMinutesValue(minutes);
		setHourValue(hour);
	}, [minutes, hour]);

	return (
		<header>
			<div className={'flex justify-between items-center'}>
				<div>
					<div className={'w-[54px] h-[18px] ml-[20px] text-[14px] flex  items-center font-semibold '}>
						{hourValue}: {minutesValue}
					</div>
				</div>
				<div className={'flex  items-center justify-between w-[67px] h-[11.5px]'}>
					<span className={'flex '}>
						<img
							src={'/icon/other/Combin.png'} className={'h-[10.7px] w-[17.1px] '}
						/>
					</span>
					<span>
						<img
							src={'/icon/other/Wi-Fi.png'} className={'h-[100%] w-[15.4px]'}
						/>
					</span>
					<span>
						<img
							src={'/icon/other/Battery.png'} className={'h-[100%] w-[22px]'}
						/>
					</span>
				</div>
			</div>
		</header>
	);
};