import CommonSection from '/src/components/common/CommonSection.jsx'
import Button from '/src/components/common/Button.jsx'
import { ERRORS } from '/src/constants/errors.js'
import { BUTTON_TYPES } from '/src/constants/button-types.js'
import { MESSAGES } from '/src/constants/messages.js'
import { useNotificationContext } from '/src/contexts/notificationContext.js'
import { useSessionContext } from '/src/contexts/sessionContext.js'
import { useLogin, useRegister, useLogout } from '/src/hooks/useAuth.js'
import { useEffect, useRef, useState } from 'react'
import '/src/styles/Auth.css'

export default function Auth() {
	const username = useRef()
	const password = useRef()
	const [formRegister, setFormRegister] = useState(false)
	const { addNotification } = useNotificationContext()
	const { session, logout: sessionLogout, updateSession } = useSessionContext()
	const {
		fetching: login,
		data: loginData,
		error: loginError,
		loading: loginLoading
	} = useLogin()
	const {
		fetching: register,
		data: registerData,
		error: registerError,
		loading: registerLoading
	} = useRegister()
	const { logout: serverLogout } = useLogout()

	useEffect(() => {
		if (!loginData) return
		updateSession(loginData)
		addNotification(MESSAGES.LOGIN_SUCCESS)
	}, [loginData])

	useEffect(() => {
		if (!registerData) return
		login({
			body: {
				username: username.current.value,
				password: password.current.value
			}
		})
		addNotification(MESSAGES.REGISTER_SUCCESS)
	}, [registerData])

	useEffect(() => {
		if (loginError && loginError.error)
			return addNotification(loginError.error.message)
		if (loginError && !loginError?.error)
			return addNotification(ERRORS.CONNECTION)
		if (registerError && registerError.error)
			return addNotification(registerError.error.message)
		if (registerError && !registerError?.error)
			return addNotification(ERRORS.CONNECTION)
	}, [loginError, registerError])

	const switchForm = () => {
		setFormRegister((prevState) => !prevState)
	}

	const onSubmit = (event) => {
		event.preventDefault()

		if (!formRegister) {
			login({
				body: {
					username: username.current.value,
					password: password.current.value
				}
			})
		} else {
			register({
				body: {
					username: username.current.value,
					email: event.target.email.value,
					password: password.current.value
				}
			})
		}
	}

	const onLogout = () => {
		serverLogout()
		sessionLogout()
	}

	return (
		<CommonSection className="auth-container">
			<div className="auth-form">
				<hgroup>
					<h3>Bookland</h3>
					<h5>Online Library</h5>
				</hgroup>
				{!session.active ? (
					<>
						<form
							onSubmit={onSubmit}
							aria-disabled={loginLoading || registerLoading}
							method="POST"
						>
							<p>
								{formRegister
									? 'Register a new user'
									: 'Loggin in your account'}
							</p>
							<div>
								<label>
									Username:
									<input
										type="text"
										ref={username}
										name="username"
										id="username"
										minLength="3"
										maxLength="20"
										placeholder="The name you will be identified with"
										required
									/>
								</label>
								{formRegister && (
									<label>
										Email:
										<input
											type="email"
											name="email"
											id="email"
											placeholder="Your preferred email address"
											required
										/>
									</label>
								)}
								<label>
									Password:
									<input
										type="password"
										ref={password}
										name="password"
										id="password"
										minLength="8"
										maxLength="20"
										placeholder="A secure and unique password"
										required
									/>
								</label>
							</div>
							<Button>
								{loginLoading || registerLoading ? 'Loading' : 'Submit'}
							</Button>
						</form>
						<Button onClick={switchForm} type={BUTTON_TYPES.TERTIARY}>
							<small>
								{formRegister
									? 'Do you have already an account?'
									: 'Are you not registered yet?'}
							</small>
						</Button>
					</>
				) : (
					<>
						<p>You are already logged in</p>
						<Button onClick={onLogout}>Logout</Button>
					</>
				)}
			</div>
		</CommonSection>
	)
}
