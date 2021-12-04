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
	const [loading, setLoading] = useState(false)

	// FUNCTIONS
	async function getData() {
		setLoading(true)
		const phones = await getAllPhones()
		setCatalogue(phones)
		setLoading(false)
	}

	// USE EFFECTS
	useEffect(() => {
		getData()
	}, [])

	if (loading) return <div className="container"></div>
	return (
		<div className="App">
			<div className="container">
				{catalogue.map((phone) => (
					<Card key={phone._id} {...phone} />
				))}
			</div>
		</div>
	)
}

export default CataloguePage
