import MainContainer from '/src/components/routes/MainContainer'
import About from '/src/components/routes/About'
import Social from '/src/components/routes/Social'
import Auth from '/src/components/routes/Auth'
import Store from '/src/components/routes/Store'
import HomeIcon from '/src/components/icons/HomeIcon'
import AboutIcon from '/src/components/icons/AboutIcon'
import StoreIcon from '/src/components/icons/StoreIcon'
import SocialIcon from '/src/components/icons/SocialIcon'

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
