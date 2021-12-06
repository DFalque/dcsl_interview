import "./Header.scss"
function Header(props) {
	const { click } = props

	return (
		<div className="Header">
			<h1 className="heading-primary--sub">Our Products</h1>
			<button onClick={() => click()} className="Header__button">
				+ Add
			</button>
		</div>
	)
}

export default Header
