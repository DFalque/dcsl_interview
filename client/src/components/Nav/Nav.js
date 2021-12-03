import { Link } from "react-router-dom"
import "./Nav.scss"

const Nav = () => {
	return (
		<nav className="Nav">
			<div className="Nav__left">
				<Link to="/">
					<div className="Nav__left--logo" />
				</Link>
			</div>
			<div className="Nav__right">
				<lu className="Nav__right__list">
					<li>Colección</li>
					<Link
						to="/catalogue"
						style={{ textDecoration: "none", color: "black" }}
					>
						<li>Catálogo</li>
					</Link>
					<li>Marcas</li>
					<li>Idioma</li>
				</lu>
			</div>
		</nav>
	)
}

export default Nav
