import "./Nav.scss"
import { ReactComponent as ReactLogo } from "../../assets/img/logo_big.svg"

const Nav = () => {
	return (
		<nav className="Nav">
			<div className="Nav__left">
				<div className="Nav__left--logo" />
			</div>
			<div className="Nav__right">
				<lu className="Nav__right__list">
					<li>Tienda</li>
					<li>Tienda</li>
				</lu>
			</div>
		</nav>
	)
}

export default Nav
