export const download = ({ name, blob }) => {
	const link = document.createElement('a')
	link.href = URL.createObjectURL(blob)
	link.download = name
	link.click()
	URL.revokeObjectURL(link.href)
}
