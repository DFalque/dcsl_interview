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
				<ul className="Nav__right__list">
					<Link to="/" className="Nav__right__list__link">
						<li>Home</li>
					</Link>
					<Link to="/catalog" className="Nav__right__list__link">
						<li>Catalog</li>
					</Link>
					<Link to="/catalog" className="Nav__right__list__link">
						<li>Brand</li>
					</Link>
				</ul>
			</div>
		</nav>
	)
}

export default Nav
