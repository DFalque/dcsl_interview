// LIBRARIES
import { useEffect, useState } from "react"
// COMPONENTS
import Nav from "./components/Nav"
import Card from "./components/Card"
//SERVICES
import getAllPhones from "./services/getAllPhones"
// OTHERS
import "./App.scss"

function App() {
	const [catalogue, setCatalogue] = useState([])

	useEffect(() => {
		async function getData() {
			const phones = await getAllPhones()
			setCatalogue(phones)
		}
		getData()
	}, [])

	if (!catalogue) return null
	return (
		<div className="App">
			<Nav />
			<div className="container">
				{catalogue.map((phone) => (
					<Card key={phone.id} {...phone} />
				))}
			</div>
		</div>
	)
}

export default App
