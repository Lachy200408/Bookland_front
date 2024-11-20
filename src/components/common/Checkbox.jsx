import CheckIcon from '/src/components/icons/CheckIcon.jsx'
import '/src/styles/Checkbox.css'

export default function Checkbox({ id, checked, onChange }) {
	return (
		<label className="checkbox">
			{checked && (
				<span className="check-icon">
					<CheckIcon />
				</span>
			)}
			<input
				type="checkbox"
				name={id}
				id={id}
				onChange={onChange}
				checked={checked}
				hidden
			/>
		</label>
	)
}
