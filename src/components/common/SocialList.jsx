import { AVATARS } from '../../constants/avatars.js'
import Checkbox from '../common/Checkbox.jsx'
import '../../styles/SocialList.css'

export default function SocialList({
	users,
	selectable = false,
	selected,
	setSelected
}) {
	return (
		<ul className="social-list">
			{users.map((user) => {
				const Avatar = AVATARS[user.avatarname]

				return (
					<li key={user.userid} className="social-item">
						<figure className="social-item-img">
							<Avatar />
						</figure>
						<hgroup className="social-item-info">
							<h3>{user.username}</h3>
						</hgroup>
						{selectable && (
							<Checkbox
								id={user.userid}
								checked={selected?.userid === user.userid}
								onChange={() =>
									setSelected({
										userid: user.userid
									})
								}
							/>
						)}
					</li>
				)
			})}
		</ul>
	)
}
