import { BOOKS_URL, BOOKS_PAGES } from '/src/constants/resources-url.js'
import { BUTTON_TYPES } from '/src/constants/button-types.js'
import { ERRORS } from '/src/constants/errors.js'
import CommonSection from '/src/components/common/CommonSection.jsx'
import Link from '/src/components/common/Link.jsx'
import Button from '/src/components/common/Button.jsx'
import Loading from '/src/components/common/Loading.jsx'
import InformationHeader from '/src/components/common/InformationHeader.jsx'
import { useEffect, useState } from 'react'
import { useNotificationContext } from '/src/contexts/notificationContext.js'
import { useStoreBooks } from '/src/hooks/useStoreBooks.js'
import '/src/styles/Store.css'

export default function Store() {
	const [page, setPage] = useState(1)
	const [search, setSearch] = useState('')
	const { addNotification } = useNotificationContext()
	const {
		data: booksData,
		loading: booksLoading,
		error: booksError,
		getStoreBooks
	} = useStoreBooks()

	const pagesQuantity = BOOKS_PAGES.length

	useEffect(() => {
		getStoreBooks({ url: BOOKS_PAGES[page - 1].url })
	}, [page])

	useEffect(() => {
		if (!booksError) return
		addNotification(ERRORS.CONNECTION)
	}, [booksError])

	const filteredBooks = booksData
		? booksData.filter((book) =>
				book.toLowerCase().includes(search.toLowerCase())
			)
		: []

	return (
		<CommonSection className="store-container">
			<section className="store-main">
				<InformationHeader>
					<p>
						Browse through our book&apos;s store, and download them for free!
					</p>
					<Link href="" className="store-header-link">
						Do you want to collaborate or publish your own books?
					</Link>
				</InformationHeader>
				<article className="store-books">
					<search className="store-search">
						<label>
							Find a book:
							<input
								type="text"
								placeholder="Search..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</label>
					</search>
					{booksError && (
						<p>
							It is not possible to get the store&apos;s books. Check your
							connection.
						</p>
					)}
					{booksLoading && <Loading>Loading books...</Loading>}
					{booksData && (
						<ul className="store-books-list">
							{filteredBooks.map((book) => (
								<li className="store-book" key={book}>
									<Link
										href={BOOKS_URL + '/' + book}
										download={book}
										target="_blank"
										className="store-book-link"
									>
										{book}
									</Link>
								</li>
							))}
						</ul>
					)}
				</article>
				<footer className="store-footer">
					<Button
						type={BUTTON_TYPES.SECONDARY}
						onClick={() =>
							setPage((prevPage) => (prevPage === 1 ? prevPage : prevPage - 1))
						}
					>
						Prev
					</Button>
					<p>
						<strong>{page}</strong> of {pagesQuantity}
					</p>
					<Button
						type={BUTTON_TYPES.SECONDARY}
						onClick={() =>
							setPage((prevPage) =>
								prevPage === pagesQuantity ? prevPage : prevPage + 1
							)
						}
					>
						Next
					</Button>
				</footer>
			</section>
		</CommonSection>
	)
}
