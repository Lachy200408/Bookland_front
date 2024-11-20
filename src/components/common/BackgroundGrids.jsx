import BackgroundGrid from '../icons/BackgroundGrid'
import '/src/styles/BackgroundGrids.css'

export default function BackgroundGridContainer() {
	return (
		<figure className="background-grid-container">
			<BackgroundGrid className="background-grid" />
			<BackgroundGrid className="background-grid" />
			<BackgroundGrid className="background-grid" />
			<BackgroundGrid className="background-grid" />
		</figure>
	)
}
