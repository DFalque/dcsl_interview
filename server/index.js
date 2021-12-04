// LIBRARIES
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config({ path: ".env" })
var cors = require("cors")
const app = express()
const port = 3000

//FUNCTIONS
const { getAllPhones, findPhone } = require("./controller/phone")

// MIDDLEWARE
app.use((req, res, next) => {
	cors()
	next()
})
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	)
	next()
})

app.use(express.json())

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
	console.log(id)
	const data = await findPhone(id)
	console.log(data)
	res.send(data)
})

// POSTS

app.post("/addphone", (req, res) => {
	//console.log(req.body)
	res.send("esto es un telefono")
})

app.post("/addphones", (req, res) => {
	res.send("esto es un telefono")
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
