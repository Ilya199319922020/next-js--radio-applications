import styles from '../../styles/FooterInterface.module.scss';

export function FooterInterface() {
	return (
		<div
			className={styles.footer}
		>
			<button>
				<img
					src={'/icon/other/Icon.png'}
					width="15"
				/>
			</button>
			<button>
				<img
					className={styles.footer__btn_arrow}
					src={'/icon/other/Icon.png'}
				/>
			</button>
			<button>
				<img
					className={styles.footer__btn_up}
					src={'/icon/buttons/Icon1.png'}
				/>
			</button>
			<button>
				<img
					className={styles.footer__btn_paper}
					src={'/icon/buttons/Icon2.png'}
				/>
			</button>
			<button>
				<img
					className={styles.footer__btn_copy}
					src={'/icon/buttons/Icon7.png'}
				/>
			</button>
		</div>
	);
};
