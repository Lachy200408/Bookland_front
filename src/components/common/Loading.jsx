import '/src/styles/Loading.css'

export default function Loading({ children, className }) {
	return (
		<p className={'loading' + (className ? ' ' + className : '')}>
			{children}
			<span className="loader" />
		</p>
	)
}
