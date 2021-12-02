import "./Nav.scss"

const Nav = () => {
	return (
		<nav className="Nav">
			<div className="Nav__left">
				<div className="Nav__left--logo" />
			</div>
			<div className="Nav__right">
				<lu className="Nav__right__list">
					<li>Colección</li>
					<li>Catálogo</li>
					<li>Marcas</li>
					<li>Idioma</li>
				</lu>
			</div>
		</nav>
	)
}

export default Nav
