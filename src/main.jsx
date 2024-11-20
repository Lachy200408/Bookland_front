import { createRoot } from 'react-dom/client'
import NavigateProvider from '/src/providers/NavigateProvider.jsx'
import NotificationProvider from '/src/providers/NotificationProvider.jsx'
import SessionProvider from '/src/providers/SessionProvider.jsx'
import App from '/src/App.jsx'
import '/src/styles/index.css'

createRoot(document.getElementById('root')).render(
	<SessionProvider>
		<NotificationProvider>
			<NavigateProvider>
				<App />
			</NavigateProvider>
		</NotificationProvider>
	</SessionProvider>
)
