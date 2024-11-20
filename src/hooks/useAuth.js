import { API } from '../constants/api.js'
import { useCreateApiHook } from './useCreateApiHook.js'

export const useLogin = () =>
	useCreateApiHook(({ body }) => ({
		url: API.URL + API.AUTH.LOGIN,
		options: {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	}))

export const useRegister = () =>
	useCreateApiHook(({ body }) => ({
		url: API.URL + API.AUTH.SIGNUP,
		options: {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	}))

export function useLogout() {
	const logout = async () => {
		fetch(API.URL + API.AUTH.LOGOUT, {
			method: 'POST',
			credentials: 'include'
		})
	}

	return { logout }
}

export function useCheckAuth() {
	const checkAuth = () => {
		return fetch(API.URL + API.AUTH.CHECK, {
			credentials: 'include'
		}).then((response) => {
			if (!response.ok) return false
			return true
		})
	}

	return { checkAuth }
}
