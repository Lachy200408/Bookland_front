import { useState } from 'react'

export const useCreateApiHook = (callback, callback_2) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const reset = () => {
		setData(null)
		setError(null)
		setLoading(false)
	}

	const fetching = ({
		body = undefined,
		params = undefined,
		query = undefined
	} = {}) => {
		const { url, options } = callback({ body, params, query })

		fetch(url, options)
			.then(async (res) => {
				if (res.ok) return callback_2 ? callback_2({ res }) : res.json()
				throw { status: res.status, error: await res.json() }
			})
			.then((_data) => {
				setData(_data)
			})
			.catch((err) => {
				setError(err)
			})
			.finally(() => {
				setLoading(false)
			})

		reset()
	}

	return { fetching, data, error, loading, reset }
}
