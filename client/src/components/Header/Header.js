import ButtonAction from "../atoms/buttons/ButtonAction/ButtonAction"
import "./Header.scss"
function Header(props) {
	const { click, title, titleButton } = props

	return (
		<div className="Header">
			<h1 className="heading-primary--sub">{title}</h1>
			<ButtonAction click={click} text={titleButton} type="sub" />
		</div>
	)
}

export default Header
