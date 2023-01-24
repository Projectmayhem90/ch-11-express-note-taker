
const express = require("express")
const app = express()
const router = express.Router()

router.set('view engine', 'ejs')

router.get('/', (req, res) =>  {
    res.send('Notes List')
})

router.get('/new', (req, res) => {
    res.send("Notes New Form")
})

router.post("/:id", (req, res) => {
    res.send(`Get Note with ID ${req.params.id}`)
})

router.put("/:id", (req, res) => {
    res.send(`Update Notes with ID ${req.parms.id}`)
})

router.delete("/:id", (req, res) => {
    res.send(`Delete Notes with ID ${req.params.id}`)
})

module.exports = router