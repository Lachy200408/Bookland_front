import Button from '../common/Button.jsx'
import XMarkIcon from '../icons/XMarkIcon.jsx'
import '../../styles/BookForm.css'

export default function EditBookForm({
	onCloseModal,
	onSubmit,
	loading,
	book
}) {
	return (
		<dialog className="bookDialog" open={true}>
			<Button className="close-button" onClick={onCloseModal}>
				<XMarkIcon />
			</Button>
			<form className="bookForm" onSubmit={onSubmit} aria-disabled={loading}>
				<label htmlFor="title">
					Title:
					<input type="text" name="title" id="title" placeholder={book.title} />
				</label>
				<label htmlFor="author">
					Author:
					<input
						type="text"
						name="author"
						id="author"
						placeholder={book.author}
					/>
				</label>
				<label htmlFor="description">
					Description:
					<textarea
						name="description"
						id="description"
						maxLength="256"
						placeholder={book.description}
					/>
				</label>
				<Button>Edit</Button>
			</form>
		</dialog>
	)
}
