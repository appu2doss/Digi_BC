const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.get('/users', UserCtrl.getUsers)

router.post('/post', UserCtrl.createPost)
router.get('/user/:username', UserCtrl.getUserByName)

module.exports = router