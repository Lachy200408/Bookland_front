import { useNotificationContext } from '../contexts/notificationContext.js'
import XMarkIcon from './icons/XMarkIcon.jsx'
import '../styles/Feedback.css'

export default function Feedback() {
	const { notifications, removeNotification } = useNotificationContext()

	return (
		<div className="feedback-container">
			<ul className="feedback-list">
				{notifications.map(({ text, id }) => (
					<li key={id} className="feedback-item">
						<span>{text}</span>
						<button
							onClick={() => {
								removeNotification(id)
							}}
							className="close-button"
						>
							<XMarkIcon />
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
