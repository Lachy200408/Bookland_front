import { IMAGES_URL } from '/src/constants/resources-url.js'
import Link from '/src/components/common/Link.jsx'
import UserIcon from '/src/components/icons/UserIcon.jsx'
import SendingMsg from '/src/components/icons/SendingMsg.jsx'
import CommonSection from '/src/components/common/CommonSection.jsx'
import '/src/styles/Landing.css'

export default function Landing() {
	return (
		<>
			<CommonSection>
				<div className="ball" />
				<article className="landing-header">
					<picture>
						<img
							src={IMAGES_URL + '/webp/landing-background.webp'}
							alt="Landing photo"
						/>
					</picture>
					<hgroup>
						<h1>Bookland</h1>
						<h4>Discover a bigger world</h4>
					</hgroup>
				</article>
				<Link className="btn-link" href="/auth">
					Get started
				</Link>
			</CommonSection>
			<CommonSection>
				<article>
					<picture className="book-covers">
						<img
							src={IMAGES_URL + '/webp/one-thousand-and-one-nights.webp'}
							alt="Book-1"
						/>
						<img src={IMAGES_URL + '/webp/1984.webp'} alt="Book-2" />
						<img
							src={IMAGES_URL + '/webp/crime-and-punishment.webp'}
							alt="Book-3"
						/>
					</picture>
					<picture className="background-map">
						<img
							src={IMAGES_URL + '/svg/background-map.svg'}
							alt="Background map"
						/>
						<img
							src={IMAGES_URL + '/svg/background-map.svg'}
							alt="Background map"
						/>
					</picture>
					<hgroup>
						<h1>Explore</h1>
						<h4>our book collections</h4>
					</hgroup>
				</article>
			</CommonSection>
			<CommonSection>
				<article className="sending-message">
					<UserIcon className="user-icon" />
					<SendingMsg className="sending-icon" />
					<UserIcon className="user-icon" />
					<hgroup>
						<h1>Share</h1>
						<h4>books with your friends</h4>
					</hgroup>
				</article>
				<Link className="btn-link" href="/auth">
					Get started
				</Link>
			</CommonSection>
		</>
	)
}
