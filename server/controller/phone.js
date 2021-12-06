const Phone = require("../model/phone")
const awsUploadIMage = require("../utils/aws-upload-images")
const { v4: uuidv4 } = require("uuid")
var fs = require("fs")
const { Readable } = require("stream")

async function getAllPhones() {
	const phones = await Phone.find()
	return phones
}

async function findPhone(id) {
	const phone = await Phone.findOne({ _id: id })
	if (!phone) throw new Error("Phone not Found")
	return phone
}

async function addPhone(req, file) {
	console.log("Estamos aqui 1")
	const { name, manufacturer, description, color } = req
	const { price, screen, ram } = req
	console.log("Estamos aqui 2")
	const { mimetype, buffer } = await file
	const extension = mimetype.split("/")[1]
	const fileName = `img/${uuidv4()}.${extension}`
	//const fileData = createReadStream()
	//const fileData = fs.createReadStream(buffer)
	const stream = Readable.from(buffer)
	console.log("Estamos aqui 3")
	const result = await awsUploadIMage(stream, fileName)

	const newPhone = {
		name,
		manufacturer,
		description,
		color,
		price,
		imageFileName: result,
		screen,
		ram,
	}

	try {
		const phone = new Phone(newPhone)
		phone.save()
		return true
	} catch (error) {
		console.log(error)
		return false
	}
}
module.exports = { addPhone, getAllPhones, findPhone }
