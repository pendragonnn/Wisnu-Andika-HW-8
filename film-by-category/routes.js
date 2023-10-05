const express = require('express')
const router = express.Router()
const { getFilmsByCategory } = require('./handler')

router.get('/:category', async(req, res) => await getFilmsByCategory(req, res))

module.exports = router