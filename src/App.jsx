import Feedback from './components/Feedback.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { useNavigateContext } from './contexts/navigateContext.js'

function App() {
	const { route, page: Page } = useNavigateContext()

	return (
		<>
			<Header />
			<Feedback />
			<main>
				<Page />
			</main>
			{route !== '/auth' && <Footer />}
		</>
	)
}

export default App
