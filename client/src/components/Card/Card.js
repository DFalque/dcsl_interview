import { Link } from "react-router-dom"
import ButtonAction from "../atoms/buttons/ButtonAction/ButtonAction"
import "./Card.scss"

const Cards = (props) => {
	const { _id, name, description, manufacturer, price, imageFileName } = props
	return (
		<Link
			to={`/phone/${_id}`}
			className="Card"
			style={{ textDecoration: "none" }}
		>
			<div
				className="Card__image"
				style={{ backgroundImage: `url(${imageFileName})` }}
			></div>
			<div className="Card__info">
				<div>
					<p className="Card__info--brand">{manufacturer}</p>
				</div>
				<p className="Card__info--name">{name}</p>
				<p className="paragraph__small"> {description}</p>
				<div className="Card__info__price">
					<ButtonAction text="Buy" type="main" />
					<p className="Card__info__price--cost">
						{price}
						<span>€</span>
					</p>
				</div>
			</div>
		</Link>
	)
}

export default Cards
