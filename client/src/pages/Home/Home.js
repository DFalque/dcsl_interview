import "./Home.scss"
import mainLogo from "../../assets/img/Blogger.png"
import { Link } from "react-router-dom"

function Home(props) {
	return (
		<div to="/catalogue" className="Home">
			<section className="Home__shape left"></section>
			<div className="Home__text">
				<h1>Welcome to your favorite phone catalog</h1>
				<div>
					<Link to="/catalog" className="Home__text__button">
						See Catalogue
					</Link>
				</div>
			</div>
			<img src={mainLogo} />
			<section className="Home__shape right"></section>
		</div>
	)
}

export default Home
