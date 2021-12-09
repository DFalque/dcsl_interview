import { useState } from "react"
import { useParams } from "react-router"
import deletePhone from "../../../services/deletePhone"
import editPhone from "../../../services/editPhone"
import { useHistory } from "react-router-dom"
import "./EditPhoneForm.scss"
import ButtonBorder from "../../atoms/buttons/ButtonBorder/ButtonBorder"

function EditPhoneForm() {
	const [form, setForm] = useState(initialForm())
	const [fileUpload, setFileUpload] = useState(null)
	const { id } = useParams()
	let history = useHistory()

	function initialForm() {
		return {
			name: "",
			manufacturer: "",
			description: "",
			color: "",
			price: "",
			screen: "",
			processor: "",
			ram: "",
		}
	}

	const keyForm = Object.keys(form)

	const onDrop = (e) => {
		const file = e.target.files[0]
		setFileUpload(file)
	}

	function handleChange(event, type) {
		setForm({ ...form, [type]: event.target.value })
		//console.log(`Esta cambiado el ${type}: ${form[type]}`)
	}

	const onDelete = async () => {
		try {
			history.replace("/catalog")
			const result = deletePhone(id)
			const { data } = result
			if (!data.publish.status) console.warn("Error en la petición")
		} catch (error) {
			console.log(error)
		}
	}

	const onPublish = async () => {
		const phoneForm = new FormData()
		keyForm.forEach((element) => {
			phoneForm.append(element, form[element])
		})
		phoneForm.append("file", fileUpload)
		try {
			history.go(0)
			const result = await editPhone(phoneForm, id)
			const { data } = result
			if (!data.publish.status) {
				console.warn("Error en la petición")
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="AddPhoneForm" encType="multipart/form-data">
			{keyForm.map((elementForm, index) => {
				return (
					<label key={index} className="AddPhoneForm__label">
						{`${elementForm}:`}
						<input
							className="AddPhoneForm__label__input"
							type="text"
							onChange={(event) => handleChange(event, elementForm)}
						/>
					</label>
				)
			})}

			<input
				className="AddPhoneForm__addImage"
				type="file"
				onChange={(e) => onDrop(e)}
			/>
			<div className="AddPhoneForm__buttonContainer">
				<ButtonBorder text="Delete" click={onDelete} type="Carefull" />
				<button
					className="AddPhoneForm__buttonContainer__submit"
					onClick={() => onPublish()}
				>
					Submit
				</button>
			</div>
		</div>
	)
}

export default EditPhoneForm
