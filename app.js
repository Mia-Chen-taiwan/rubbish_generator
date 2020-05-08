const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const helpers = require('handlebars-helpers')() // for if eq 'string'
const generateRubbish = require('./generate_rubbish')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const options = req.body.role
    const rubbish = generateRubbish(options)
    res.render('index', {talkRubbish: rubbish, options: options})
})

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})