import { BUTTON_TYPES } from '../../constants/button-types.js'
import CommonSection from '../common/CommonSection.jsx'
import Button from '../common/Button.jsx'
import Loading from '../common/Loading.jsx'
import Checkbox from '../common/Checkbox.jsx'
import BooksView from '../views/BooksView.jsx'
import CreateBookForm from '../views/CreateBookForm.jsx'
import EditBookForm from '../views/EditBookForm.jsx'
import ShareBookForm from '../views/ShareBookForm.jsx'
import ReturnIcon from '../icons/ReturnIcon.jsx'
import DownloadIcon from '../icons/DownloadIcon.jsx'
import EditingIcon from '../icons/EditingIcon.jsx'
import DeleteIcon from '../icons/DeleteIcon.jsx'
import ShareIcon from '../icons/ShareIcon.jsx'
import AddBookIcon from '../icons/AddBookIcon.jsx'
import {
	useAllBooks,
	useCreateBook,
	useDeleteBook,
	useDownloadBook,
	useEditBook,
	useUploadBook,
	useAllSharedBooks,
	useShareBook,
	useDeleteSharedBook
} from '../../hooks/useApiBooks.js'
import { useEffect, useState } from 'react'
import {
	useAddBookForm,
	useEditBookForm,
	useShareBookForm
} from '../../hooks/useBookForm.js'
import { useRemovedBooks } from '../../hooks/useRemovedBooks.js'
import { useNotificationContext } from '../../contexts/notificationContext.js'
import { download } from '../../utils/download.js'
import '../../styles/Dashboard.css'

