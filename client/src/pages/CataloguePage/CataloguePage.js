// LIBRARIES
import { useEffect, useState } from "react"
// COMPONENTS
import Nav from "../../components/Nav"
import Card from "../../components/Card"
//SERVICES
import getAllPhones from "../../services/getAllPhones"
// OTHERS
import "./CataloguePage.scss"

const CataloguePage = () => {
	// STATES
	const [catalogue, setCatalogue] = useState([])

	// FUNCTIONS
	async function getData() {
		const phones = await getAllPhones()
		setCatalogue(phones)
	}

	// USE EFFECTS
	useEffect(() => {
		getData()
	}, [])

	if (!catalogue) return null
	return (
		<div className="App">
			<div className="container">
				{catalogue.map((phone) => (
					<Card key={phone.id} {...phone} />
				))}
			</div>
		</div>
	)
}

export default CataloguePage
