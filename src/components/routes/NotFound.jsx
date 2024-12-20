import CommonSection from '../common/CommonSection.jsx'
import Link from '../common/Link.jsx'
import '../../styles/NotFound.css'

export default function NotFound() {
	return (
		<CommonSection className="not-found-container">
			<article className="not-found-main">
				<hgroup>
					<h1>404</h1>
					<h4>Page not found</h4>
				</hgroup>
				<p className="not-found-description">
					The page you are looking for does not exist
				</p>
				<Link href="/" className="btn-link">
					Return to home
				</Link>
			</article>
		</CommonSection>
	)
}
