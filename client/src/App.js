// LIBRARIES
import { useEffect, useState } from "react"
// COMPONENTS
import Nav from "./components/Nav"
//SERVICES
import getAllPhones from "./services/getAllPhones"
// OTHERS
import "./App.scss"

function App() {
	const [catalogue, setCatalogue] = useState([])
	useEffect(async () => {
		const phones = await getAllPhones()
		setCatalogue(phones)
	}, [])

	if (!catalogue) return null
	return (
		<div className="App">
			<Nav />
			<p className="paragraph">Phone Catalogue</p>
			{catalogue.map((phone) => (
				<p>{phone.name}</p>
			))}
		</div>
	)
}

export default App
