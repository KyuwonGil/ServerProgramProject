const express = require('express')
const router = express.Router()

router.get('/board', (req, res) => res.json({type:'main', form:{name : 'Board'}}))

module.exports = router;