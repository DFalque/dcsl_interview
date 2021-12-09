import "./ButtonBorder.scss"

function ButtonBorder(props) {
	const { click, text, type, size } = props

	return (
		<button className={`ButtonBorder ${type} ${size} `} onClick={() => click()}>
			{text}
		</button>
	)
}

export default ButtonBorder
