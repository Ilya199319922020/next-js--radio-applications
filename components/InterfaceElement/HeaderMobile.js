import Image from "next/image";

export function HeaderMobile() {
	return (
		<header>
			<div>
				<span>
					время(наст)
				</span>
				<div>
					<span>
						<Image
							src={'/icon/other/Combin.png'} width="30" height="20"
						/>
					</span>
					<span>
						<Image
							src={'/icon/other/Wi-Fi.png'} width="30" height="20"
						/>
					</span>
					<span>
						<Image
							src={'/icon/other/Battery.png'} width="30" height="20"
						/>
					</span>
				</div>
			</div>
		</header>
	);
};