import BackgroundGridContainer from './BackgroundGrids.jsx'
import '../../styles/CommonSection.css'

export default function CommonSection({ className = '', children }) {
	return (
		<section className={'common-section ' + className}>
			{children}
			<BackgroundGridContainer />
		</section>
	)
}
