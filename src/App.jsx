import Feedback from '/src/components/Feedback.jsx'
import Footer from '/src/components/Footer.jsx'
import Header from '/src/components/Header.jsx'
import { useNavigateContext } from '/src/contexts/navigateContext.js'

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
