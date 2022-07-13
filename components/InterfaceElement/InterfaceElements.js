import { useState } from "react";
import styles from '../../styles/InterfaceElements.module.scss';
import Button from "../AuxiliaryComponent/Button";

export function InterfaceElements({ isActiveMenu, tickerRadioName }) {
	const [searchValue, setSearchValue] = useState('');
	const [activeSearch, setActiveSearch] = useState(false);

	const onSetActiveSearch = (e) => {
		e.preventDefault();
		setActiveSearch(prev => !prev);
	};

	return (
		<div>
			<form className={styles.form}>
				<input
					className={styles.form__input}
					type={'input'}
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
				{
					!activeSearch
						? isActiveMenu &&
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
						:
						<form className={styles.interfaceMenu__form}>
							<input
								className={styles.interfaceMenu__form_input}
								value={searchValue}
								type={'input'}
								onChange={e => setSearchValue(e.target.value)}
							/>
						</form>
				}
				<div>
					<Button
						image={!activeSearch ? '/icon/other/Union.png' : '/icon/buttons/Close.png'}
						classNameElement={styles.interfaceMenu__search}
						onClick={onSetActiveSearch}
					/>
				</div>
			</div>
			<div
				className={styles.interface__element}
			>
				{
					tickerRadioName && 
						<span className={styles.interface__element_text}>
							«Вы слушаете {tickerRadioName}»
						</span>
				}
			</div>
		</div>
	);
};
