import axios from "axios"

export default async function getPhone(id) {
	const { data } = await axios.get(`http://localhost:3000/getphone/`, {
		params: { id },
	})

	return data
}
