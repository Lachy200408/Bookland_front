import { BUTTON_TYPES } from '/src/constants/button-types.js'
import Button from '/src/components/common/Button.jsx'
import XMarkIcon from '/src/components/icons/XMarkIcon.jsx'
import ArchiveIcon from '/src/components/icons/ArchiveIcon.jsx'
import EmptyArchiveIcon from '/src/components/icons/EmptyArchiveIcon.jsx'
import '/src/styles/BookForm.css'

export default function CreateBookForm({
	onCloseModal,
	onSubmit,
	onFileChange,
	files,
	updateFiles,
	loading,
	error
}) {
	return (
		<dialog className="bookDialog" open={true}>
			<Button className="close-button" onClick={onCloseModal}>
				<XMarkIcon />
			</Button>
			<form className="bookForm" onSubmit={onSubmit} aria-disabled={loading}>
				<label htmlFor="title">
					Title:
					<input type="text" name="title" id="title" required />
				</label>
				<label htmlFor="author">
					Author:
					<input type="text" name="author" id="author" />
				</label>
				<label htmlFor="description">
					Description:
					<textarea name="description" id="description" maxLength="256" />
				</label>
				<label htmlFor="book">
					<span className="icon">
						{files && files.length > 0 ? <ArchiveIcon /> : <EmptyArchiveIcon />}
					</span>
					<span>
						{files && files.length > 0
							? 'The file has been loaded'
							: 'Upload your book'}
					</span>
					<input
						type="file"
						onChange={onFileChange}
						name="book"
						id="book"
						accept=".pdf, .epub, .doc, .docx"
					/>
				</label>
				<Button>Create</Button>
			</form>
			{error && <p className="error">{error}</p>}
			{files && files.length > 0 && (
				<footer className="bookFileViewer">
					<p>File name: {files[0].name}</p>
					<Button
						onClick={() => updateFiles(null)}
						type={BUTTON_TYPES.SECONDARY}
					>
						Remove file
					</Button>
				</footer>
			)}
		</dialog>
	)
}
