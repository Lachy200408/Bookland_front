import Landing from '/src/components/routes/Landing.jsx'
import Dashboard from '/src/components/routes/Dashboard.jsx'
import { useSessionContext } from '/src/contexts/sessionContext.js'

export default function MainContainer() {
	const {
		session: { active }
	} = useSessionContext()

	return active ? <Dashboard /> : <Landing />
}
