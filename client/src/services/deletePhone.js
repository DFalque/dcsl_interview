import axios from "axios"

export default async function deletePhone(id) {
	const { data } = await axios.delete(`http://localhost:4000/deletephone/`, {
		params: { id },
	})

	return data
}
