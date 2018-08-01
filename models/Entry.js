const mongoose = require("mongoose")

const Schema = mongoose.Schema

const EntrySchema = new Schema({
	header: {
		type: String,
		required: true
	},
	description: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now
	}
})
const Entry = mongoose.model('entry', EntrySchema)
module.exports = Entry