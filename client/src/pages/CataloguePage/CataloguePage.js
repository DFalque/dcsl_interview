// LIBRARIES
import { useEffect, useState } from "react"
import CircularProgress from "@mui/material/CircularProgress"

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

	if (loading)
		return (
			<div style={{ display: "flex", width: "100%", height: "80vh" }}>
				<CircularProgress style={{ margin: "auto" }} />
			</div>
		)
	return (
		<div className="App">
			<div className="App__header">
				<h1 className="heading-primary--sub">Our Products</h1>
			</div>
			<div className="container">
				{catalogue.map((phone) => (
					<Card key={phone._id} {...phone} />
				))}
			</div>
		</div>
	)
}

export default CataloguePage
