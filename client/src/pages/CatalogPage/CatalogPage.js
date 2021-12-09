// LIBRARIES
import { useEffect, useState } from "react"

// COMPONENTS
import Card from "../../components/Card"
import ModalSimple from "../../components/ModalSimple"
import AddPhoneForm from "../../components/Forms/AddPhoneForm/AddPhoneForm"
import Header from "../../components/Header"
import LoadingData from "../../components/LoadingData"

//SERVICES
import getAllPhones from "../../services/getAllPhones"
// OTHERS
import "./CatalogPage.scss"
const CatalogPage = () => {
	// STATES
	const [catalog, setCatalog] = useState([])
	const [loading, setLoading] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [titleModal, setTittleModal] = useState("")
	const [childrenModal, setChildrenModal] = useState(null)

	//FUNCTIONS

	async function getData() {
		setLoading(true)
		const phones = await getAllPhones()
		setCatalog(phones)
		setLoading(false)
	}
	const handlerModal = () => {
		setTittleModal("Add new phone")
		setChildrenModal(<AddPhoneForm />)
		setShowModal(true)
	}
	// USE EFFECTS
	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<Header
				click={handlerModal}
				titleButton={"+ Add"}
				title={"Our Products"}
			/>
			<div className="CatalogPage">
				{loading ? (
					<LoadingData />
				) : (
					<div className="CatalogPage__container">
						{catalog.map((phone) => (
							<Card key={phone._id} {...phone} />
						))}
					</div>
				)}
			</div>
			<ModalSimple show={showModal} setShow={setShowModal} title={titleModal}>
				{childrenModal}
			</ModalSimple>
		</>
	)
}

export default CatalogPage
