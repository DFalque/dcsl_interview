const awsUploadIMage = require("../utils/aws-upload-images")
const { v4: uuidv4 } = require("uuid")
const { Readable } = require("stream")

async function CreateFile(file) {
	if (file !== undefined) {
		const { mimetype, buffer } = await file
		const extension = mimetype.split("/")[1]
		const fileName = `img/${uuidv4()}.${extension}`
		const stream = Readable.from(buffer)
		const fileResult = await awsUploadIMage(stream, fileName)
		return fileResult
	} else {
		return false
	}
}

module.exports = CreateFile
