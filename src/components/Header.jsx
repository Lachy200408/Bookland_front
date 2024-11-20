import { useState, useEffect } from 'react'
import { routes } from '../constants/routes.js'
import { useNavigateContext } from '../contexts/navigateContext.js'
import { useSessionContext } from '../contexts/sessionContext.js'
import Link from './common/Link.jsx'
import UserInfo from './common/UserInfo.jsx'
import '/src/styles/Header.css'

export default function Header() {
	const [scroll, setScroll] = useState(window.scrollY)
	const { route } = useNavigateContext()
	const { session } = useSessionContext()

	const handleScroll = () => {
		setScroll(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, false)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		handleScroll()
	}, [route])

	const isHidden = scroll < 600 && route === '/' && !session.active

	return (
		<header className={`header ${isHidden ? 'hidden' : ''}`}>
			<nav>
				<h5>
					<Link href="/">
						<span>Bookland</span>
					</Link>
				</h5>
				<ul className={session.active ? 'with-session' : 'without-session'}>
					{[...routes]
						.slice(0, routes.length - 1)
						.map(({ href, text, icon: Icon }) => (
							<li key={href}>
								<Link href={href} className={route === href ? 'active' : ''}>
									<span>{text}</span>
									<picture>
										<Icon className="icon" />
									</picture>
								</Link>
							</li>
						))}
				</ul>
				{session.active && (
					<div className="user-info-container">
						<UserInfo />
					</div>
				)}
			</nav>
		</header>
	)
}
