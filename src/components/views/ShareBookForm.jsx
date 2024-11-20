import Button from '../common/Button.jsx'
import XMarkIcon from '../icons/XMarkIcon.jsx'
import SocialList from '../common/SocialList.jsx'
import Loading from '../common/Loading.jsx'
import { useGetSocialUsers } from '../../hooks/useApiUser.js'
import { useEffect, useState } from 'react'
import '../../styles/BookForm.css'

export default function ShareBookForm({ onCloseModal, onSubmit }) {
	const [selected, setSelected] = useState()
	const { fetching, data, loading, error } = useGetSocialUsers()

	useEffect(() => {
		fetching()
	}, [])

	return (
		<dialog className="bookDialog" open={true}>
			<Button className="close-button" onClick={onCloseModal}>
				<XMarkIcon />
			</Button>
			{error && error.error && error.status !== 401 && (
				<p>An error has ocurred: {error.error.message}</p>
			)}
			{loading && <Loading>Loading users...</Loading>}
			{data && data.length > 0 && (
				<SocialList
					users={data}
					selectable={true}
					selected={selected}
					setSelected={setSelected}
				/>
			)}
			{data && data.length === 0 && <p>No users found</p>}
			<Button
				onClick={() => {
					onSubmit(selected)
					onCloseModal()
				}}
			>
				Share
			</Button>
		</dialog>
	)
}
