const Phone = require("../model/phone")
const awsUploadIMage = require("../utils/aws-upload-images")
const { v4: uuidv4 } = require("uuid")

async function getAllPhones() {
	const phones = await Phone.find()
	return phones
}

async function findPhone(id) {
	const phone = await Phone.findOne({ id })
	if (!phone) throw new Error("Phone not Found")
	return phone
}

async function addPhone(req, res) {
	const { name, manufacturer, description, color } = req.body
	const { price, imageFileName, screen, ram } = req.body

	/*const { createReadStream, mimetype } = await file
	const extension = mimetype.split("/")[1]
	const fileName = `publication/${uuidv4()}.${extension}`
	const fileData = createReadStream()

	const result = await awsUploadIMage(fileData, fileName)

	*/

	const newPhone = {
		name,
		manufacturer,
		description,
		color,
		price,
		//imageFileName,
		screen,
		ram,
	}

	try {
		// const Phone = new Phone(newPhone)
		const Phone = new Phone()
		//Phone.save()
	} catch (error) {
		console.log(error)
	}

	return null
}

module.exports = { addPhone, getAllPhones, findPhone }
