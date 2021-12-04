const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PhoneSchema = Schema({
	id: {
		type: Schema.Types.ObjectId,
		require: true,
	},
	name: {
		type: String,
		require: true,
	},
	manufacturer: {
		type: String,
		trim: true,
	},
	description: {
		type: String,
		trim: true,
	},
	color: {
		type: String,
		trim: true,
	},
	price: {
		type: Number,
		trim: true,
	},
	imageFileName: {
		type: String,
		trim: true,
	},
	screen: {
		type: String,
		trim: true,
	},
	ram: {
		type: Number,
		trim: true,
	},
	createAt: {
		type: Date,
		default: Date.now(),
	},
})

module.exports = mongoose.model("Phone", PhoneSchema)
