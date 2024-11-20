import { EVENTS } from '/src/constants/events.js'

export const navigate = (url) => {
	window.history.pushState({}, '', url)
	const pushEvent = new Event(EVENTS.PUSH)
	window.dispatchEvent(pushEvent)
}
