import { notificationContext } from '../contexts/notificationContext.js'
import { useState } from 'react'

export default function NotificationProvider({ children }) {
	const [notifications, setNotifications] = useState([])
	const [timeoutid, setTimeoutid] = useState(null)

	const removeNotification = (_id) => {
		const newArray = [...notifications].filter(({ id }) => id !== _id)
		setNotifications(newArray)
	}

	const addNotification = (notification) => {
		const _notification = {
			text: notification,
			id: window.crypto.randomUUID()
		}

		if (timeoutid) {
			clearTimeout(timeoutid)
		}
		setNotifications((prevState) => [...prevState, _notification])
		const id = setTimeout(() => setNotifications([]), 5000)
		setTimeoutid(id)
	}

	return (
		<notificationContext.Provider
			value={{
				notifications,
				addNotification,
				removeNotification
			}}
		>
			{children}
		</notificationContext.Provider>
	)
}
