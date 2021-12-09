// LIBRARIES
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config({ path: ".env" })
var cors = require("cors")
const app = express()
var multer = require("multer")
var upload = multer()
const port = 4000
//FUNCTIONS
const {
	getAllPhones,
	findPhone,
	addPhone,
	deletePhone,
	editPhone,
} = require("./controller/phone")

// MIDDLEWARE
app.use(cors())

//DATABASE

mongoose.connect(
	process.env.BBDD,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err, _) => {
		if (err) {
			console.log(err)
		} else {
			console.log("Conectado a la base de datos")
		}
	}
)

// GETS

app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.get("/phones", async (req, res) => {
	const data = await getAllPhones()
	res.send(data)
})

app.get("/getphone/", async (req, res) => {
	const { id } = req.query
	const data = await findPhone(id)
	res.send(data)
})

// POSTS

app.post("/addphone", upload.single("file"), async (req, res) => {
	const file = req.file
	const result = await addPhone(req.body, file)
	if (!result) res.send("Error addphone function")
	res.send("phone added")
})

app.post("/editphone/", upload.single("file"), async (req, res) => {
	const { id } = req.query
	console.log(req.file)
	const file = req.file
	const result = await editPhone(req.body, file, id)
	if (!result) res.send("Error addphone function")
	res.send(result)
})

// OTHERS
app.delete("/deletephone/", async (req, res) => {
	const { id } = req.query
	const result = await deletePhone(id)
	if (!result) res.send("Error delete info function")
	res.send("phone deleted")
})

// LISTEN

app.listen(process.env.PORT || port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
