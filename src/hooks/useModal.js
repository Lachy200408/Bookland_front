import { useState } from 'react'

export const useModal = () => {
	const [modalOpen, setModalOpen] = useState(false)

	const onOpenModal = () => {
		setModalOpen(true)
	}

	const onCloseModal = () => {
		setModalOpen(false)
	}

	return {
		modalOpen,
		onOpenModal,
		onCloseModal
	}
}
