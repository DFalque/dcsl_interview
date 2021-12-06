import axios from "axios"

export default async function postPhone(phone) {
	const response = await axios.post(`http://localhost:4000/addphone`, phone)

	return response
}
