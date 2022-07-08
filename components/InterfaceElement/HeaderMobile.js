import { useEffect, useState } from "react";
import styles from '../../styles/HeaderMobile.module.scss';

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
			<div className={styles.header}>
				<div className={styles.header__time}>
					{hourValue}: {minutesValue}
				</div>
				<div className={styles.header__icon}>
					<span>
						<img
							src={'/icon/other/Combin.png'}
							className={styles.image_connection}
						/>
					</span>
					<span>
						<img
							src={'/icon/other/Wi-Fi.png'}
							className={styles.image_wi_fi}
						/>
					</span>
					<span>
						<img
							src={'/icon/other/Battery.png'}
							className={styles.image_baterry}
						/>
					</span>
				</div>
			</div>
		</header>
	);
};