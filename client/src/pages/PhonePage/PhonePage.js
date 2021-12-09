import "./PhonePage.scss"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import getPhone from "../../services/getPhone"
import CircularProgress from "@mui/material/CircularProgress"
import Header from "../../components/Header"
import ModalSimple from "../../components/ModalSimple"
import EditPhoneForm from "../../components/Forms/EditPhoneForm/EditPhoneForm"
import ButtonBorder from "../../components/atoms/buttons/ButtonBorder/ButtonBorder"

function PhonePage() {
	const { id } = useParams()
	const [dataPhone, setDataPhone] = useState({})
	const [loading, setLoading] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [titleModal, setTittleModal] = useState("")
	const [childrenModal, setChildrenModal] = useState(null)

	const handlerModal = () => {
		setTittleModal("Edit phone")
		setChildrenModal(<EditPhoneForm />)
		setShowModal(true)
	}

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
		<>
			<Header click={handlerModal} titleButton={"Edit"} title={"Details"} />
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
						<ButtonBorder text="Add to buy" type="" size="big" />
						<h1 className="heading-primary--main">
							783<span className="paragraph">€</span>
						</h1>
					</div>
				</div>
			</div>
			<ModalSimple show={showModal} setShow={setShowModal} title={titleModal}>
				{childrenModal}
			</ModalSimple>
		</>
	)
}

export default PhonePage
