import CommonSection from '../common/CommonSection.jsx'
import Link from '../common/Link.jsx'
import '../../styles/About.css'

export default function About() {
	return (
		<CommonSection className="about-container">
			<article className="about-main">
				<hgroup className="about-header">
					<h1>Bookland</h1>
					<h4>Discover a bigger world</h4>
				</hgroup>
				<p className="about-description">
					This website is where you will{' '}
					<strong className="highlight">upload</strong>,{' '}
					<strong className="highlight">store</strong>,{' '}
					<strong className="highlight">share</strong>, and{' '}
					<strong className="highlight">download</strong> as many books as you
					want. This solution is optimized for giving you the best experience
					possible and a high level of security.{' '}
					<Link href={'/auth'}>
						<span>Sign up</span>
					</Link>{' '}
					and start sharing books with your friends.
				</p>
				<div className="down-light">
					<div />
				</div>
			</article>
		</CommonSection>
	)
}
