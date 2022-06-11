import Image from "next/image";

export function InterfaceElements() {
	return (
		<div>
			<div>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div>
				<input />
				<Image
					src={'/icon/other/Fill.png'} width="30" height="30"
				/>
			</div>
			<div>
				<Image
					src={'/icon/buttons/Like.png'} width="30" height="20"
				/>
				<Image
					src={'/icon/buttons/play.png'} width="30" height="20"
				/>
				<Image
					src={'/icon/buttons/Dislike.png'} width="30" height="20"
				/>
				<Image
					src={'/icon/buttons/Group.png'} width="30" height="20"
				/>
				<Image
					src={'/icon/buttons/Union.png'} width="30" height="30"
				/>
			</div>
			<div>
			</div>
		</div>
	);
};
