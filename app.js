const express = require('express')
const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello world')
})

router.get('/about', (req, res) => {
    res.send('About us')
})

app.use(router)

module.exports = app