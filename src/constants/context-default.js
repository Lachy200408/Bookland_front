export const navigateDefaultValue = {
	route: '',
	page: () => {}
}

export const notificationDefaultValue = {
	notification: [],
	addNotification: () => {},
	removeNotification: () => {}
}

export const sessionDefaultValue = {
	session: {
		active: false,
		loggedTime: new Date().toLocaleString(),
		user: {}
	},
	updateSession: () => {}
}
