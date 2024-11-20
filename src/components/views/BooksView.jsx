import Checkbox from '../common/Checkbox.jsx'
import '../../styles/BooksView.css'

export default function BooksView({ books, selectedBooks, onSelectBook }) {
	const onCheckboxChange = (id) => {
		const thereIsBookChecked = selectedBooks.includes(id)

		if (thereIsBookChecked) {
			onSelectBook(selectedBooks.filter((book) => book !== id))
		} else {
			onSelectBook([...selectedBooks, id])
		}
	}

	return (
		<ul className="book-table">
			<ul className="book-table-header">
				<li></li>
				<li>Title</li>
				<li>Author</li>
				<li>Description</li>
				<li>File Name</li>
			</ul>
			{books.map((book) => (
				<ul className="book-table-row" key={book.bookid}>
					<li>
						<Checkbox
							id={book.bookid}
							checked={selectedBooks.includes(book.bookid)}
							onChange={() => onCheckboxChange(book.bookid)}
						/>
					</li>
					<li className="book-title">{book.title}</li>
					<li className="book-author">{book.author}</li>
					<li className="book-description">{book.description}</li>
					<li className="book-filename">{book.filename}</li>
				</ul>
			))}
			<ul className="book-table-row book-table-footer">
				<li>footer</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</ul>
	)
}
