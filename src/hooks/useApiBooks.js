import { API } from '../constants/api.js'
import { useCreateApiHook } from './useCreateApiHook.js'

export const useAllBooks = () =>
	useCreateApiHook(() => ({
		url: API.URL + API.BOOKS.GETALL,
		options: {
			credentials: 'include'
		}
	}))

export const useCreateBook = () =>
	useCreateApiHook(({ body }) => ({
		url: API.URL + API.BOOKS.CREATE,
		options: {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	}))

export const useEditBook = () =>
	useCreateApiHook(({ body, params }) => ({
		url: API.URL + API.BOOKS.UPDATE(params),
		options: {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	}))

export const useDeleteBook = () =>
	useCreateApiHook(({ params }) => ({
		url: API.URL + API.BOOKS.DELETE(params),
		options: {
			method: 'DELETE',
			credentials: 'include'
		}
	}))

export const useUploadBook = () => {
	const uploadBook = async ({ book, name, type }) => {
		return fetch(API.URL + API.BOOKFILE.UPLOAD + '?name=' + name, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': type
			},
			body: await book.arrayBuffer()
		})
	}

	return { uploadBook }
}

export const useDownloadBook = () =>
	useCreateApiHook(
		({ params }) => ({
			url: API.URL + API.BOOKFILE.DOWNLOAD(params),
			options: { credentials: 'include' }
		}),
		async ({ res }) => ({
			name: res.headers.get('book-name'),
			blob: await res.blob()
		})
	)

export const useAllSharedBooks = () =>
	useCreateApiHook(() => ({
		url: API.URL + API.BOOKS.SHARE,
		options: { credentials: 'include' }
	}))

export const useShareBook = () =>
	useCreateApiHook(({ body }) => ({
		url: API.URL + API.BOOKS.SHARE,
		options: {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	}))

export const useDeleteSharedBook = () =>
	useCreateApiHook(({ params }) => ({
		url: API.URL + API.BOOKS.DELETESHARE(params),
		options: {
			method: 'DELETE',
			credentials: 'include'
		}
	}))
