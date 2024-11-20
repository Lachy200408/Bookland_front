import Landing from './Landing.jsx'
import Dashboard from './Dashboard.jsx'
import { useSessionContext } from '../../contexts/sessionContext.js'

export default function MainContainer() {
	const {
		session: { active }
	} = useSessionContext()

	return active ? <Dashboard /> : <Landing />
}
