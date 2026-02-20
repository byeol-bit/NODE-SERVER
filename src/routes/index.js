const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('서버 정상 동작 중 🚀')
})

module.exports = router