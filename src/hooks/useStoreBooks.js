import { useState } from 'react'

export const useStoreBooks = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const getStoreBooks = ({ url }) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setData(data)
			})
			.catch((err) => {
				setError(err)
			})
			.finally(() => {
				setLoading(false)
			})

		setLoading(true)
		setData(null)
		setError(null)
	}

	return { getStoreBooks, data, loading, error }
}