export default function Dashboard() {
	const { addNotification } = useNotificationContext()
	const [selectedBooks, setSelectedBooks] = useState([])
	const { removedBooks, addRemovedBook, revertRemovedBook } = useRemovedBooks()
	const [booksOrShared, setBooksOrShared] = useState(true)
	const {
		fetching: getAllBooks,
		data: allBooksData,
		error: allBooksError,
		loading: allBooksLoading
	} = useAllBooks()
	const {
		fetching: createBook,
		data: createBookData,
		error: createBookError,
		loading: createBookLoading
	} = useCreateBook()
	const {
		fetching: editBook,
		data: editBookData,
		error: editBookError,
		loading: editBookLoading
	} = useEditBook()
	const {
		fetching: deleteBook,
		data: deleteBookData,
		error: deleteBookError,
		loading: deleteBookLoading
	} = useDeleteBook()
	const { uploadBook } = useUploadBook()
	const {
		fetching: downloadBook,
		data: downloadBookData,
		error: downloadBookError,
		loading: downloadBookLoading
	} = useDownloadBook()
	const {
		fetching: getAllSharedBooks,
		data: sharedBooksData,
		error: sharedBooksError,
		loading: sharedBooksLoading
	} = useAllSharedBooks()
	const {
		fetching: shareBook,
		data: sharingBookData,
		loading: sharingBookLoading,
		error: sharingBookError
	} = useShareBook()
	const {
		fetching: deleteSharedBook,
		data: deletedSharedBookData,
		error: deletedSharedBookError,
		loading: deletedSharedBookLoading
	} = useDeleteSharedBook()
	const {
		modalOpen: createModalOpen,
		onOpenModal: onOpenCreateModal,
		onCloseModal: onCloseCreateModal,
		fileInput: createFileInput,
		setFileInput: setCreateFileInput,
		fileInputError: createFileInputError,
		onFileChange: onCreateFileChange,
		onSubmit: onCreateSubmit
	} = useAddBookForm({ onUpload: uploadBook, onCreate: createBook })
	const {
		modalOpen: editModalOpen,
		onOpenModal: onOpenEditModal,
		onCloseModal: onCloseEditModal,
		onSubmit: onEditSubmit
	} = useEditBookForm({ onEdit: editBook })
	const {
		modalOpen: shareModalOpen,
		onOpenModal: onOpenShareModal,
		onCloseModal: onCloseShareModal
	} = useShareBookForm()

	const errorArray = [
		allBooksError,
		createBookError,
		editBookError,
		deleteBookError,
		downloadBookError,
		sharedBooksError,
		sharingBookError,
		deletedSharedBookError
	]

	const finalBooks = booksOrShared ? allBooksData : sharedBooksData
	const finalBooksLoading = booksOrShared ? allBooksLoading : sharedBooksLoading
	const finalBooksQuantity = booksOrShared
		? allBooksData?.length
		: sharedBooksData?.length

	useEffect(() => {
		getAllBooks()
		getAllSharedBooks()
	}, [])

	useEffect(() => {
		errorArray.forEach((_error) => {
			if (_error && _error.error && _error.status !== 401)
				return addNotification('An error has ocurred: ' + _error.error.message)
		})
	}, errorArray)

	useEffect(() => {
		if (createBookData && createBookData.bookid) {
			addNotification(`Book created successfully`)
			getAllBooks()
		}
	}, [createBookData])

	useEffect(() => {
		if (editBookData && editBookData.bookid) {
			addNotification(`Book edited successfully`)
			getAllBooks()
		}
	}, [editBookData])

	useEffect(() => {
		if (deleteBookData && deleteBookData.bookid) {
			addNotification(`Book deleted successfully`)
			getAllBooks()
		}
	}, [deleteBookData])

	useEffect(() => {
		if (!downloadBookData) return

		const { name, blob } = downloadBookData

		download({ name, blob })
	}, [downloadBookData])

	useEffect(() => {
		setSelectedBooks([])
	}, [booksOrShared])

	useEffect(() => {
		if (sharingBookData && sharingBookData.bookid) {
			addNotification('Book shared successfully')
		}
	}, [sharingBookData])

	useEffect(() => {
		if (deletedSharedBookData && deletedSharedBookData.bookid) {
			addNotification('Shared book deleted successfully')
			getAllSharedBooks()
		}
	}, [deletedSharedBookData])

	const onShareBook = ({ userid }) => {
		shareBook({ body: { userid, bookid: selectedBooks[0] } })
	}

	const onDownloadBook = () => {
		const { fileid } = finalBooks.find(
			(book) => book.bookid === selectedBooks[0]
		)
		downloadBook({ params: fileid })
	}

	const onDeleteBook = () => {
		selectedBooks.forEach((id) => {
			addRemovedBook(allBooksData.find((book) => book.bookid === id))
			deleteBook({ params: id })
		})
		setSelectedBooks([])
	}

	const onRevertDeleteBook = () => {
		const array = revertRemovedBook()
		array.forEach((book) => {
			createBook({ body: book })
		})
	}

	const onDeleteSharedBook = () => {
		selectedBooks.forEach((id) => {
			deleteSharedBook({ params: id })
		})
		setSelectedBooks([])
	}

	return (
		<CommonSection className="dashboard-container">
			<div className="dashboard-main">
				{selectedBooks.length > 0 && (
					<aside className="dashboard-aside">
						<p>
							<strong>{selectedBooks.length}</strong> book
							{selectedBooks.length > 1 ? 's' : ''} selected
						</p>
						<Button
							onClick={onDownloadBook}
							type={BUTTON_TYPES.SECONDARY}
							disabled={selectedBooks.length > 1}
						>
							<span className="text">Download book</span>
							<span className="icon">
								<DownloadIcon />
							</span>
						</Button>
						{booksOrShared && (
							<Button
								onClick={onOpenEditModal}
								type={BUTTON_TYPES.SECONDARY}
								disabled={selectedBooks.length > 1}
							>
								<span className="text">Edit book</span>
								<span className="icon">
									<EditingIcon />
								</span>
							</Button>
						)}
						<Button
							onClick={booksOrShared ? onDeleteBook : onDeleteSharedBook}
							type={BUTTON_TYPES.SECONDARY}
						>
							<span className="text">
								Delete book{selectedBooks.length > 1 ? 's' : ''}
							</span>
							<span className="icon">
								<DeleteIcon />
							</span>
						</Button>
						<Button
							onClick={onOpenShareModal}
							type={BUTTON_TYPES.SECONDARY}
							disabled={selectedBooks.length > 1}
						>
							<span className="text">Share book</span>
							<span className="icon">
								<ShareIcon />
							</span>
						</Button>
					</aside>
				)}
				<article className="dashboard-viewer">
					<header className="dashboard-primary-options">
						<div>
							{booksOrShared && (
								<Button
									onClick={onOpenCreateModal}
									type={BUTTON_TYPES.SECONDARY}
								>
									<span className="text">Add book</span>
									<span className="icon">
										<AddBookIcon />
									</span>
								</Button>
							)}
						</div>
						<div>
							{finalBooks && (
								<p className="books-quantity">
									Books quantity: {finalBooksQuantity}
								</p>
							)}
						</div>
					</header>
					<div className="dashboard-books">
						{finalBooksLoading ? (
							<Loading>Loading books...</Loading>
						) : finalBooks ? (
							<BooksView
								books={finalBooks}
								selectedBooks={selectedBooks}
								onSelectBook={setSelectedBooks}
							/>
						) : (
							<p>It was not possible to find any books</p>
						)}
						<div className="books-data-selection">
							<form>
								<div>
									<p>My books</p>
									<Checkbox
										id={'my-books-check'}
										checked={booksOrShared}
										onChange={() => setBooksOrShared(true)}
									/>
								</div>
								<div>
									<p>Shared books</p>
									<Checkbox
										id={'shared-books-check'}
										checked={!booksOrShared}
										onChange={() => setBooksOrShared(false)}
									/>
								</div>
							</form>
						</div>
					</div>
				</article>
				<article className="loading-list">
					{removedBooks.length > 0 && (
						<p className="revert-delete-book-container">
							<strong>{removedBooks.length}</strong> book
							{removedBooks.length > 1 ? 's' : ''} has been deleted
							<span>
								<Button
									onClick={onRevertDeleteBook}
									type={BUTTON_TYPES.TERTIARY}
									className="revert-delete-book"
								>
									<ReturnIcon />
								</Button>
							</span>
						</p>
					)}
					{createBookLoading && <Loading>Creating a new book...</Loading>}
					{editBookLoading && <Loading>Editing a book...</Loading>}
					{deleteBookLoading && <Loading>Deleting a book...</Loading>}
					{downloadBookLoading && <Loading>Downloading a book...</Loading>}
					{sharingBookLoading && <Loading>Sharing a book...</Loading>}
					{deletedSharedBookLoading && (
						<Loading>Deleting a shared book...</Loading>
					)}
				</article>
			</div>
			{createModalOpen && (
				<CreateBookForm
					files={createFileInput}
					updateFiles={setCreateFileInput}
					loading={createBookLoading}
					error={createFileInputError}
					onCloseModal={onCloseCreateModal}
					onSubmit={onCreateSubmit}
					onFileChange={onCreateFileChange}
				/>
			)}
			{editModalOpen && (
				<EditBookForm
					loading={editBookLoading}
					onCloseModal={onCloseEditModal}
					onSubmit={(event) => onEditSubmit(event, selectedBooks[0])}
					book={allBooksData?.find((book) => book.bookid === selectedBooks[0])}
				/>
			)}
			{shareModalOpen && (
				<ShareBookForm
					onCloseModal={onCloseShareModal}
					onSubmit={onShareBook}
				/>
			)}
		</CommonSection>
	)
}
