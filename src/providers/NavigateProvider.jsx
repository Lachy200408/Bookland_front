import { useEffect, useState } from 'react'
import { navigateContext } from '../contexts/navigateContext.js'
import { routes } from '../constants/routes.js'
import { EVENTS } from '../constants/events.js'
import NotFound from '../components/routes/NotFound.jsx'

export default function NavigateProvider({ children }) {
	const [route, setRoute] = useState(window.location.pathname)

	useEffect(() => {
		const onReturn = () => {
			setRoute(window.location.pathname)
		}

		window.addEventListener(EVENTS.POP, onReturn)
		window.addEventListener(EVENTS.PUSH, onReturn)

		return () => {
			window.removeEventListener(EVENTS.PUSH, onReturn)
			window.removeEventListener(EVENTS.POP, onReturn)
		}
	}, [])

	useEffect(() => {
		const routeObj = routes.find(({ href }) => href === route)
		document.title =
			'Bookland | ' + (routeObj ? routeObj.text : 'Page not found')
	}, [route])

	const routeObj = routes.find(({ href }) => href === route)
	const page = routeObj ? routeObj.component : NotFound

	return (
		<navigateContext.Provider value={{ route, page }}>
			{children}
		</navigateContext.Provider>
	)
}
