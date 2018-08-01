const express = require('express')
const router = express.Router()
const Entry = require('../models/Entry')

// @route GET /api/entries/
// @desc Get all entries
router.get('/', (req, res) => {
	Entry.find()
		.sort({date: -1})
		.then( entries => res.json(entries))
})

// @route GET /api/entries/:id
// @desc Get one entry by id
router.get('/:id', (req, res) => {
	Entry.findById(req.params.id)
		.then(entry => res.json(entry))
		.catch( error => res.status(400).json({error}))
})

// @route POST /api/entries/
// @desc Create new Entry
router.post('/', (req, res) => {
	const newEntry = new Entry({
		header: req.body.header,
		description: req.body.description,
	})
	newEntry.save().then( entry => res.json(entry))
})

// @route DELETE /api/entries/:id
// @desc Delete an entry by id
router.delete('/:id', (req, res) => {
	Entry.findById(req.params.id)
		.then(entry => { entry.remove().then( () => res.json({ success: true }))})
		.catch( error => res.status(400).json({ error }))
})

module.exports = router