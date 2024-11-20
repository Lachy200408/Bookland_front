import '/src/styles/Button.css'

export default function Button({
	onClick = () => {},
	type,
	children,
	className = '',
	disabled = false
}) {
	const _className = `btn ${type === undefined ? 'primary' : type} ${className}`

	return (
		<button className={_className} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	)
}
