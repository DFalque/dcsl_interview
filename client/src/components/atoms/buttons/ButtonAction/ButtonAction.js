import "./ButtonAction.scss"

function ButtonAction(props) {
	const { text, click, type } = props
	return (
		<button onClick={() => click()} className={`ButtonAction ${type} `}>
			{text}
		</button>
	)
}

export default ButtonAction
