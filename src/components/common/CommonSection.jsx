import BackgroundGridContainer from '/src/components/common/BackgroundGrids.jsx'
import '/src/styles/CommonSection.css'

export default function CommonSection({ className = '', children }) {
	return (
		<section className={'common-section ' + className}>
			{children}
			<BackgroundGridContainer />
		</section>
	)
}
