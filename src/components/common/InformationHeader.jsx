import '../../styles/InformationHeader.css'

export default function InformationHeader({ children, classname }) {
	return (
		<header
			className={'information-header' + (classname ? ' ' + classname : '')}
		>
			{children}
		</header>
	)
}
