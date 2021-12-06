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

	const onDrop = (e) => {
		const file = e.target.files[0]
		setFileUpload(file)
	}

	function handleChange(event, type) {
		setForm({ ...form, [type]: event.target.value })
		console.log(`Esta cambiado el ${type}: ${form[type]}`)
	}

	const onPublish = async () => {
		const phone = new FormData()
		phone.append("name", form.name)
		phone.append("manufacturer", form.manufacturer)
		phone.append("description", form.description)
		phone.append("color", form.color)
		phone.append("price", form.price)
		phone.append("screen", form.screen)
		phone.append("processor", form.processor)
		phone.append("ram", form.ram)
		phone.append("file", fileUpload)
		try {
			const result = await postPhone(phone)
			console.log("await realizado")
			const { data } = result
			if (!data.publish.status) {
				console.warn("Error en")
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
			<label className="AddPhoneForm__label">
				Name:
				<input type="text" onChange={(event) => handleChange(event, "name")} />
			</label>
			<label className="AddPhoneForm__label">
				Manufacturer:
				<input
					type="text"
					onChange={(event) => handleChange(event, "manufacturer")}
				/>
			</label>
			<label className="AddPhoneForm__label">
				Description:
				<input
					type="text"
					onChange={(event) => handleChange(event, "description")}
				/>
			</label>
			<label className="AddPhoneForm__label">
				color:
				<input type="text" onChange={(event) => handleChange(event, "color")} />
			</label>
			<label className="AddPhoneForm__label">
				price:
				<input type="text" onChange={(event) => handleChange(event, "price")} />
			</label>
			<label className="AddPhoneForm__label">
				screen:
				<input
					type="text"
					onChange={(event) => handleChange(event, "screen")}
				/>
			</label>
			<label className="AddPhoneForm__label">
				processor:
				<input
					type="text"
					onChange={(event) => handleChange(event, "processor")}
				/>
			</label>
			<label className="AddPhoneForm__label">
				ram:
				<input type="text" onChange={(event) => handleChange(event, "ram")} />
			</label>
			<input type="file" onChange={(e) => onDrop(e)} />
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
