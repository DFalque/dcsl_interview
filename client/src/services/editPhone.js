import axios from "axios"

export default async function postPhone(phone, id) {
	const response = await axios.post(`http://localhost:4000/editphone/`, phone, {
		params: { id },
	})

	return response
}
