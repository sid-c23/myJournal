const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
const entries = require('./routes/entries')

// body parser
app.use(bodyParser.json())

// mongo URI
const db = require("./config/keys").mongoURI

// connect to mongo
mongoose
	.connect(db)
	.then(() => console.log("MongoDB connected..."))
	.catch(err => console.log(err))


// API Routes

app.use('/api/entries', entries)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))