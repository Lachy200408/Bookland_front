import CommonSection from '/src/componentscommon/CommonSection.jsx'
import Loading from '/src/componentscommon/Loading.jsx'
import InformationHeader from '/src/componentscommon/InformationHeader.jsx'
import Link from '/src/componentscommon/Link.jsx'
import SocialList from '/src/componentscommon/SocialList.jsx'
import { useEffect } from 'react'
import { useGetSocialUsers } from '/src/hooks/useApiUser.js'
import { useNotificationContext } from '/src/contexts/notificationContext.js'
import { useSessionContext } from '/src/contexts/sessionContext.js'
import '/src/styles/Social.css'

export default function Social() {
	const { addNotification } = useNotificationContext()
	const { session } = useSessionContext()
	const {
		fetching: getSocialUsers,
		data: socialData,
		loading: socialLoading,
		error: socialError
	} = useGetSocialUsers()

	useEffect(() => {
		if (!session || !session.active) return
		getSocialUsers()
	}, [])

	useEffect(() => {
		if (socialError && socialError.error && socialError.status !== 401) {
			addNotification('An error has occurred: ' + socialError.error.message)
		}
	}, [socialError])

	return (
		<CommonSection className="social-section">
			<InformationHeader classname="social-header">
				<p>
					Find other users using this app, get in touch with them and share your
					experience
				</p>
			</InformationHeader>
			<article className="social-grid">
				{!session || !session.active ? (
					<aside className="social-no-session-error">
						<p>You must be logged in first</p>
						<Link href="/auth" className="btn-link">
							Log in
						</Link>
					</aside>
				) : (
					<>
						{socialError && socialError.error && (
							<p>An error has occurred: {socialError.error.message}</p>
						)}
						{socialLoading && <Loading>Loading users...</Loading>}
						{socialData && socialData.length > 0 && (
							<SocialList users={socialData} />
						)}
						{socialData && socialData.length === 0 && <p>No users found</p>}
					</>
				)}
			</article>
		</CommonSection>
	)
}
