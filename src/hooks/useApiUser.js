import { API } from '../constants/api.js'
import { useCreateApiHook } from './useCreateApiHook.js'

export const useUpdateAvatar = () => {
	const updateAvatar = ({ avatarname }) => {
		return fetch(API.URL + API.USER.UPDATE, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ avatarname })
		})
	}

	return { updateAvatar }
}

export const useUpdateProfile = () => {
	const updateProfile = ({ username }) => {
		return fetch(API.URL + API.USER.UPDATE, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username })
		})
	}

	return { updateProfile }
}

export const useGetSocialUsers = () =>
	useCreateApiHook(() => ({
		url: API.URL + API.USER.GETSOCIAL,
		options: { credentials: 'include' }
	}))
