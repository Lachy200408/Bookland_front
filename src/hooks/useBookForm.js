import { ERRORS } from '../constants/errors.js'
import { useState } from 'react'
import { useModal } from './useModal.js'

export const useAddBookForm = ({ onUpload, onCreate }) => {
	const { modalOpen, onOpenModal, onCloseModal } = useModal()
	const [fileInput, setFileInput] = useState(null)
	const [fileInputError, setFileInputError] = useState(null)

	const onFileChange = (event) => {
		setFileInput(event.target.files)
	}

	const onSubmit = async (event) => {
		event.preventDefault()

		if (!fileInput || fileInput.length === 0) {
			setTimeout(() => {
				setFileInputError(null)
			}, 5000)
			return setFileInputError(ERRORS.UPLOAD_BOOK)
		}

		const form = event.target
		const title = form.title.value
		const author = form.author.value
		const description = form.description.value

		onUpload({
			book: fileInput[0],
			name: fileInput[0].name,
			type: fileInput[0].type
		})
			.then(async (res) => {
				if (res.ok) return res.json()
				throw { status: res.status, error: await res.json() }
			})
			.then((data) => {
				onCreate({
					body: {
						title,
						author,
						description,
						fileid: data.fileid
					}
				})
			})

		onCloseModal()
		setFileInput(null)
	}

	return {
		modalOpen,
		onOpenModal,
		onCloseModal,
		fileInput,
		setFileInput,
		fileInputError,
		onFileChange,
		onSubmit
	}
}

export const useEditBookForm = ({ onEdit }) => {
	const { modalOpen, onCloseModal, onOpenModal } = useModal()

	const onSubmit = (event, bookid) => {
		event.preventDefault()

		const form = event.target
		const title = form.title.value
		const author = form.author.value
		const description = form.description.value

		onEdit({
			body: {
				title,
				author,
				description
			},
			params: bookid
		})

		onCloseModal()
	}

	return {
		modalOpen,
		onOpenModal,
		onCloseModal,
		onSubmit
	}
}

export const useShareBookForm = () => {
	return useModal()
}
