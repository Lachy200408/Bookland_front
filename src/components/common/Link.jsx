import '/src/styles/Link.css'
import { navigate } from '/src/utils/navigate.js'

export default function Link({ target, href, ...props }) {
	const handleClick = (event) => {
		const isMainEvent = event.button === 0
		const isModifiedEvent =
			event.metaKey || event.crtlKey || event.altKey || event.shiftKey
		const isManageableEvent = target === undefined || target === '_self'

		if (isMainEvent && isManageableEvent && !isModifiedEvent) {
			event.preventDefault()
			navigate(href)
		}
	}

	return <a onClick={handleClick} href={href} target={target} {...props} />
}
