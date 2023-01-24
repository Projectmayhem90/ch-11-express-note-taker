const { Router } = require('express')
const expess = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Here')
    res.sendStatus(500)
    res.render('index.html')
})

app.get('/notes', (req, res) =>  {
    res.send('Notes List')
})

app.get('/notes/new', (req, res) => {
    res.send("Notes New Form")
})

const userRouter = require ('./routes/notes')
const postRouter = require("./routes/posts")

app.use('/notes', useRouter)
app.use("/posts, postRouter")

app.listen(3000)

