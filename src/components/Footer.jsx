import FacebookIcon from './icons/FacebookIcon.jsx'
import GithubIcon from './icons/GithubIcon.jsx'
import GmailIcon from './icons/GmailIcon.jsx'
import LinkedInIcon from './icons/LinkedInIcon.jsx'
import TwitterIcon from './icons/TwitterIcon.jsx'
import Link from './common/Link.jsx'
import '/src/styles/Footer.css'

export default function Footer() {
	return (
		<footer className="footer">
			<header>
				<h1>
					<Link href="/">Bookland</Link>
				</h1>
				<small>@2024 - By Lázaro Parra</small>
			</header>
			<section className="footer-menu">
				<article>
					<ul>
						<li>
							<strong>Getting started</strong>
						</li>
						<li>
							<Link href="/auth">Sign up</Link>
						</li>
						<li>
							<Link href="/auth">Login</Link>
						</li>
						<li>
							<Link href="/auth">Logout</Link>
						</li>
					</ul>
					<ul>
						<li>
							<strong>Documentation</strong>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/docs">Docs</Link>
						</li>
						<li>
							<Link href="/api">API</Link>
						</li>
					</ul>
					<ul>
						<li>
							<strong>Contribution</strong>
						</li>
						<li>
							<Link href="mailto:lachy200408@gmail.com">Publish</Link>
						</li>
						<li>
							<Link href="https://lazaroparradev.onrender.com" target="_blank">
								Developer
							</Link>
						</li>
						<li>
							<Link href="mailto:lachy200408@gmail.com">Report error</Link>
						</li>
					</ul>
					<ul>
						<li>
							<strong>Other services</strong>
						</li>
						<li>
							<Link
								href="https://lazaroparradev.onrender.com/#contact"
								target="_blank"
							>
								Web design
							</Link>
						</li>
						<li>
							<Link
								href="https://lazaroparradev.onrender.com/#contact"
								target="_blank"
							>
								Landing page
							</Link>
						</li>
						<li>
							<Link
								href="https://lazaroparradev.onrender.com/#contact"
								target="_blank"
							>
								Logo design
							</Link>
						</li>
					</ul>
				</article>
				<aside>
					<p>Follow:</p>
					<ul>
						<li>
							<a href="https://x.com/Lachy9716929882" target="_blank">
								<TwitterIcon />
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/lazaro.parra.583/"
								target="_blank"
							>
								<FacebookIcon />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/lazaro-parra-gonzalez-47b55628a/"
								target="_blank"
							>
								<LinkedInIcon />
							</a>
						</li>
						<li>
							<a href="mailto:lachy200408@gmail.com" target="_blank">
								<GmailIcon />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/Lachy200408/Bookland_front"
								target="_blank"
							>
								<GithubIcon />
							</a>
						</li>
					</ul>
				</aside>
			</section>
		</footer>
	)
}
