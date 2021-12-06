import axios from "axios"

export default async function getAllPhones() {
	const { data } = await axios.get(`http://localhost:4000/phones`)
	return data
}
