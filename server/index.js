const express = require("express")
const app = express()
const port = 3000

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	)
	next()
})

app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.get("/phones", (req, res) => {
	res.send([
		{
			id: 0,
			name: "iPhone 7",
			manufacturer: "Apple",
			description: "lorem ipsum dolor sit amet consectetur.",
			color: "black",
			price: 769,
			imageFileName: "IPhone_7.png",
			screen: "4,7 inch IPS",
			processor: "A10 Fusion",
			ram: 2,
		},
		{
			id: 1,
			name: "iPhone 7",
			manufacturer: "Apple",
			description: "lorem ipsum dolor sit amet consectetur.",
			color: "black",
			price: 769,
			imageFileName: "IPhone_7.png",
			screen: "4,7 inch IPS",
			processor: "A10 Fusion",
			ram: 2,
		},
	])
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
