import { useState } from "react";
import styles from '../../styles/InterfaceElements.module.scss';

export function InterfaceElements() {
	const [searchValue, setSearchValue] = useState('');

	return (
		<div>
			<form className={styles.form}>
				<input
					className={styles.form__input}
					value={searchValue}
					type={'input'}
					onChange={e => setSearchValue(e.target.value)}
				/>
				<button
					className={styles.form__button}
				>
					<img
						className={styles.form__button_image}
						src={'/icon/other/Fill.png'}
					/>
				</button>
			</form>
			<div
				className={styles.interfaceMenu}
			>
				<div className={styles.interfaceMenu__btn}>
					<button>
						<div className={styles.interfaceMenu__btn_element}></div>
						<div className={styles.interfaceMenu__btn_element}></div>
						<div className={styles.interfaceMenu__btn_elementlastchild}></div>
					</button>
				</div>
				<div className={styles.interfaceMenu__btnAction}>
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
				</div>
				<div>
					<button>
						<img
							className={styles.interfaceMenu__search}
							src={'/icon/other/Union.png'}
						/>
					</button>

				</div>
			</div>
			<div
				className={styles.interface__element}
			>
			</div>
		</div>
	);
};
