const express = require('express')
const file = require('../controller/user.js')
const router = express.Router()

router.post('/user/details', file.userData )

router.get('/fetch/Data', file.viewUser)

module.exports = router