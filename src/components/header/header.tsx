'use client'
import arrowdrop from '@/components/svg/dropdownarrow.svg'
import logo from '@/components/svg/logo.svg'
import type { MenuProps } from 'antd'
import { Button, Dropdown } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import HeaderModal from '../HeaderModal/HeaderModal'
import styles from './header.module.scss'

function Header() {
	const [isopen, setisopen] = useState(false)
	const [modal, setModal] = useState(false)
	function modalFunction() {
		if (modal) {
			setModal(false)
		} else {
			setModal(true)
		}
	}
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: 'Алмата'
		},
		{
			key: '2',
			label: 'Астана'
		}
	]
	//
	return (
		<>
			<header className={styles.header}>
				<div className='container'>
					<div className={styles.content}>
						<div className={styles.rigthside}>
							<Link href='/' className={styles.logo}>
								<Image src={logo} alt='' />
							</Link>
							<RxHamburgerMenu
								size={25}
								className={styles.burgermenu}
								onClick={() => setisopen(true)}
							/>
							<input
								className={styles.headerInut}
								placeholder='Врачи, Услуги, Клиники'
							/>
							<button className={styles.btn}>найти</button>
							<div
								className={
									isopen
										? styles.headerBurgermenu
										: styles.headerBurgermenuclose
								}
							>
								<input
									className={styles.BurgermenuInut}
									placeholder='Врачи, Услуги, Клиники'
								/>
								<button className={styles.Burgermenubtn}>найти</button>
								<MdClose size={28} onClick={() => setisopen(false)} />
							</div>
						</div>
						<div className={styles.leftside}>
							<Dropdown menu={{ items }} placement='bottomLeft' arrow>
								<Button className={styles.leftsidedrop}>
									Алмата <Image src={arrowdrop} alt='' />
								</Button>
							</Dropdown>
							<button onClick={modalFunction} className={styles.leftsidebtn}>
								Войти
							</button>
							<div
								style={{
									display: modal ? 'block' : 'none'
								}}
							>
								<HeaderModal setModal={modalFunction} />
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
