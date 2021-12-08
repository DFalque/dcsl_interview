import { useState } from "react"
import postPhone from "../../../services/postPhone"
import "./AddPhoneForm.scss"

const AddPhoneForm = () => {
	const [form, setForm] = useState(initialForm())
	const [fileUpload, setFileUpload] = useState(null)

	function initialForm() {
		return {
			name: "",
			manufacturer: "",
			description: "",
			color: "",
			price: 0,
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

	const onPublish = async () => {
		const phoneForm = new FormData()
		keyForm.forEach((element) => {
			phoneForm.append(element, form[element])
		})
		phoneForm.append("file", fileUpload)
		try {
			const result = await postPhone(phoneForm)
			const { data } = result
			if (!data.publish.status) {
				console.warn("Error en la petición")
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form
			className="AddPhoneForm"
			onSubmit={onPublish}
			encType="multipart/form-data"
		>
			{keyForm.map((element, index) => {
				return (
					<label key={index} className="AddPhoneForm__label">
						{`${element}:`}
						<input
							className="AddPhoneForm__label__input"
							type="text"
							onChange={(event) => handleChange(event, element)}
						/>
					</label>
				)
			})}

			<input
				className="AddPhoneForm__addImage"
				type="file"
				onChange={(e) => onDrop(e)}
			/>
			<input
				className="AddPhoneForm__submit"
				type="submit"
				value="Submit"
				name="data"
			/>
		</form>
	)
}

export default AddPhoneForm
