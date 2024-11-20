import { useState, useEffect } from 'react'

export const useRemovedBooks = () => {
	const [removedBooks, setRemovedBooks] = useState([])
	let timeOutId = null

	useEffect(() => {
		if (!removedBooks.length) return

		if (timeOutId) clearTimeout(timeOutId)

		timeOutId = setTimeout(reset, 10000)
	}, [removedBooks])

	const add = (book) => {
		setRemovedBooks([...removedBooks, book])
	}

	const reset = () => {
		setRemovedBooks([])
	}

	const revert = () => {
		const array = [...removedBooks]
		reset()
		return array
	}

	return { removedBooks, addRemovedBook: add, revertRemovedBook: revert }
}
