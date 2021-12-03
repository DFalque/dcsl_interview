// LIBRARIES
import { useEffect, useState } from "react"
// COMPONENTS
import Nav from "./components/Nav"
import Card from "./components/Card"
import Navigation from "./routes/Navigation"
//SERVICES
import getAllPhones from "./services/getAllPhones"
// OTHERS
import "./App.scss"

function App() {
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
		<>
			<Navigation />
		</>
	)
}

export default App
