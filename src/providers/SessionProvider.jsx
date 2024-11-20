import { useEffect, useState } from 'react'
import { sessionContext } from '../contexts/sessionContext.js'
import { useCheckAuth, useLogout } from '../hooks/useAuth.js'
import { navigate } from '../utils/navigate.js'
import { sessionDefaultValue } from '../constants/context-default.js'
import {
	readUserSession,
	writeUserSession,
	clearUserSession
} from '../utils/sessionStorage.js'

export default function SessionProvider({ children }) {
	const [session, setSession] = useState(sessionDefaultValue)
	const { logout: serverLogout } = useLogout()
	const { checkAuth } = useCheckAuth()

	const updateSession = (data) => {
		setSession({
			active: true,
			loggedTime: new Date().toLocaleString(),
			user: data
		})
	}

	const logout = () => {
		setSession(sessionDefaultValue)
	}

	useEffect(() => {
		const _session = readUserSession()
		checkAuth().then((isAuth) => {
			if (isAuth && _session.user) {
				setSession(_session)
			} else {
				serverLogout()
				logout()
			}
		})
	}, [])

	useEffect(() => {
		setInterval(() => {
			checkAuth().then((isAuth) => {
				if (!isAuth) {
					serverLogout()
					logout()
				}
			})
		}, 45000)
	}, [])

	useEffect(() => {
		if (session.active) {
			writeUserSession(session)
		} else {
			clearUserSession()
		}
		navigate('/')
	}, [session])

	return (
		<sessionContext.Provider
			value={{
				session,
				updateSession,
				logout
			}}
		>
			{children}
		</sessionContext.Provider>
	)
}
