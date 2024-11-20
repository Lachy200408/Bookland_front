import { createRoot } from 'react-dom/client'
import NavigateProvider from './providers/NavigateProvider.jsx'
import NotificationProvider from './providers/NotificationProvider.jsx'
import SessionProvider from './providers/SessionProvider.jsx'
import App from './App.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
	<SessionProvider>
		<NotificationProvider>
			<NavigateProvider>
				<App />
			</NavigateProvider>
		</NotificationProvider>
	</SessionProvider>
)
