const getSessionStorage = (key) => {
	return JSON.parse(sessionStorage.getItem(key))
}

const setSessionStorage = (key, value) => {
	sessionStorage.setItem(key, JSON.stringify(value))
}

const removeSessionStorage = (key) => {
	sessionStorage.removeItem(key)
}

export const clearUserSession = () => {
	removeSessionStorage('user')
}

export const readUserSession = () => {
	return getSessionStorage('user')
}

export const writeUserSession = (user) => {
	setSessionStorage('user', user)
}
