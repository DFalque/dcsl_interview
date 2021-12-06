import "./Hero.scss"
import mainLogo from "../../assets/img/Blogger.png"
import { Link } from "react-router-dom"

function Hero(props) {
	return (
		<div className="Hero">
			<div className="Hero__shape left"></div>
			<div className="Hero__text">
				<h1>Welcome to your favorite phone catalog</h1>
				<div style={{ zIndex: 10 }}>
					<Link to="/catalog" className="Hero__text__button">
						See Catalog
					</Link>
				</div>
			</div>
			<img alt="logo" src={mainLogo} />
			<div className="Hero__shape right"></div>
		</div>
	)
}

export default Hero
