import "./PhonePage.scss"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import getPhone from "../../services/getPhone"
import CircularProgress from "@mui/material/CircularProgress"

function PhonePage() {
	const { id } = useParams()
	const [dataPhone, setDataPhone] = useState({})
	const [loading, setLoading] = useState(false)

	async function getData() {
		setLoading(true)
		const data = await getPhone(id)
		setDataPhone(data)
		setLoading(false)
	}

	useEffect(() => {
		getData()
	}, [])

	if (loading)
		return (
			<div className="PhonePage">
				<CircularProgress style={{ margin: "auto" }} />
			</div>
		)
	return (
		<div className="PhonePage">
			<div
				className="PhonePage__imageContainer"
				style={{ backgroundImage: `url(${dataPhone.imageFileName})` }}
			></div>
			<div className="PhonePage__infoContainer">
				<div className="PhonePage__infoContainer__header">
					<h2 className="heading-secondary">{dataPhone.manufacturer}</h2>
					<h1 className="heading-primary--sub">{dataPhone.name}</h1>
				</div>
				<p className="paragraph__main">{dataPhone.description}</p>
				<ul className="PhonePage__infoContainer__list">
					<li className="paragraph">{`RAM: ${dataPhone.ram}`}</li>
					<li className="paragraph">{`CPU: ${dataPhone.processor}`}</li>
					<li className="paragraph">{`Screen: ${dataPhone.screen}`}:</li>
					<li className="paragraph">{`Color: ${dataPhone.color}`}</li>
				</ul>
				<div className="PhonePage__infoContainer__buy">
					<button className="PhonePage__infoContainer__buy__button">
						Añadir a la Cesta
					</button>
					<h1 className="heading-primary--main">
						783<span className="paragraph">€</span>
					</h1>
				</div>
			</div>
		</div>
	)
}

export default PhonePage
