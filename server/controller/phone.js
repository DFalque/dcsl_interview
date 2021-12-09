const Phone = require("../model/phone")
const awsUploadIMage = require("../utils/aws-upload-images")
const { v4: uuidv4 } = require("uuid")
const { Readable } = require("stream")
const CreateFile = require("../services/createFile")

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
	const { name, manufacturer, description, color } = req
	const { price, screen, ram } = req
	const { mimetype, buffer } = await file
	const extension = mimetype.split("/")[1]
	const fileName = `img/${uuidv4()}.${extension}`
	const stream = Readable.from(buffer)
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

async function deletePhone(id) {
	try {
		const phone = await Phone.findOneAndDelete({ _id: id })
		if (!phone) throw new Error("Phone not Found")
		return phone
	} catch (error) {
		console.log(error)
		return false
	}
}

async function editPhone(req, file, id) {
	const phone = await Phone.findOne({ _id: id })
	if (!phone) throw new Error("Phone not Found")

	const { name, manufacturer, description, color } = req
	const { price, screen, ram } = req

	const fileResult = await CreateFile(file)

	await Phone.findByIdAndUpdate(
		{ _id: id },
		{
			name: name || phone.name,
			manufacturer: manufacturer || phone.manufacturer,
			description: description || phone.description,
			color: color || phone.color,
			price: price || phone.price,
			imageFileName: fileResult || phone.imageFileName,
			screen: screen || phone.screen,
			ram: ram || phone.ram,
		}
	)

	return true
}

module.exports = { addPhone, getAllPhones, findPhone, deletePhone, editPhone }
