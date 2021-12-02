import "./Card.scss"

const Cards = (props) => {
	const { name, description, manufacturer, price, ram, screen } = props
	console.log(props)
	return (
		<div className="Card">
			<div className="Card__image"></div>
			<div className="Card__info">
				<div>
					<p className="Card__info--brand">{manufacturer}</p>
				</div>
				<p className="Card__info--name">{name}</p>
				<p className="Card__info--phone"> {description}</p>
				<div className="Card__info__price">
					<p className="Card__info__price--button">Comprar</p>
					<p className="Card__info__price--cost">
						{price}
						<span>€</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Cards
