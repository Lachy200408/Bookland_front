import { AVATAR_NAMES } from '../../constants/avatar-names.js'
import { AVATARS } from '../../constants/avatars.js'
import { BUTTON_TYPES } from '../../constants/button-types.js'
import { ERRORS } from '../../constants/errors.js'
import { useState } from 'react'
import { useSessionContext } from '../../contexts/sessionContext.js'
import { useNotificationContext } from '../../contexts/notificationContext.js'
import { useLogout } from '../../hooks/useAuth.js'
import { useUpdateAvatar, useUpdateProfile } from '../../hooks/useApiUser.js'
import Button from './Button.jsx'
import '../../styles/UserInfo.css'

export default function UserInfo() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [avatarMenuOpen, setAvatarMenuOpen] = useState(false)
	const [editMenuOpen, setEditMenuOpen] = useState(false)
	const { session, logout: sessionLogout, updateSession } = useSessionContext()
	const { addNotification } = useNotificationContext()
	const [avatarName, setAvatarName] = useState(
		session.user.avatarname || AVATAR_NAMES.USER
	)
	const { logout: serverLogout } = useLogout()
	const { updateAvatar } = useUpdateAvatar()
	const { updateProfile } = useUpdateProfile()

	const onOpenMenu = () => {
		if (menuOpen && avatarMenuOpen) {
			onOpenAvatarMenu()
		}
		if (menuOpen && editMenuOpen) {
			onOpenEditMenu()
		}
		setMenuOpen((prevState) => !prevState)
	}

	const onOpenAvatarMenu = () => {
		setAvatarMenuOpen((prevState) => !prevState)
	}

	const onChangeAvatar = (name) => {
		if (avatarName === name) return

		updateAvatar({ avatarname: name }).then((res) => {
			if (res.ok) setAvatarName(name)
			else addNotification(ERRORS.CONNECTION)
		})
	}

	const onOpenEditMenu = () => {
		setEditMenuOpen((prevState) => !prevState)
	}

	const onEditProfile = (event) => {
		event.preventDefault()
		const form = event.target
		const username = form.username.value

		if (!username) return
		if (username === session.user.username) return

		updateProfile({ username }).then((res) => {
			if (res.ok) {
				updateSession({ ...session.user, username })
				setEditMenuOpen(false)
				addNotification('Profile updated successfully')
			} else addNotification(ERRORS.CONNECTION)
		})
	}

	const onLogout = () => {
		serverLogout()
		sessionLogout()
	}

	const Avatar = AVATARS[avatarName]

	return (
		<>
			<div onClick={onOpenMenu} className="user-info user-info-area">
				<Avatar />
			</div>
			<div className="user-info-menus">
				{menuOpen && (
					<div className="user-info-menu user-info-area">
						<p className="user-info-area">Hi! {session.user.username}</p>
						<p className="user-info-area">Email: {session.user.email}</p>
						<div className="separator user-info-area" />
						<Button
							onClick={onOpenEditMenu}
							className="user-info-area"
							type={BUTTON_TYPES.TERTIARY}
						>
							Edit profile
						</Button>
						<Button
							onClick={onOpenAvatarMenu}
							className="user-info-area"
							type={BUTTON_TYPES.TERTIARY}
						>
							Change the avatar
						</Button>
						<Button
							onClick={onLogout}
							className="user-info-area"
							type={BUTTON_TYPES.SECONDARY}
						>
							Logout
						</Button>
					</div>
				)}
				{avatarMenuOpen && (
					<div className="user-info-avatar-menu">
						<ul>
							{[...Object.entries(AVATARS)].map(([key, value]) => {
								const Avatar = value

								return (
									<li key={key}>
										<div
											className="user-info-avatar-menu-item"
											onClick={() => onChangeAvatar(key)}
										>
											<Avatar key={key} />
										</div>
									</li>
								)
							})}
						</ul>
					</div>
				)}
				{editMenuOpen && (
					<div className="user-info-edit-menu">
						<p>Edit profile</p>
						<form onSubmit={onEditProfile}>
							<label>
								Username:
								<input
									type="text"
									name="username"
									id="username"
									minLength={3}
									maxLength={20}
								/>
							</label>
							<Button type={BUTTON_TYPES.TERTIARY}>Save</Button>
						</form>
					</div>
				)}
			</div>
		</>
	)
}
