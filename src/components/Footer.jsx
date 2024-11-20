import FacebookIcon from './Icons/FacebookIcon.jsx'
import GithubIcon from './Icons/GithubIcon.jsx'
import GmailIcon from './Icons/GmailIcon.jsx'
import LinkedInIcon from './Icons/LinkedInIcon.jsx'
import TwitterIcon from './Icons/TwitterIcon.jsx'
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
							<Link href="">Publish</Link>
						</li>
						<li>
							<Link href="">Developer</Link>
						</li>
						<li>
							<Link href="">Report error</Link>
						</li>
					</ul>
					<ul>
						<li>
							<strong>Other services</strong>
						</li>
						<li>
							<Link href="">Web design</Link>
						</li>
						<li>
							<Link href="">Landing page</Link>
						</li>
						<li>
							<Link href="">Logo design</Link>
						</li>
					</ul>
				</article>
				<aside>
					<p>Follow:</p>
					<ul>
						<li>
							<a href="https://x.com/Lachy9716929882">
								<TwitterIcon />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/lazaro.parra.583/">
								<FacebookIcon />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/lazaro-parra-gonzalez-47b55628a/">
								<LinkedInIcon />
							</a>
						</li>
						<li>
							<a href="mailto:lachy200408@gmail.com">
								<GmailIcon />
							</a>
						</li>
						<li>
							<a href="https://github.com/Lachy200408/Bookland">
								<GithubIcon />
							</a>
						</li>
					</ul>
				</aside>
			</section>
		</footer>
	)
}
