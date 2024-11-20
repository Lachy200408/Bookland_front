import MainContainer from '../components/routes/MainContainer'
import About from '../components/routes/About'
import Social from '../components/routes/Social'
import Auth from '../components/routes/Auth'
import Store from '../components/routes/Store'
import HomeIcon from '../components/icons/HomeIcon'
import AboutIcon from '../components/icons/AboutIcon'
import StoreIcon from '../components/icons/StoreIcon'
import SocialIcon from '../components/icons/SocialIcon'

export const routes = [
	{
		href: '/',
		text: 'Home',
		icon: HomeIcon,
		component: MainContainer
	},
	{
		href: '/about',
		text: 'About',
		icon: AboutIcon,
		component: About
	},
	{
		href: '/social',
		text: 'Social',
		icon: SocialIcon,
		component: Social
	},
	{
		href: '/store',
		text: 'Store',
		icon: StoreIcon,
		component: Store
	},
	{
		href: '/auth',
		text: 'Auth',
		icon: null,
		component: Auth
	}
]
